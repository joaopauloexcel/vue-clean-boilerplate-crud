import { randNumber } from '@ngneat/falso'
import { describe, expect, it } from 'vitest'

import { PutProduct } from '@/data/usecases'
import { makePutProductFactory } from './putProductFactory'

describe(makePutProductFactory.name, () => {
  it('should return an instance correctly', () => {
    const result = makePutProductFactory(randNumber())
    expect(result).toBeInstanceOf(PutProduct)
  })
})
