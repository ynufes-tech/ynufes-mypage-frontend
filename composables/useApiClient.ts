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
    ).then((resp: any) => {
      if (resp.ok) return { data: resp.json(), unauthorized: false, error: null } as BackendResponse
      if (resp.status === 401) {
        authStore.clearToken()
        authStore.clearUser()
        return { data: null, unauthorized: true, error: resp.status }
      }
      return { data: null, unauthorized: false, error: resp.statusText }
    }).catch((e: any) => {
      return { data: null, unauthorized: false, error: e } as BackendResponse
    })
  }

  const post = async (url: string, body: any): Promise<BackendResponse> => {
    const token = authStore.token
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
    return await fetch(
      `${nuxtConfig.public.baseURL}${url}`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }
    ).then((resp: any) => {
      if (resp.ok) return { data: resp.json(), unauthorized: false, error: null } as BackendResponse
      if (resp.status === 401) {
        authStore.clearToken()
        authStore.clearUser()
        return { data: null, unauthorized: true, error: resp.status }
      }
      return { data: null, unauthorized: true, error: resp.statusText }
    }).catch((e: any) => {
      return { data: null, unauthorized: false, error: e } as BackendResponse
    })
  }
  return { get, post }
}

export default useApiClient
