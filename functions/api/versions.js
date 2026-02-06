export async function onRequest(context) {
    const GITHUB_REPO = "yyh0808/memejpg-app";
    const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=100`;
    const cache = caches.default;
    const cacheKey = new Request(GITHUB_API_URL, { method: "GET" });

    const buildHeaders = () => {
        const headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "MemeJPG-Website"
        };

        const token = context?.env?.GITHUB_TOKEN;
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        return headers;
    };

    const normalizeReleases = (releases) => {
        const versions = {};

        for (const release of releases || []) {
            const versionMatch = release.tag_name?.match(/v?(\d+\.\d+\.\d+)/);
            if (!versionMatch) continue;

            const version = versionMatch[1];
            const files = [];

            for (const asset of release.assets || []) {
                const name = asset.name.toLowerCase();

                if (name.includes("source") || name.endsWith(".yml") || name.endsWith(".yaml")) {
                    continue;
                }

                files.push({
                    key: asset.name,
                    size: asset.size,
                    url: asset.browser_download_url
                });
            }

            versions[version] = {
                version: version,
                files: files,
                date: release.published_at || release.created_at
            };
        }

        const versionList = Object.values(versions).sort((a, b) => {
            return b.version.localeCompare(a.version, undefined, { numeric: true, sensitivity: "base" });
        });

        return {
            latest: versionList.length > 0 ? versionList[0] : null,
            versions: versionList
        };
    };

    try {
        const cached = await cache.match(cacheKey);
        if (cached) {
            context.waitUntil((async () => {
                try {
                    const response = await fetch(GITHUB_API_URL, { headers: buildHeaders() });
                    if (response.ok) {
                        const releases = await response.json();
                        const payload = normalizeReleases(releases);
                        const fresh = new Response(JSON.stringify(payload), {
                            headers: {
                                "Content-Type": "application/json",
                                "Cache-Control": "public, max-age=300"
                            }
                        });
                        await cache.put(cacheKey, fresh.clone());
                    }
                } catch (e) {
                    // Silent background refresh failures.
                }
            })());

            return cached;
        }

        const response = await fetch(GITHUB_API_URL, { headers: buildHeaders() });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const releases = await response.json();
        const payload = normalizeReleases(releases);
        const result = new Response(JSON.stringify(payload), {
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300"
            }
        });

        await cache.put(cacheKey, result.clone());
        return result;
    } catch (e) {
        const cached = await cache.match(cacheKey);
        if (cached) {
            return cached;
        }

        return new Response(JSON.stringify({
            latest: null,
            versions: [],
            error: e.message
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store"
            }
        });
    }
}
