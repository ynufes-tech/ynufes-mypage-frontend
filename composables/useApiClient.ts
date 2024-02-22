import { useAuthStore } from '~/stores/auth'

// APIをAuthorizationヘッダを付与せずに叩けるためにClientを提供する
const useApiClient = () => {
  const authStore = useAuthStore()
  const nuxtConfig = useRuntimeConfig()

  const get = async (
    url: string,
    params?: Record<string, any>
  ): Promise<any> => {
    const token = authStore.token
    const headers: [key: string, value: string][] = token
      ? [['Authorization', `Bearer ${token}`]]
      : []
    const { data, error } = await useFetch(
      `${nuxtConfig.public.baseURL}${url}?${new URLSearchParams(params)}`,
      { headers }
    )
    if (error.value) {
      if (error.value.statusCode === 401) {
        authStore.clearToken()
        authStore.clearUser()
        throw new Error('Unauthorized')
      }
      throw new Error('Failed to fetch')
    }
    return data.value
  }

  const post = async (url: string, body: any): Promise<any> => {
    const token = authStore.token
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
    const { data, error } = await useFetch(
      `${nuxtConfig.public.baseURL}${url}`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      }
    )
    if (error.value) {
      if (error.value.statusCode === 401) {
        authStore.clearToken()
        authStore.clearUser()
        throw new Error('Unauthorized')
      }
      throw new Error('Failed to fetch')
    }
    return data.value
  }
  return { get, post }
}

export default useApiClient
