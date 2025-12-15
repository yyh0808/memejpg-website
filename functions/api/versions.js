export async function onRequest(context) {
    const { env } = context;

    if (!env.R2_BUCKET) {
        return new Response(JSON.stringify({ error: "R2_BUCKET not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        // List objects in the bucket
        const listed = await env.R2_BUCKET.list();

        // Parse versions from filenames
        // Expected format: MemeJPG-{Version}-{Arch}.dmg or similar
        // We will regroup them by version.

        const versions = {};

        for (const object of listed.objects) {
            const key = object.key;
            // Simple regex to match semantic versions like 1.0.0, 1.2.3-beta, etc.
            // Assumption: Filename contains version, e.g., "MemeJPG-1.0.1-arm64.dmg"
            const versionMatch = key.match(/(\d+\.\d+\.\d+)/);

            if (versionMatch) {
                const version = versionMatch[1];
                if (!versions[version]) {
                    versions[version] = {
                        version: version,
                        files: [],
                        date: object.uploaded // Use upload date of the first file found
                    };
                }

                let arch = 'unknown';
                if (key.includes('arm64') || key.includes('AppleSilicon') || key.includes('m1')) {
                    arch = 'arm64';
                } else if (key.includes('x64') || key.includes('Intel')) {
                    arch = 'x64';
                }

                versions[version].files.push({
                    key: key,
                    size: object.size,
                    arch: arch,
                    url: `/download-api?version=${version}&arch=${arch}`
                });
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
            headers: { "Content-Type": "application/json" }
        });

    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
