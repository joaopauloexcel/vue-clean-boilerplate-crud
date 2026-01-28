import { UseQueryOptions } from '@tanstack/vue-query'
import type { Ref, ComputedRef } from 'vue'

import { GetProductsModel } from '@/domain/usecases'

export type UseGetProductsOptions =
    Omit<UseQueryOptions<GetProductsModel, unknown, GetProductsModel>, 'queryKey' | 'queryFn'>

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>
