// ユーザーのログイン状態管理、基本データ管理を行う
import useApiClient from '~/composables/useApiClient'
import { useAuthStore } from '~/stores/auth'
import { User } from '~/stores/auth'

export const useLogin = () => {
  const authStore = useAuthStore()

  const isSignedIn = (): boolean => authStore.isLoggedIn
  const trySignIn = async () => {
    const client = useApiClient()
    try {
      const resp = await client.get('/api/v1/user/info')
      const json = JSON.parse(resp.value as string)
      authStore.setUser({
        name_first: json.name_first,
        name_last: json.name_last,
        profile_picture: json.profile_icon_url,
        type: json.type,
        status: json.status
      } as User)
    } catch (e) {
      return false
    }
    return true
  }
  const getCurrentUser = (): User | null => authStore.getUser
  const signOut = (): void => {
    authStore.clearToken()
    authStore.clearUser()
  }
  return { isSignedIn, getCurrentUser, signOut, trySignIn }
}