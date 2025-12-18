export async function onRequest(context) {
  const { request, env, params } = context

  const workerApiUrl = env.WORKER_API_URL || 'https://memejpg-worker-api.memejpg.workers.dev'

  const path = params.path ? params.path.join('/') : ''
  const targetUrl = `${workerApiUrl}/download/${path}`.replace(/\/$/, '')

  const headers = new Headers(request.headers)
  headers.set('Host', new URL(workerApiUrl).host)

  const clientIp = request.headers.get('CF-Connecting-IP')
  if (clientIp) headers.set('X-Forwarded-For', clientIp)

  try {
    const response = await fetch(targetUrl + (new URL(request.url).search || ''), {
      method: request.method,
      headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
    })

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
