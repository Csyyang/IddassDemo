import { createRouter, createWebHashHistory } from "vue-router"
import login from '@/package/login/login.vue'
import navigation from '@/components/ztNavigation.vue'

const route = [
    {
        path: '/',
        redirect: '/navigation/'
    },
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
                path: '',
                name: 'Index',
                component: () => import('@/package/index/index.vue'),
                meta: {
                    title: '我的应用'
                }
            },
            {
                path: 'test',
                name: 'Test',
                component: () => import('@/package/test/test.vue'),
                meta: {
                    title: '测试页'
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router