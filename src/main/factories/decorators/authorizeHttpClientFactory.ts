import { AxiosHttpClient } from '@/infra/http'
import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { makePiniaAuthProviderFactory } from '@/main/factories/adapters'

export const makeAuthorizeHttpClient = (): AxiosHttpClient => {
  return new AuthorizeHttpClientDecorator(makeAxiosHttpClient(), makePiniaAuthProviderFactory())
}
