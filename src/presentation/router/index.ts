import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'
import { setupAuthGuards } from './guards'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

setupAuthGuards(router)

export default router
