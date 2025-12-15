export async function onRequest(context) {
    const { request, env } = context;

    // R2 public domain for fallback redirects
    const R2_PUBLIC_DOMAIN = "https://download.memejpg.com";

    // Basic security: Check Referer to prevent hotlinking
    const referer = request.headers.get("Referer");
    const allowedDomain = "memejpg.com";

    if (!referer || (!referer.includes(allowedDomain) && !referer.includes("localhost"))) {
        return Response.redirect("https://memejpg.com/download", 302);
    }

    // Determine architecture from query param
    const url = new URL(request.url);
    const arch = url.searchParams.get("arch") || "arm64";
    const version = url.searchParams.get("version");

    try {
        // Check if R2 binding is available
        if (!env.R2_BUCKET) {
            // R2 not bound - redirect to public R2 domain with version if specified
            if (version) {
                const filename = `MemeJPG-${version}-${arch}.dmg`;
                return Response.redirect(`${R2_PUBLIC_DOMAIN}/${filename}`, 302);
            }
            // Without version and without R2 binding, we can't determine latest
            return new Response(JSON.stringify({
                error: "R2_BUCKET binding not configured. Please check Cloudflare Pages settings."
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        // List objects in R2 bucket
        const listed = await env.R2_BUCKET.list();

        // Filter by architecture
        // Naming convention: MemeJPG-{Version}-{arch}.dmg
        const files = listed.objects.filter(o => {
            const k = o.key.toLowerCase();
            if (!k.endsWith('.dmg')) return false;

            if (arch === 'arm64') {
                return k.includes('arm64') || k.includes('applesilicon');
            } else if (arch === 'x64') {
                return k.includes('x64') || k.includes('intel');
            }
            return false;
        });

        if (files.length === 0) {
            return new Response(JSON.stringify({
                error: `No ${arch} DMG files found in R2 bucket`
            }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Sort by semantic version (extract version from filename)
        files.sort((a, b) => {
            const versionA = a.key.match(/(\d+\.\d+\.\d+)/)?.[1] || "0.0.0";
            const versionB = b.key.match(/(\d+\.\d+\.\d+)/)?.[1] || "0.0.0";
            return versionB.localeCompare(versionA, undefined, { numeric: true, sensitivity: 'base' });
        });

        let objectKey = null;

        if (version) {
            // Find specific version
            const vFile = files.find(f => f.key.includes(version));
            if (vFile) {
                objectKey = vFile.key;
            } else {
                return new Response(JSON.stringify({
                    error: `Version ${version} not found for ${arch}`
                }), {
                    status: 404,
                    headers: { "Content-Type": "application/json" }
                });
            }
        } else {
            // Get latest version (first after sorting)
            objectKey = files[0].key;
        }

        // Stream file directly from R2
        const object = await env.R2_BUCKET.get(objectKey);
        if (!object) {
            return new Response(JSON.stringify({ error: "File not found in R2" }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set("etag", object.httpEtag);
        headers.set("Content-Disposition", `attachment; filename="${objectKey}"`);

        return new Response(object.body, { headers });

    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
