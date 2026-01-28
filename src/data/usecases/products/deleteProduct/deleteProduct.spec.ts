import { randUrl } from '@ngneat/falso'
import { afterEach, describe, vi } from 'vitest'

import { HttpClientSpy } from '@/data/mocks'
import { DeleteProduct } from './deleteProduct'
import { sharedHttpUseCaseTests } from '@/data/utils'

type SutTypes = {
  sut: DeleteProduct
  httpClientSpy: HttpClientSpy<void>
}

const makeSut = (url: string = randUrl()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<void>()
  const sut = new DeleteProduct(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

const httpResult = null

describe(DeleteProduct.name, () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  sharedHttpUseCaseTests<DeleteProduct, void, undefined, null>({
    makeSut,
    methodName: 'delete',
    httpRequestOrParams: undefined,
    httpResult
  })
})
