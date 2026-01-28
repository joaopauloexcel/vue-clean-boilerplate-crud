import { useMutation } from '@tanstack/vue-query'

import { makeDeleteProductFactory } from '@/main/factories/usecases'
import { UseDeleteProductOptions } from './useDeleteProduct.types'
import { useToastStore } from '@/presentation/store'

export const useDeleteProduct = (options?: UseDeleteProductOptions) => {
  const toast = useToastStore()
  return useMutation({
    mutationKey: ['delete', 'delete-product'],
    mutationFn: async ({ id }) => {
      try {
        const removeProduct = makeDeleteProductFactory(id)

        return await removeProduct.delete()
      } catch (error) {
        toast.error('Erro: ' + (error as Error).message)
        throw error
      }
    },
    ...options
  })
}
