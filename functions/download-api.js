export async function onRequest(context) {
    const { request, env } = context;

    // Basic security: Check Referer to prevent hotlinking
    const referer = request.headers.get("Referer");
    const allowedDomain = "memejpg.com"; // Adjust if testing locally or on other domains

    // Allow if no referer (direct access) or matches domain? 
    // User said "ensure download file is from main site click buttons"
    // So likely we WANT to enforce Referer or Origin.

    if (!referer || (!referer.includes(allowedDomain) && !referer.includes("localhost"))) {
        // Optional: Redirect to download page instead of erroring
        return Response.redirect("https://memejpg.com/download", 302);
    }

    // Determine architecture from query param
    const url = new URL(request.url);
    const arch = url.searchParams.get("arch");
    const version = url.searchParams.get("version"); // Support specific version download

    // If R2 binding is available, we could dynamically find the key.
    // For now, we assume a naming convention or just redirect to fixed latest URLs
    // BUT the user asked to "automatically read R2 latest version".
    // Efficient way: Redirect to logical filename, and let a separate R2 retrieval function handle the stream or presigned URL.
    // Or, we list here and find the file.

    // For simplicity and performance, if specific version is requested, we try to construct that key.
    // If not, we look for "latest" logical concept or perform a list (which might be slow-ish but acceptable).

    try {
        let objectKey = null;

        if (env.R2_BUCKET) {
            // If we have R2, let's find the correct file
            const listed = await env.R2_BUCKET.list();

            // Filter by arch
            const files = listed.objects.filter(o => {
                const k = o.key.toLowerCase();
                const isDmg = k.endsWith('.dmg');
                if (!isDmg) return false;

                if (arch === 'arm64') {
                    return k.includes('arm64') || k.includes('applesilicon') || k.includes('m1');
                } else if (arch === 'x64') {
                    return k.includes('x64') || k.includes('intel');
                }
                return true; // Universal? or just fallback
            });

            // Sort by version (naive timestamp sort or semantic version sort)
            // Using uploaded timestamp for simplicity as "latest"
            files.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));

            if (files.length > 0) {
                if (version) {
                    // Try to find specific version
                    const vFile = files.find(f => f.key.includes(version));
                    if (vFile) objectKey = vFile.key;
                } else {
                    // Default to latest
                    objectKey = files[0].key;
                }
            }
        }

        if (objectKey) {
            // Get the object from R2 (api/download/[key] style?)
            // Or easier: redirect to a public R2 domain if configured.
            // User didn't specify public R2 domain, just R2 bucket.
            // If R2 bucket is private, we must serve it via worker.

            const object = await env.R2_BUCKET.get(objectKey);
            if (!object) {
                return new Response("File not found", { status: 404 });
            }

            const headers = new Headers();
            object.writeHttpMetadata(headers);
            headers.set("etag", object.httpEtag);

            return new Response(object.body, {
                headers,
            });
        }

        // Fallback if R2 not configured or empty: Redirect to hardcoded
        let r2DownloadUrl = "https://r2.memejpg.com/MemeJPG-Mac-Universal.dmg"; // Default

        if (arch === 'arm64') {
            r2DownloadUrl = "https://r2.memejpg.com/MemeJPG-Mac-AppleSilicon.dmg";
        } else if (arch === 'x64') {
            r2DownloadUrl = "https://r2.memejpg.com/MemeJPG-Mac-Intel.dmg";
        }

        // If version specified in fallback mode?
        if (version) {
            // Append version? No standard way without storage.
            // Just ignore or try to guess.
        }

        return Response.redirect(r2DownloadUrl, 302);
    } catch (e) {
        return new Response(`Error: ${e.message}`, { status: 500 });
    }
}
