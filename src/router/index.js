import { createRouter, createWebHashHistory } from "vue-router"
import login from '@/package/login/login.vue'
import navigation from '@/components/ztNavigation.vue'

const route = [
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
        path: '/navigation',
        name: 'Navigation',
        component: navigation,
        children: [
            {
                path: '/',
                name: 'Index',
                component: () => import('@/package/index/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router