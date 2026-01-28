import { describe, expect, it } from 'vitest'

import { GetProducts } from '@/data/usecases'
import { makeProductsFactory } from './getProductsFactory'

describe(makeProductsFactory.name, () => {
  it('should return an instance correctly', () => {
    const result = makeProductsFactory()
    expect(result).toBeInstanceOf(GetProducts)
  })
})
