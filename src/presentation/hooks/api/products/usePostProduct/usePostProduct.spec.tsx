import { afterEach, describe, expect, it, vi } from 'vitest'

import { HttpStatusCode } from '@/data/protocols'
import { uriPaths } from '@/main/factories/usecases/uriPaths.definitions'
import { mockPostProductRequest } from '@/data/mocks'
import { usePostProduct } from './usePostProduct.hook'
import { MswInterceptor, renderComposable } from '@/mocks'

const interceptor = new MswInterceptor()

describe(usePostProduct.name, () => {
  const body = mockPostProductRequest()

  const url = uriPaths.productAdd

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return the data correctly when the query is successful', async () => {
    interceptor.intercept(url, 'post', '', HttpStatusCode.ok)

    const { result } = renderComposable(usePostProduct)

    let mutationResult
    result.mutate(
      { body },
      {
        onSuccess: (data) => (mutationResult = data)
      }
    )

    await interceptor.wait('POST', url)

    expect(result.isSuccess.value).toBe(true)
    expect(mutationResult).toEqual({ data: '' })
  })

  it('should deal correctly with UnexpectedError scenario', async () => {
    interceptor.intercept(url, 'post', '', HttpStatusCode.badRequest)
    const { result } = renderComposable(usePostProduct)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let mutationResult
    result.mutate(
      { body },
      {
        onError: (error: Error) => (mutationResult = error)
      }
    )

    await interceptor.wait('POST', url)
    expect(result.isSuccess.value).toBe(false)
  })

  it('should deal correctly with unauthorized error scenario', async () => {
    interceptor.intercept(url, 'post', '', HttpStatusCode.unauthorized)
    const { result } = renderComposable(usePostProduct)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let mutationResult
    result.mutate(
      { body },
      {
        onError: (error: Error) => (mutationResult = error)
      }
    )

    await interceptor.wait('POST', url)
    expect(result.isSuccess.value).toBe(false)
  })
})
