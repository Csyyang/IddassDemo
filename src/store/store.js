import { createStore } from "vuex"
import { login } from 'api/login/login'


const state = () => {
    return {
        showNav: true, // 控制顶部导航栏显示
        showSidebar: true, // 侧边栏显示
        access_token: sessionStorage.getItem('access_token') || '', //⽤户令牌
        client_id: '1bef3e76afd371ec24bd19097dda027bLcEWh4DmsL9',
        client_secret: 'GZIi85FJT76Jx9Vk1o7oacLl1tWF6Y187GGWJFWJMZ',
    }
}

const getters = {
    hasToken(state) {
        return !(state.access_token === '')
    }
}

const mutations = {
    changeNav(state) {
        state.showNav = !state.showNav
    },
    changeSidebar(state) {
        state.showSidebar = !state.showSidebar
    },
    setAccessToken(state, newVal) {
        state.access_token = newVal
        sessionStorage.setItem('access_token', newVal)
    },
    logout(state) {
        state.access_token = ''
        sessionStorage.setItem('access_token', '')
    }
}

const actions = {
    login({ commit, state, getters }, { username, password }) {
        return new Promise(async (resolve, reject) => {
            const obj = {
                client_id: state.client_id,
                client_secret: state.client_secret,
                grant_type: 'password',
                scope: 'read',
                username,
                password
            }

            const resLogin = await login(obj)

            // 账号密码错误
            if(resLogin.error === "invalid_grant") {
                console.log('⽤户名或密码错误')
                resolve(false)
            }

            // client_id或client_secret错误
            if(resLogin.error === 'invalid_client') {
                console.log('client_id或client_secret错误')
            }


            const access_token = resLogin.access_token
            if (access_token) {
                commit('setAccessToken', access_token)

                resolve(true)
            } else {
                resolve(false)
            }
        })
    }
}


const app = createStore({
    state,
    getters,
    mutations,
    actions
})


export default app