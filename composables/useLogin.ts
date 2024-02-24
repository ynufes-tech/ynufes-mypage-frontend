// ユーザーのログイン状態管理、基本データ管理を行う
import useApiClient from '~/composables/useApiClient'
import { useAuthStore, User } from '~/stores/auth'

export const useLogin = () => {
  const authStore = useAuthStore()

  const trySignIn = async () => {
    const client = useApiClient()
    try {
      const resp = await client.get('/api/v1/user/info')
      const json = JSON.parse(resp as string)
      const user = {
        name_first: json.name_first,
        name_last: json.name_last,
        profile_picture: json.profile_icon_url,
        type: json.type,
        status: json.status
      } as User
      authStore.setUser(user)
    } catch (e) {
      console.error(e)
      return false
    }
    return true
  }
  const getCurrentUser = async (): Promise<User | null> => {
    if (authStore.getUser) {
      console.log('authStore.getUser is exist', authStore.getUser)
      return authStore.getUser
    }
    if (authStore.getToken) {
      console.log('authStore.getUser is not exist', authStore.getUser)
      await trySignIn()
      console.log('after trySignin', authStore.getUser)
      return authStore.getUser
    }
    return null
  }
  const signOut = (): void => {
    authStore.clearToken()
    authStore.clearUser()
  }
  return { getCurrentUser, signOut, trySignIn }
}
