import { useMutation } from '@tanstack/vue-query'

import { makePostProductFactory } from '@/main/factories/usecases'
import { ProductRequest } from '@/domain/models'
import { UsePostProductOptions } from './usePostProduct.types'
import { useToastStore } from '@/presentation/store'

export const usePostProduct = (options?: UsePostProductOptions) => {
  const toast = useToastStore()
  const newProduct = makePostProductFactory()
  return useMutation<void, Error, { body: ProductRequest }>({
    mutationKey: ['post', 'add-product'],
    mutationFn: async ({ body }) => {
      try {
        return await newProduct.post(body)
      } catch (error) {
        toast.error('Erro: ' + (error as Error).message)
        throw error
      }
    },
    ...options
  })
}
