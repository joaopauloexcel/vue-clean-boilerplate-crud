<script setup lang="ts">
import { useRouter } from 'vue-router'

import { ProductsFormData } from '@/presentation/components/pages'
import { usePostProduct } from '@/presentation/hooks'
import { FormAddEdit } from '@/presentation/components/pages'
import { useToastStore } from '@/presentation/store'

const router = useRouter()
const toast = useToastStore()

const postProductMutation = usePostProduct()
console.log({isPending: postProductMutation.isPending.value})

async function handleCreate(values: ProductsFormData) {
  await postProductMutation.mutateAsync(
    {
      body: {
        title: values.title,
        description: values.description,
        price: Number(values.price),
        stock: values.stock,
        images: (values.images ?? []).filter((img): img is string => Boolean(img))
      }
    }, 
    {
      onSuccess: () => {
        toast.success('Produto ' + values.title + ' cadastrado com sucesso!')
        router.push('/products')
      }
    }
  )
}
</script>

<template>
  <div>
    <v-progress-linear
      v-if="postProductMutation.isPending.value"
      indeterminate
      color="#2e2e2e"
      class="mb-4"
    />
     <h3 style="margin-left: 40px; margin-top: 16px; font-weight: normal;">Cadastrar Produto</h3>

    <FormAddEdit :on-submit="handleCreate" />
  </div>
</template>