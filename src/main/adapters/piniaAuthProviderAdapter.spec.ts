import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useAuthStore } from '@/presentation/store'
import { PiniaAuthProviderAdapter } from './piniaAuthProviderAdapter'

vi.mock('@/presentation/store', () => ({
  useAuthStore: vi.fn()
}))

describe('PiniaAuthProviderAdapter', () => {
  const authMock = {
    accessToken: 'valid_token',
    idToken: 'another_valid_token',
    email: 'john.doe@example.com',
    name: 'John Doe'
  }

  const resetStateMock = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    vi.mocked(useAuthStore).mockReturnValue({
      auth: authMock,
      resetState: resetStateMock,
      setAuth: vi.fn()
    } as any)
  })

  it('should return the auth status from the store', () => {
    const adapter = new PiniaAuthProviderAdapter()
    const auth = adapter.getAuth()

    expect(auth).toEqual(authMock)
    expect(useAuthStore).toHaveBeenCalled()
  })

  it('should call the store resetState', () => {
    const adapter = new PiniaAuthProviderAdapter()
    adapter.resetAuth()

    expect(resetStateMock).toHaveBeenCalled()
    expect(useAuthStore).toHaveBeenCalled()
  })
})
