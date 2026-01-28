import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './presentation/router'

const queryClient = new QueryClient()
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(VueQueryPlugin, { queryClient })
  .mount('#app')