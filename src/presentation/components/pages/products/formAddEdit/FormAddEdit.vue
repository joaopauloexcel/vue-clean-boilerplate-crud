<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'

import { ProductsFormData, productsSchema } from './formAddEdit.schema'
import { FormAddEditProps } from './formAddEdit.types';

const props = defineProps<FormAddEditProps>()

const { handleSubmit, errors, defineField } = useForm<ProductsFormData>({
  validationSchema: toTypedSchema(productsSchema),
  initialValues: props.defaultValues
})

const [title] = defineField('title')
const [description] = defineField('description')
const [price] = defineField('price')
const [stock] = defineField('stock')

const submit = handleSubmit(async (values) => {
  await props.onSubmit(values)
})
</script>

<template>
  <v-container
    class="fill-height d-flex align-center justify-left m-auto"
    style="max-width: none !important;"
  >
    <v-card
      width="420"
      class="pa-6"
    >
      <v-form @submit.prevent="submit">
        <div>
          <v-text-field
            v-model="title"
            label="Nome"
            variant="outlined"
            class="mb-4"
            :error-messages="errors.title"
          />
        </div>

        <div>
          <v-text-field
            v-model="description"
            label="Descrição"
            variant="outlined"
            class="mb-4"
            :error-messages="errors.description"
          />
        </div>

        <div>
          <v-text-field
            v-model="price"
            label="Preço"
            variant="outlined"
            class="mb-4"
            :error-messages="errors.price"
          />
        </div>

        <div>
          <v-text-field
            v-model="stock"
            label="Estoque"
            variant="outlined"
            class="mb-4"
            :error-messages="errors.stock"
          />
        </div>

        <v-btn
          type="submit"
          color="#2e2e2e"
          size="large"
          block
        >
          Salvar
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
