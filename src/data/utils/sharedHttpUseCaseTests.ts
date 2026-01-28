import { randUrl } from '@ngneat/falso'
import { expect, it } from 'vitest'

import { HttpStatusCode } from '@/data/protocols'
import { HttpClientSpy, mockClientSpy } from '@/data/mocks'
import { UnprocessableEntityError } from '@/domain/errors'
import { DEFAULT_ERROR, MANY_ERRORS } from '@/data/utils'

interface sharedTypes<Type1, Type2, Type3, Type4> {
  makeSut: (url?: string) => { sut: Type1; httpClientSpy: HttpClientSpy<Type2> }
  methodName: string
  httpRequestOrParams?: Type3 | null
  httpResult?: Type4 | null
}

export const sharedHttpUseCaseTests = <Type1, Type2, Type3, Type4>({
  makeSut,
  methodName,
  httpRequestOrParams,
  httpResult
}: sharedTypes<Type1, Type2, Type3, Type4>) => {
  it('should call HttpClient with correct values', async () => {
    const url = randUrl()
    const { sut, httpClientSpy } = makeSut(url)
    mockClientSpy(HttpStatusCode.ok, httpClientSpy)
    console.log('methodName', methodName)
    console.log('sut', sut)
    await (sut as any)[methodName]()

    expect(httpClientSpy.url).toContain(`${url}`)
    expect(httpClientSpy.method).toBe(methodName)
  })

  it('should return an content body if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    mockClientSpy(HttpStatusCode.ok, httpClientSpy, httpResult as unknown)

    const response = httpRequestOrParams ? await (sut as any)[methodName](httpRequestOrParams) : await (sut as any)[methodName]()

    if (httpResult) {
      expect(response).toEqual(httpResult)
    } else {
      expect(response).toBeNull()
    }
  })

  it('should return an content body if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    mockClientSpy(HttpStatusCode.ok, httpClientSpy, httpResult as unknown)

    const response = httpRequestOrParams ? await (sut as any)[methodName](httpRequestOrParams) : await (sut as any)[methodName]()

    if (httpResult) {
      expect(response).toEqual(httpResult)
    } else {
      expect(response).toBeNull()
    }
  })

  it('should return an content body if HttpClient returns 201', async () => {
    const { sut, httpClientSpy } = makeSut()
    mockClientSpy(HttpStatusCode.created, httpClientSpy, httpResult as unknown)

    const response = await (sut as any)[methodName](httpRequestOrParams)
    expect(response).toEqual(httpResult)
  })

  it('should return an content body if HttpClient returns 204', async () => {
    const { sut, httpClientSpy } = makeSut()
    mockClientSpy(HttpStatusCode.noContent, httpClientSpy)

    const response = await (sut as any)[methodName](httpRequestOrParams)
    expect(response).toEqual({})
  })
}
export default sharedHttpUseCaseTests
