import { describe, it, expect, afterEach, vi } from 'vitest'
import { waitFor } from '@testing-library/vue'

import { mockGetProductResponse } from '@/data/mocks'
import { HttpStatusCode } from '@/data/protocols'
import { uriPaths } from '@/main/factories/usecases/uriPaths.definitions'
import { MswInterceptor, renderComposable } from '@/mocks'
import { useGetProduct } from './useGetProduct.hook'

const interceptor = new MswInterceptor()

const makeSut = () => {
  return renderComposable(() => useGetProduct({ id: 1 }))
}

describe(useGetProduct.name, () => {
  const url = uriPaths.product(1)

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return the data correctly when the query is successful', async () => {
    const mockedResponse = mockGetProductResponse()
    interceptor.intercept(url, 'get', mockedResponse, HttpStatusCode.ok)

    const { result } = makeSut()

    await interceptor.wait('GET', url)

    await waitFor(() => {
      expect(result.isSuccess.value).toBeTruthy()
    })

    expect(result.data.value).toEqual({ data: mockedResponse })
  })

  it('should deal correctly with UnexpectedError scenario', async () => {
    interceptor.intercept(url, 'get', '', HttpStatusCode.badRequest)

    const { result } = makeSut()

    await interceptor.wait('GET', url)

    await waitFor(() => {
      expect(result.isSuccess.value).toBeFalsy()
    })
  })

  it('should deal correctly with unauthorized error scenario', async () => {
    interceptor.intercept(url, 'get', '', HttpStatusCode.unauthorized)

    const { result } = makeSut()

    await interceptor.wait('GET', url)

    await waitFor(() => {
      expect(result.isSuccess.value).toBeFalsy()
    })
  })

  it('clearCacheProduct should invalidate queries', async () => {
    interceptor.intercept(url, 'get', mockGetProductResponse(), HttpStatusCode.ok)

    const { result } = makeSut()

    await interceptor.wait('GET', url)

    await waitFor(() => {
      expect(result.isSuccess.value).toBeTruthy()
    })
  })
})
