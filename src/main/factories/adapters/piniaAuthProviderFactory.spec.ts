import { describe, it, expect } from 'vitest'

import { makePiniaAuthProviderFactory } from './piniaAuthProviderFactory'
import { PiniaAuthProviderAdapter } from '@/main/adapters'

describe('makePiniaAuthProviderFactory', () => {
  it('should return an instance of PiniaAuthProviderAdapter', () => {
    const result = makePiniaAuthProviderFactory()
    expect(result).toBeInstanceOf(PiniaAuthProviderAdapter)
  })
})
