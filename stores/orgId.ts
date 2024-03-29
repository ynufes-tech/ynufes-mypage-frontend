// stores/orgId.js
import { defineStore } from 'pinia'

export const useOrgIdStore = defineStore('orgId', {
  state: (): { orgId: string } => {
    return {
      orgId: localStorage.getItem('orgId') || ''
    }
  },
  actions: {
    setOrgId(newOrgId: string) {
      this.orgId = newOrgId
      localStorage.setItem('orgId', newOrgId)
    },
    clearOrgId() {
      this.orgId = ''
      localStorage.removeItem('orgId')
    }
  },
  getters: {
    getOrgId(): string {
      return this.orgId
    }
  }
})
