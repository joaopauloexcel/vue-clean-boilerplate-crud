import { UseMutationOptions } from '@tanstack/vue-query'

import { ProductRequest } from '@/domain/models'

export type UsePutProductOptions = UseMutationOptions<void, Error, { id: number; body: ProductRequest }, unknown>
