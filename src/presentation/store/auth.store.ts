import { defineStore } from 'pinia'

import type { Auth } from '@/domain/models'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: null as Auth | null,
  }),

  actions: {
    setAuth(auth?: Auth) {
      this.auth = auth ?? null
    },

    resetState() {
      this.auth = null
    },
  },

  persist: {
    key: 'auth',
  },
})
