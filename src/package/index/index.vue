<script setup>
import appBox from './components/appBox.vue'
import { appList } from '@/api/business/index'
import { reactive, toRaw } from 'vue'
import { useStore } from 'vuex'


const store = useStore()
const appLists = reactive({})

const access_token = store.state.access_token
const getAppList = async (access_token) => {
  const resApplist = await appList(access_token)
  resApplist.data.authorizationApplications.forEach(item => {
    if (!Array.isArray(appLists[item.supportDeviceTypes])) {
      appLists[item.supportDeviceTypes] = []
    }

    appLists[item.supportDeviceTypes].push(item)
  })

console.log(toRaw(appLists))
}
getAppList(access_token)
</script>

<template>
  <section id="index">
    <appBox :appList="appLists" title="web应用" />
  </section>
</template>

<style lang="scss" scoped>
.app-box {
  padding: 15px;
}

.app-card {
  width: 169px;
  height: 147px;
}
.app-img {
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
}

.app-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
</style>

