import { HttpClient } from '@/data/protocols'
import { treatmentStatusResponse } from '@/data/utils'
import { DeleteProductUseCase } from '@/domain/usecases'

export class DeleteProduct implements DeleteProductUseCase {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async delete(): Promise<void> {
    const httpResponse = await this.httpClient.request<void>({
      url: this.url,
      method: 'delete'
    })

    return treatmentStatusResponse<void>(httpResponse) as void
  }
}
