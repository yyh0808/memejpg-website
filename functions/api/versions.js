export async function onRequest(context) {
    const GITHUB_REPO = "yyh0808/memejpg-app";
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

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

        // Parse releases into our format
        const versions = {};

        for (const release of releases) {
            // Extract version from tag_name (e.g., "v0.0.2" -> "0.0.2")
            const versionMatch = release.tag_name.match(/v?(\d+\.\d+\.\d+)/);
            if (!versionMatch) continue;

            const version = versionMatch[1];
            const files = [];

            // Process assets to find DMG files for different architectures
            for (const asset of release.assets || []) {
                const name = asset.name.toLowerCase();
                
                // Skip source code archives and yml files
                if (name.includes('source') || name.endsWith('.yml') || name.endsWith('.yaml')) {
                    continue;
                }

                let arch = null;
                if (name.includes('arm64') || name.includes('applesilicon') || name.includes('m1')) {
                    arch = 'arm64';
                } else if (name.includes('x64') || name.includes('intel')) {
                    arch = 'x64';
                }

                // Only include DMG and ZIP files
                if (arch && (name.endsWith('.dmg') || name.endsWith('.zip'))) {
                    files.push({
                        key: asset.name,
                        size: asset.size,
                        arch: arch,
                        url: asset.browser_download_url
                    });
                }
            }

            // Only add version if it has at least one valid file
            if (files.length > 0) {
                versions[version] = {
                    version: version,
                    files: files,
                    date: release.published_at || release.created_at
                };
            }
        }

        // Convert to array and sort (descending version)
        const versionList = Object.values(versions).sort((a, b) => {
            return b.version.localeCompare(a.version, undefined, { numeric: true, sensitivity: 'base' });
        });

        // Identify latest
        const latest = versionList.length > 0 ? versionList[0] : null;

        return new Response(JSON.stringify({
            latest: latest,
            versions: versionList
        }), {
            headers: { 
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300" // Cache for 5 minutes
            }
        });

    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
