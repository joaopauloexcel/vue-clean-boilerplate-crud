import { ProductsFormData } from "./formAddEdit.schema"

export type FormAddEditProps = {
    defaultValues?: ProductsFormData
    onSubmit: (values: ProductsFormData) => Promise<void> | void
}
