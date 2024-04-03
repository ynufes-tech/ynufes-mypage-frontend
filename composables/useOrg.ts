import { useOrgIdStore } from '~/stores/orgId'
export type Form = {
  id: string
  name: string
  summary: string
  description: string
  deadline: string
  status: number
  is_open: boolean
}

export type OrgInfo = {
  org_id: string
  org_name: string
  event_id: string
  event_name: string
  forms: Form[] | null
}

export type AccessibleOrg = {
  id: string
  name: string
  event_id: string
  event_name: string
  is_open: boolean
}

export const useOrg = () => {
  const client = useApiClient()
  const orgInfo: Ref<OrgInfo | null> = useState('org', () => null)
  const accessibleOrgs: Ref<AccessibleOrg[]> = useState(
    'accessibleOrgs',
    () => []
  )

  /**
   * アクセス可能な企画団体一覧を取得する関数
   *
   * @returns {Promise<AccessibleOrg[]>}
   */
  const getAccessibleOrgs = async (): Promise<AccessibleOrg[]> => {
    if (accessibleOrgs.value && accessibleOrgs.value.length > 0) {
      return accessibleOrgs.value
    }
    const fetchedData = await client
      .get('/api/v1/orgs')
      .then((resp) => {
        return resp.data // Promiseオブジェクトから特定のプロパティ(orgs)を取得できないため
      })
      .catch((e) => {
        throw new Error(e)
      })
    accessibleOrgs.value = fetchedData.orgs
    return accessibleOrgs.value
  }

  /**
   * アクセスできる企画団体の中から、現在操作対象となっている企画団体を取得する関数
   *
   * @returns {Promise<OrgInfo>}
   */
  const getCurrentOrg = async (): Promise<OrgInfo> => {
    if (orgInfo.value) {
      return orgInfo.value
    }
    if (useOrgIdStore().getOrgId) {
      orgInfo.value = await getOrgInfo(useOrgIdStore().getOrgId).catch((e) => {
        throw new Error(e)
      })
      return orgInfo.value
    }
    if (accessibleOrgs.value.length > 0) {
      useOrgIdStore().setOrgId(accessibleOrgs.value[0].id)
      orgInfo.value = await getOrgInfo(accessibleOrgs.value[0].id).catch(
        (e) => {
          throw new Error(e)
        }
      )
      return orgInfo.value
    }
    throw new Error('No OrgInfo and AccessibleOrgs')
  }

  /**
   * 指定された orgId に該当する企画団体を操作対象の企画団体とする関数
   *
   * @param orgId
   * @returns
   */
  const setCurrentOrg = async (orgId: string): Promise<void> => {
    useOrgIdStore().setOrgId(orgId)
    orgInfo.value = await getOrgInfo(orgId).catch((e) => {
      throw new Error(e)
    })
  }

  /* util 関数 ----------------------------------------------/


  /**
   * org_id から OrgInfo を取得する関数
   *
   * @param orgId
   * @return {Promise<OrgInfo>}
   */
  const getOrgInfo = async (orgId: string): Promise<OrgInfo> => {
    const fetchedOrgInfo = await client
      .get('/api/v1/org', { org_id: orgId })
      .then((resp) => {
        if (resp.error) {
          throw new Error(resp.error)
        }
        if (!resp || !resp.data) {
          throw new Error('invalid response')
        }
        return resp.data as OrgInfo
      })
      .catch((e) => {
        throw new Error(e)
      })
    return fetchedOrgInfo
  }

  return {
    getAccessibleOrgs,
    getCurrentOrg,
    setCurrentOrg
  }
}
