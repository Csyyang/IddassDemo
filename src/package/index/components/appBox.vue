<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  appList: {
    type: Object,
    default: () => {}
  }
})
const store = useStore()
const access_token = store.state.access_token
const routerLink = (url) => {
  window.open(`${url}?access_token=${access_token}`)
}
</script>

<template>
  <section id="index">
    <section class="app-box" v-for="(item, key) in props.appList">
      <el-card>
        <template #header>
          <div>
            <span>{{ key }}</span>
          </div>
        </template>
        <div class="card-box">
          <el-card v-for="item2 in item" class="app-card" @click="routerLink(item2.startUrl)">
            <div class="app-content">
              <img
                class="app-img"
                :src="'https://heenyeqwxq.login.aliyunidaas.com/public/app_image/' + item2.idpApplicationId + '?logoUuid='"
              />
              <p>{{ item2.name }}</p>
            </div>
          </el-card>
        </div>
      </el-card>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.app-box {
  padding: 15px;
}

.app-card {
  width: 169px;
  height: 147px;
  cursor: pointer;
  margin-right: 30px;
  margin-bottom: 30px;
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
}

.card-box {
  display: flex;
  flex-wrap: wrap;
}
</style>

