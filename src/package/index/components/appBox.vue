<script setup>

const props = defineProps({
  appList: {
    type: Array,
    default: () => [{
      type: 'web应用',
      lists: [{
        appName: '应用名称',
        appImg: 'https://heenyeqwxq.login.aliyunidaas.com/public/app_image/plugin_saml_gitlab?logoUuid=',
        linkHref: ''
      }]
    }]
  }
})
</script>

<template>
  <section id="index">
    <section class="app-box" v-for="item in props.appList">
      <el-card>
        <template #header>
          <div>
            <span>{{ item.type }}</span>
          </div>
        </template>
        <el-card v-for="item2 in item.lists" class="app-card">
          <div class="app-content">
            <img class="app-img" :src="item2.appImg" />
            <p>{{ item2.appName }}</p>
          </div>
        </el-card>
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

</style>

