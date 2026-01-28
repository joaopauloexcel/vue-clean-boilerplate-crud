import type { Router } from 'vue-router'

import { useAuthStore } from '../store'

export function setupAuthGuards(router: Router) {
    router.beforeEach((to) => {
        const authStore = useAuthStore()

        if (to.meta.public) {
            if (authStore.auth && to.name === 'login') {
                return { name: 'products' }
            }
            return true
        }

        if (!authStore.auth) {
            return {
                name: 'login',
                query: { redirect: to.fullPath },
            }
        }

        return true
    })
}
