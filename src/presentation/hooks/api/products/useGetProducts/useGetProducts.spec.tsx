import { waitFor } from '@testing-library/vue'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { mockGetProductsResponse } from '@/data/mocks'
import { HttpStatusCode } from '@/data/protocols'
import { uriPaths } from '@/main/factories/usecases/uriPaths.definitions'
import { useGetProducts } from './useGetProducts.hook'
import { MswInterceptor, renderComposable } from '@/mocks'

const interceptor = new MswInterceptor()

describe(useGetProducts.name, () => {
  const url = uriPaths.products

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return the data correctly when the query is successful', async () => {
    const mockedResponse = mockGetProductsResponse()
    interceptor.intercept(url, 'get', mockedResponse, HttpStatusCode.ok)
    const params = { limit: 10, skip: 0 }
    const { result } = renderComposable(() =>
      useGetProducts(params)
    )
    await interceptor.wait('GET', url)
    expect(result.isSuccess.value).toBe(true)
    expect(result.data.value).toEqual({ data: mockedResponse })
  })

  it('should deal correctly with UnexpectedError scenario', async () => {
    interceptor.intercept(url, 'get', '', HttpStatusCode.badRequest)

    const params = { limit: 10, skip: 0 }
    const { result } = renderComposable(() =>
      useGetProducts(params)
    )
    await interceptor.wait('GET', url)
    await waitFor(() => !result.isSuccess.value)
    expect(result.isSuccess.value).toBeFalsy()
  })

  it('should deal correctly with unauthorized error scenario', async () => {
    interceptor.intercept(url, 'get', '', HttpStatusCode.unauthorized)

    const params = { limit: 10, skip: 0 }
    const { result } = renderComposable(() =>
      useGetProducts(params)
    )
    await interceptor.wait('GET', url)
    await waitFor(() => !result.isSuccess.value)
    expect(result.isSuccess.value).toBeFalsy()
  })
})
