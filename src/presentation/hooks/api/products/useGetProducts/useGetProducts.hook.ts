import { useQuery } from '@tanstack/vue-query'
import { computed, unref } from 'vue'

import { makeProductsFactory } from '@/main/factories/usecases'
import { GetProductsModel, GetProductsParams } from '@/domain/usecases'
import { MaybeRef, UseGetProductsOptions } from './useGetProducts.types'

const getProductsKey = 'get-products'

export const useGetProducts = (
  params?: MaybeRef<GetProductsParams>,
  options?: UseGetProductsOptions
) => {
  const getProducts = makeProductsFactory()

  return useQuery<GetProductsModel>({
    queryKey: [getProductsKey, unref(params)],
    queryFn: () => getProducts.get(unref(params)),
    enabled: computed(() => !!unref(params)),
    ...options
  })
}
