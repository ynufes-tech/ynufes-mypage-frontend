import { useAuthStore } from '~/stores/auth'

// APIをAuthorizationヘッダを付与せずに叩けるためにClientを提供する
const useApiClient = () => {
  const authStore = useAuthStore()
  const nuxtConfig = useRuntimeConfig()

  interface BackendResponse {
    data: any
    unauthorized: boolean
    error: any
  }

  const get = async (
    url: string,
    params?: Record<string, any>
  ): Promise<BackendResponse> => {
    const token = authStore.token
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
    return await fetch(
      `${nuxtConfig.public.baseURL}${url}?${new URLSearchParams(params)}`,
      { headers }
    )
      .then((resp: Response) => handleResponse(resp))
      .catch((e: any) => {
        return { data: null, unauthorized: false, error: e } as BackendResponse
      })
  }

  const post = async (url: string, body: any): Promise<BackendResponse> => {
    const token = authStore.token
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
    if (typeof body !== 'string') body = JSON.stringify(body)
    return await fetch(`${nuxtConfig.public.baseURL}${url}`, {
      method: 'POST',
      headers,
      body
    })
      .then((resp: any) => handleResponse(resp))
      .catch((e: any) => {
        return { data: null, unauthorized: false, error: e } as BackendResponse
      })
  }

  const handleResponse = async (resp: Response): Promise<BackendResponse> => {
    if (resp.ok) {
      const respStr = await resp.text()
      let respData
      try {
        respData = JSON.parse(respStr)
      } catch (e) {}
      return {
        data: respData,
        unauthorized: false,
        error: null
      } as BackendResponse
    }
    if (resp.status === 401) {
      authStore.clearToken()
      authStore.clearUser()
      return {
        data: null,
        unauthorized: true,
        error: resp.status
      } as BackendResponse
    }
    return {
      data: null,
      unauthorized: true,
      error: resp.statusText
    } as BackendResponse
  }
  return { get, post }
}

export default useApiClient
