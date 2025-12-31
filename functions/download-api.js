export async function onRequest(context) {
    const { request } = context;
    const GITHUB_REPO = "yyh0808/memejpg-app";
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

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
        // Fetch releases from GitHub API
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'MemeJPG-Website'
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const releases = await response.json();

        // Find the target release
        let targetRelease = null;
        if (version) {
            // Find specific version
            targetRelease = releases.find(r => {
                const versionMatch = r.tag_name.match(/v?(\d+\.\d+\.\d+)/);
                return versionMatch && versionMatch[1] === version;
            });
        } else {
            // Get latest release
            targetRelease = releases[0];
        }

        if (!targetRelease) {
            return new Response(JSON.stringify({
                error: version ? `Version ${version} not found` : "No releases found"
            }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Find the appropriate asset for the requested architecture
        let downloadUrl = null;
        for (const asset of targetRelease.assets || []) {
            const name = asset.name.toLowerCase();
            
            // Skip source code archives and yml files
            if (name.includes('source') || name.endsWith('.yml') || name.endsWith('.yaml')) {
                continue;
            }

            // Prefer DMG files, but also accept ZIP
            const isDmg = name.endsWith('.dmg');
            const isZip = name.endsWith('.zip');
            
            if (!isDmg && !isZip) continue;

            let matchesArch = false;
            if (arch === 'arm64') {
                matchesArch = name.includes('arm64') || name.includes('applesilicon') || name.includes('m1');
            } else if (arch === 'x64') {
                matchesArch = name.includes('x64') || name.includes('intel');
            }

            if (matchesArch) {
                // Prefer DMG over ZIP
                if (isDmg || (!downloadUrl && isZip)) {
                    downloadUrl = asset.browser_download_url;
                    if (isDmg) break; // Found DMG, no need to continue
                }
            }
        }

        if (!downloadUrl) {
            return new Response(JSON.stringify({
                error: `No ${arch} download file found for ${version || 'latest'} release`
            }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Redirect to GitHub download URL
        return Response.redirect(downloadUrl, 302);

    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
