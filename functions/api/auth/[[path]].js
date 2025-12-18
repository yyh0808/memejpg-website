// Proxy auth requests to the Worker API
// This handles routes like /api/auth/web/login, /api/auth/web/register, etc.

export async function onRequest(context) {
  const { request, env, params } = context

  // Get the Worker API URL from environment variable
  // Set this in Cloudflare Pages settings: WORKER_API_URL = https://your-worker.workers.dev
  const workerApiUrl = env.WORKER_API_URL || 'https://memejpg-worker-api.memejpg.workers.dev'

  // Build the target URL
  const path = params.path ? params.path.join('/') : ''
  const targetUrl = `${workerApiUrl}/auth/${path}`

  // Forward the request
  const headers = new Headers(request.headers)
  headers.set('Host', new URL(workerApiUrl).host)

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
    })

    // Return the response with CORS headers
    const responseHeaders = new Headers(response.headers)
    responseHeaders.set('Access-Control-Allow-Origin', '*')

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error', message: error.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

// Handle OPTIONS preflight requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  })
}
