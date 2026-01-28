import { UseMutationOptions } from '@tanstack/vue-query'

export type UseDeleteProductOptions = UseMutationOptions<void, Error, { id: number }, unknown>
