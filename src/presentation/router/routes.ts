import type { RouteRecordRaw } from 'vue-router'

import { ProductList, NotFound, Login, ProductDetails, Dashboard, ProductCreate } from '../pages'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: {
            public: false,
        },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            public: false,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            public: true,
        },
    },
    {
        path: '/products',
        name: 'products',
        component: ProductList,
        meta: {
            public: false,
        },
    },
    {
        path: '/products/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        meta: {
            public: false,
        },
    },
    {
        path: '/products/new',
        name: 'ProductCreate',
        component: ProductCreate,
        meta: {
            public: false,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            public: false,
        },
    },
]
