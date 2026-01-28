import { UseMutationOptions } from '@tanstack/vue-query'

import { ProductRequest } from '@/domain/models'

export type UsePostProductOptions = UseMutationOptions<void, Error, { body: ProductRequest }>
