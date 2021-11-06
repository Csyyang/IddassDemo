import router from './index'
import store from '@/store/store'



router.beforeEach((to, from, next) => {
    if(to.path !== '/login') {
        const hasToken = store.getters.hasToken
        if(!hasToken) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
    
})

export default router