import { useAuthStore } from '~/stores/auth'

// APIをAuthorizationヘッダを付与せずに叩けるためにClientを提供する
const useApiClient = () => {
  const authStore = useAuthStore()

  const get = async (url: string, params?: Record<string, any>): Promise<any> => {
    const token = authStore.token
    const headers: [key: string, value: string][] = token ? [['Authorization', `Bearer ${token}`]] : []
    const response: Response = await $fetch(`${url}?${new URLSearchParams(params)}`, { headers: headers })
    return response.json()
  }

  const post = async (url: string, body: any): Promise<any> => {
    const token = authStore.token
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
    const response: Response = await $fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    return response.json()
  }
  return { get, post }
}

export default useApiClient
