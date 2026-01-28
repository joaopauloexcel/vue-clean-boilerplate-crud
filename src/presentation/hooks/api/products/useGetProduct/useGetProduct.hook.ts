import { UseQueryReturnType, useQuery } from '@tanstack/vue-query'

import { GetProductModel, GetProductParams } from '@/domain/usecases'
import { UseGetProductOptions } from './useGetProduct.types'
import { makeProductFactory } from '@/main/factories/usecases'
import { queryClient } from '@/app.definitions'
import { useToastStore } from '@/presentation/store'

const getProductKey: string = 'get-product'

export const useGetProduct = (codigoProduct: GetProductParams, options?: UseGetProductOptions): UseQueryReturnType<GetProductModel, unknown> => {
  const getProduct = makeProductFactory(codigoProduct)
  const toast = useToastStore()
  return useQuery({
    queryKey: [getProductKey, codigoProduct],
    queryFn: async () => {
      try {
        return await getProduct.get(codigoProduct)
      } catch (error) {
        toast.error('Erro: ' + (error as Error).message)
        throw error
      }
    },
    staleTime: 60000 * 60 * 2,
    ...options
  })
}

export const clearCacheProduct = async () => {
  await queryClient.invalidateQueries({ queryKey: [getProductKey] })
}
