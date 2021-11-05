import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/style/main.scss'


createApp(App).use(ElementPlus, {
    locale: zhCn,
}).use(router).use(store).mount('#app')
