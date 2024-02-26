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
    try {
      console.log(ui)
      const resp = await client.post('api/v1/user/info', ui)
      return !resp.error;
    } catch (err) {
      console.error(err)
      return false
    }
  }

  return { userInfo, updateUserInfo }
}
