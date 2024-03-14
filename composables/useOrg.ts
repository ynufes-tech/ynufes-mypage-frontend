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
  const accessibleOrgs: Ref<AccessibleOrg[] | null> = useState(
    'accessibleOrgs',
    () => null
  )

  const getAccessibleOrgs = async (): Promise<AccessibleOrg[] | null> => {
    if (accessibleOrgs.value) {
      return accessibleOrgs.value
    }
    try {
      const resp = await client.get('/api/v1/orgs')
      if (resp.error) {
        console.error(resp.error)
        return null
      }
      if (!Array.isArray(resp.data)) {
        console.error('response is empty')
        return null
      }
      accessibleOrgs.value = resp.data as AccessibleOrg[]
      return accessibleOrgs.value
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const getOrgInfo = async (orgId: string): Promise<OrgInfo | null> => {
    if (orgInfo.value) {
      return orgInfo.value
    }
    try {
      const resp = await client.get('/api/v1/orgs', { org_id: orgId })
      if (resp.error) {
        return null
      }
      orgInfo.value = resp.data as OrgInfo
      return orgInfo.value
    } catch (e) {
      console.error(e)
      return null
    }
  }
  return { getAccessibleOrgs, getOrgInfo }
}
