// ユーザ情報登録や取得に関する処理
import useApiClient from '~/composables/useApiClient'

export type UserInfo = {
  name_first: string
  name_first_kana: string
  name_last: string
  name_last_kana: string
  email: string
  gender: number
  student_id: string
}

export const useUserInfo = () => {
  const client = useApiClient()
  const userInfo: Ref<UserInfo | null> = useState('userInfo', () => null)

  const updateUserInfo = async (ui: UserInfo): Promise<boolean> => {
    const resp = await client.post('/api/v1/user/info', ui)
    if (resp.error) {
      console.error(resp.error)
      return false
    }
    return !resp.error
  }

  return { userInfo, updateUserInfo }
}
