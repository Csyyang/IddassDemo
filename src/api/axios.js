import axios from "axios"
import store from '@/store/store'
import router from '@/router/globalGuard'

const instance = axios.create({
    baseURL: '/ztzh', // /hock  /ztzh
    timeout: '10000',
    headers: {}
})


instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (store.getters.hasToken) {
        config.headers = {
            'authorization': 'Bearer ' + store.state.access_token
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // 401 未授权的访问
    // 403 无权访问
    if (response.status === 200) {
        return response.data
    }



    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if(error.response.status === 403) {
        console.log('没有权限')
    }
    if(error.response.status === 401) { // 登录失效？？
        store.commit('logout')
        router.push('/login')
    }

    return Promise.reject(error);
});

export default instance