// ユーザーのログイン状態管理、基本データ管理を行う
import useApiClient from '~/composables/useApiClient'
import { useAuthStore, User } from '~/stores/auth'

export type UserInfo = {
  name_first: string
  name_first_kana: string
  name_last: string
  name_last_kana: string
  email: string
  gender: number
  student_id: string
}

export const useLogin = () => {
  const authStore = useAuthStore()
  const authWithCode = async (code: string): Promise<boolean> => {
    try {
      const token: any = await $fetch(
        'http://localhost:1306/api/v1/auth/token',
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: 'POST',
          body: JSON.stringify({ code })
        }
      )
      if (!token.token) {
        return false
      }
      const authStore = useAuthStore()
      authStore.setToken(token.token)
    } catch (e) {
      console.error('error in authWithCode', e)
      return false
    }
    return true
  }

  const trySignIn = async () => {
    const client = useApiClient()
    try {
      const resp = await client.get('/api/v1/user/info')
      if (resp.error) {
        return false
      }
      const user = resp.data as User
      authStore.setUser(user)
    } catch (e) {
      console.error('error in trySignIn', e)
      return false
    }
    return true
  }
  const getCurrentUser = async (): Promise<User | null> => {
    if (authStore.getUser) {
      return authStore.getUser
    }
    if (authStore.getToken) {
      await trySignIn()
      return authStore.getUser
    }
    return null
  }
  const signOut = (): void => {
    authStore.clearToken()
    authStore.clearUser()
  }

  // this is client for using credentials
  const client = useApiClient()

  const updateUserInfo = async (ui: UserInfo): Promise<boolean> => {
    try {
      const resp = await client.post('/api/v1/user/info', ui)
      if (resp.error) {
        return false
      }
      authStore.clearUser()
      return true
    } catch (err) {
      console.error('error in updateUserInfo', err)
      return false
    }
  }

  return {
    getCurrentUser,
    signOut,
    trySignIn,
    authWithCode,
    updateUserInfo
  }
}
