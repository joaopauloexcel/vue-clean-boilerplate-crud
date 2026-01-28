import * as yup from 'yup'

export const productsSchema = yup.object({
  title: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  price: yup.string().required('Preço obrigatório'),
  stock: yup.number().required('Estoque obrigatório'),
  images: yup.array().of(yup.string()).optional()
})

export type ProductsFormData = yup.InferType<typeof productsSchema>
