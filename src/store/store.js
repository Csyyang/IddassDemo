import { createStore } from "vuex"

const state = () => {
    return {
        showNav: true, // 控制顶部导航栏显示
        showSidebar: true // 侧边栏显示
    }
}

const mutations = {
    changeNav(state) {
        state.showNav = !state.showNav
    },
    changeSidebar(state) {
        state.showSidebar = !state.showSidebar
    }
}


const app = createStore({
    state,
    mutations
})


export default app