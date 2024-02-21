// stores/auth.js
import { defineStore } from 'pinia'
import { User } from '~/composables/useLogin'

export const useAuthStore = defineStore('auth', {
  state: (): { token: string, user: User | null } => ({
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
    isLoggedIn(): boolean {
      return this.token !== '' && this.user !== null
    },
    getUser(): User | null {
      return this.user
    }
  }
})
