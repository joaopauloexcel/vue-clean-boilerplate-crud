import type { RouteRecordRaw } from 'vue-router'

import { AppProductList, AppNotFound, AppLogin, AppProductDetails, AppDashboard, AppProductCreate } from '../pages'

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
        component: AppDashboard,
        meta: {
            public: false,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin,
        meta: {
            public: true,
        },
    },
    {
        path: '/products',
        name: 'products',
        component: AppProductList,
        meta: {
            public: false,
        },
    },
    {
        path: '/products/:id',
        name: 'ProductDetails',
        component: AppProductDetails,
        meta: {
            public: false,
        },
    },
    {
        path: '/products/new',
        name: 'ProductCreate',
        component: AppProductCreate,
        meta: {
            public: false,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: AppNotFound,
        meta: {
            public: false,
        },
    },
]
