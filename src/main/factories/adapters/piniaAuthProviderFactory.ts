import { AuthProvider } from '@/domain/protocols'
import { PiniaAuthProviderAdapter } from '@/main/adapters'

export const makePiniaAuthProviderFactory = (): AuthProvider => {
  return new PiniaAuthProviderAdapter()
}
