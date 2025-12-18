export async function onRequest(context) {
  const { request, env, params } = context

  const workerApiUrl = env.WORKER_API_URL || 'https://memejpg-worker-api.memejpg.workers.dev'

  const path = params.path ? params.path.join('/') : ''
  const targetUrl = `${workerApiUrl}/payment/${path}`

  const headers = new Headers(request.headers)
  headers.set('Host', new URL(workerApiUrl).host)

  try {
    if (request.method === 'POST' && path === 'checkout') {
      const body = await request.json().catch(() => null)
      if (!body || typeof body !== 'object') {
        return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      const priceId = env.STRIPE_PRICE_ID_PRO || ''
      if (!priceId) {
        return new Response(JSON.stringify({ error: 'STRIPE_PRICE_ID_PRO not configured' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      }

      const successUrl = body.successUrl || ''
      const cancelUrl = body.cancelUrl || ''

      const forwardHeaders = new Headers(headers)
      forwardHeaders.delete('content-length')
      forwardHeaders.set('Content-Type', 'application/json')

      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: forwardHeaders,
        body: JSON.stringify({ priceId, successUrl, cancelUrl }),
      })

      const responseHeaders = new Headers(response.headers)
      responseHeaders.set('Access-Control-Allow-Origin', '*')

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      })
    }

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers,
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
