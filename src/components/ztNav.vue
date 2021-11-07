<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const handleSelect = () => (key, keyPath) => {
  console.log(key, keyPath)
}

const store = useStore()
const router = useRouter()
const logout = () => {
  store.dispatch('logout')
  router.push('/login')
}
</script>

<template>
  <nav id="nav">
    <div class="nav-title">IDaaS统一认证身份平台</div>

    <el-menu class="nav-list" default-action="3" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center1</el-menu-item>
      <el-menu-item index="2">Processing Center2</el-menu-item>
      <el-menu-item index="3">Processing Center3</el-menu-item>
    </el-menu>

    <section class="avatat-box">
      <el-dropdown>
        <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
#nav :deep(.el-menu--horizontal) {
  justify-content: flex-end;
}
#nav {
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  .nav-title {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 700;
    line-height: 61px;
    word-break: break-word;
  }
  .nav-list {
    flex: 1 1 auto;
    border-bottom: none;
  }

  .avatat-box {
    cursor: pointer;
  }
}
</style>