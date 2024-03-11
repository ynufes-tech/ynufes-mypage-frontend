// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: (): { token: string; user: User | null } => ({
    token: sessionStorage.getItem('token') || '',
    user: null
  }),
  actions: {
    setToken(newToken: string) {
      this.token = newToken
      sessionStorage.setItem('token', newToken)
    },
    clearToken() {
      this.token = ''
      sessionStorage.removeItem('token')
    },
    setUser(newUser: User) {
      this.user = newUser
    },
    clearUser() {
      this.user = null
    }
  },
  getters: {
    getToken(): string {
      return this.token
    },
    getUser(): User | null {
      return this.user
    }
  }
})

export class User {
  name_first = ''
  name_last = ''
  profile_icon_url = ''
  type = 0
  status = 0
}
