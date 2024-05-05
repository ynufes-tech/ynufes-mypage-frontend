// ユーザーのログイン状態管理、基本データ管理を行う
import useApiClient from '~/composables/useApiClient'

export type FormInfo = {
  id: string
  title: string
  summary: string
  description: string
  deadline: string
  status: number
  is_open: boolean
  sections: string[]
}

export const useForm = () => {
  const client = useApiClient()
  const getForm = async (form_id: string): Promise<FormInfo> => {
    const org_id = (await useOrg().getCurrentOrg()).org_id
    return await client
      .get(`/api/v1/form?org_id=${org_id}&form_id=${form_id}`)
      .then((resp) => {
        return resp.data
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  return { getForm }
}
