import { AuthProvider } from '@/domain/protocols'
import { useAuthStore } from '@/presentation/store'

export class PiniaAuthProviderAdapter implements AuthProvider {
  getAuth() {
    return useAuthStore().auth
  }

  resetAuth() {
    return useAuthStore().resetState()
  }
}
