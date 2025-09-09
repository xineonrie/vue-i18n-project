export interface RequestOptions {
    api: string
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    payload?: Record<string, any>
    headers?: Record<string, string>
  }
  
  export interface ApiResponse<T = any> {
    ok: boolean
    status: number
    data?: T
    error?: string
  }

  const BASE_URL = 'https://example.com'

  export async function realRequest<T = any>({
    api,
    method = 'GET',
    payload,
    headers = {}
    }: RequestOptions): Promise<ApiResponse<T>> {
        try{
            const options: RequestInit = {
                method,
                headers:{
                    'Content-Type': 'application/json',
                    ...headers
                }
            }

            if(payload && method !=='GET')  {
                options.body = JSON.stringify(payload)
            }

            let finalUrl = BASE_URL + api
            if(payload && method === 'GET') {
                const params = new URLSearchParams(payload as any).toString()
                finalUrl += (api.includes('?') ? '&' : '?') + params
            }

            const resp = await fetch(finalUrl, options) // mock request
            const contentType = resp.headers.get('content-type') || ''
            const data = contentType.includes('application/json')
              ? await resp.json()
              : await resp.text()

              if (!resp.ok) {
                // http not 200
                return { ok: false, status: resp.status, error: String(data) }
              }
              // http 200
              return { ok: true, status: resp.status, data }
        } catch (e: any) {
            return { ok: false, status: 0, error: e?.message || 'Network error' }
          }
  }

export async function request<T = any>({ url, method, payload }: any) {
    await new Promise(res => setTimeout(res, 200))
    return {
        ok: true,
        status: 200,
        data: {
        url,
        method,
        payload,
        message: 'Success!'
        } as T
    }
}