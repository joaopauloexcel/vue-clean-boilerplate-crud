import { useMutation } from '@tanstack/vue-query'

import { makePutProductFactory } from '@/main/factories/usecases'
import { UsePutProductOptions } from './usePutProduct.types'
import { useToastStore } from '@/presentation/store'

export const usePutProduct = (options?: UsePutProductOptions) => {
  const toast = useToastStore()
  return useMutation({
    mutationKey: ['put', 'put-product'],
    mutationFn: async ({ id, body }) => {
      try {
        const responderParecer = makePutProductFactory(id)

        return await responderParecer.put(body)
      } catch (error) {
        toast.error('Erro: ' + (error as Error).message)
        throw error
      }
    },
    ...options
  })
}
