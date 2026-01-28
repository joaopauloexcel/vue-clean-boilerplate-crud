import { UseQueryOptions } from '@tanstack/vue-query'

import { GetProductModel } from '@/domain/usecases'

export type UseGetProductOptions = Omit<UseQueryOptions<GetProductModel, unknown, GetProductModel>, 'queryKey' | 'queryFn'>
