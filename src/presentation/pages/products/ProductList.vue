<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

import { useDeleteProduct, useGetProducts } from '@/presentation/hooks'
import { useToastStore } from '@/presentation/store'

const toast = useToastStore()
const router = useRouter()

const pageSize = 10
const page = ref(1)
const itemsPerPage = ref(pageSize)

const params = computed(() => ({
  limit: itemsPerPage.value,
  skip: (page.value - 1) * itemsPerPage.value
}))

const { data, isLoading, isFetching, refetch } = useGetProducts(params)

const deleteProductMutation = useDeleteProduct()

const headers = [
  { title: 'ID', key: 'id', width: 80 },
  { title: 'Nome', key: 'title' },
  { title: 'Descrição', key: 'description' },
  { title: 'Categoria', key: 'category' },
  { title: 'Preço', key: 'price' },
  { title: 'Estoque', key: 'stock' },
  { title: 'Ações', key: 'actions', sortable: false }
]

const handleDelete = async (id: number) => {
  deleteProductMutation.mutate(
    { id },
    {
      onSuccess: () => {
        toast.success('Produto "' + id + '" removido com sucesso!')
        refetch()
      }
    }
  )
}

watch(params, () => {
  refetch()
})
</script>

<template>
  <v-container style="max-width: none !important;">
    <v-progress-linear
      v-if="isFetching"
      indeterminate
       color="#2e2e2e"
      class="mb-4"
    />

    <v-row justify="space-between" class="mb-4" style="flex: 1;">
      <div />
      <v-btn  color="#2e2e2e" @click="router.push('/products/new')">
        Novo Produto
      </v-btn>
    </v-row>

    <v-data-table-server
      :headers="headers"
      :items="data?.products || []"
      :items-length="data?.total || 0"
      :loading="isLoading"
      :items-per-page="itemsPerPage"
      v-model:page="page"
      class="elevation-1"
      style="width: 100%;"
    >
      <template #item.actions="{ item }">
        <v-container class="d-flex">
          <v-btn
            icon
            variant="text"
            @click="router.push(`/products/${item.id}`)"
          >
            <v-icon icon="mdi-pencil" />
          </v-btn>

          <v-btn
            icon
            variant="text"
            color="error"
            @click="handleDelete(item.id)"
          >
            <v-icon icon="mdi-delete" />
          </v-btn>
        </v-container>
      </template>
    </v-data-table-server>
  </v-container>
</template>
