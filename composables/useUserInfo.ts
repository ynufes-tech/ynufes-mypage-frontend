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

  const updateUserInfo = async (ui: UserInfo) => {
    try {
      console.log(ui)
      const data = await client.post('api/v1/user/info', ui)
      userInfo.value = data
    } catch (err) {
      console.error(err)
    }
  }

  return { userInfo, updateUserInfo }
}
