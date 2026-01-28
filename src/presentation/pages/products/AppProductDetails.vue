<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { FormAddEdit, ProductsFormData } from '@/presentation/components/pages'
import { useGetProduct, usePutProduct } from '@/presentation/hooks'
import { useToastStore } from '@/presentation/store'

const route = useRoute()
const router = useRouter()
const toast = useToastStore()

const id = Number(route.params.id)

const { data, isFetching } = useGetProduct({ id }, { enabled: !!id })
const putProductMutation = usePutProduct()

const defaultValues = computed<ProductsFormData | undefined>(() => {
  if (!data.value) return undefined

  return {
    title: data.value.title,
    description: data.value.description,
    price: String(data.value.price),
    stock: data.value.stock,
    images: data.value.images
  }
})

async function handleUpdate(values: ProductsFormData) {
  await putProductMutation.mutateAsync(
    {
      id,
      body: {
        id,
        title: values.title,
        description: values.description,
        price: Number(values.price),
        stock: values.stock,
        images: (values.images ?? []).filter((img): img is string => Boolean(img))
      }
    },
    {
      onSuccess: () => {
        toast.success('Produto ' + id + ' atualizado com sucesso!')
        router.push('/produsts')
      }
    }
  )
}
</script>

<template>
  <div>
    <v-progress-linear
      v-if="isFetching || putProductMutation.isPending.value"
      indeterminate
      color="#2e2e2e"
      class="mb-4"
    />

    <h3 style="margin-left: 40px; margin-top: 16px; font-weight: normal;">
      Editar Produto
    </h3>

    <FormAddEdit
      v-if="defaultValues"
      :default-values="defaultValues"
      :on-submit="handleUpdate"
    />
  </div>
</template>
