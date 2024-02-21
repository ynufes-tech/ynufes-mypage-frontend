// ユーザーのログイン状態管理、基本データ管理を行う
export const useLogin = () => {
  const config = useRuntimeConfig().public
  const signInStatus = useState<boolean>('signInStatus', () => false)
  const currentUser = useState<User>('user', () => ({} as User))

  const isSignedIn = (): boolean => signInStatus.value
  const trySignIn = async () => {
    const authorization = useCookie('Authorization')
    if (!authorization.value) {
      console.log('no cookie')
      signInStatus.value = false
      return false
    }
    const { data: resp, error } = await useFetch(
      config.baseURL + '/api/v1/user/info',
      {
        method: 'GET'
      }
    )
    if (error.value != null || !resp.value) {
      console.log('401 Unauthorized')
      console.log(error)
      authorization.value = ''
      signInStatus.value = false
      return false
    }
    const json = JSON.parse(resp.value as string)
    currentUser.value = {
      name_first: json.name_first,
      name_last: json.name_last,
      profile_picture: json.profile_icon_url,
      type: json.type,
      status: json.status
    }
    signInStatus.value = true
    return true
  }
  const getCurrentUser = (): User => currentUser.value
  const signOut = (): void => {
    signInStatus.value = false
    currentUser.value = {} as User
  }
  return { isSignedIn, getCurrentUser, signOut, trySignIn }
}

export class User {
  name_first = ''
  name_last = ''
  profile_picture = ''
  type = 0
  status = 0
}
