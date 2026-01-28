import { render } from '@testing-library/vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { defineComponent } from 'vue'

import { makeQueryClient } from '@/app.definitions'
import { createPinia, setActivePinia } from 'pinia'

export function renderComposable<T>(useComposable: () => T) {
  const pinia = createPinia()
  setActivePinia(pinia)

  let composableResult!: T

  const queryClient = makeQueryClient()

  const TestComponent = defineComponent({
    setup() {
      composableResult = useComposable()
      return () => null
    }
  })

  render(TestComponent, {
    global: {
      plugins: [pinia, [VueQueryPlugin, { queryClient }]]
    }
  })

  return {
    get result() {
      return composableResult
    },
    queryClient
  }
}
