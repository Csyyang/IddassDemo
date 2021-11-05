<script setup>
import { ref } from 'vue'
import {
  Location,
  Menu as IconMenu,
  Expand
} from '@element-plus/icons'

const isCollapse = ref(false)

const changeCollapse = () => {
  isCollapse.value = !isCollapse.value
}

</script>

<template>
  <section id="sidebar">
    <div class="menu" @click="changeCollapse">
      <el-icon :size="25">
        <expand />
      </el-icon>
    </div>
    <el-menu router default-active="1" :collapse="isCollapse">
      <div :class="[isCollapse ? 'logot' : '', 'logo']">
        <img src="../assets/logo.png" />
      </div>

      <el-sub-menu index="navigation">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>主导航</span>
        </template>
        <el-menu-item index="/navigation/">
          <template #title>
            <span>首页</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/navigation/test">
          <template #title>
            <span>test</span>
          </template>
        </el-menu-item>

        <el-sub-menu index="1-2">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="1-2-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two2</template>
      </el-menu-item>

      <el-menu-item index="3">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two3</template>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<style lang="scss" scoped>
#sidebar {
  position: relative;
  max-width: 200px;
  height: 100%;
  .menu {
    position: absolute;
    z-index: 1000;
    left: 12px;
    top: -44px;
  }
  .el-menu {
    height: 100%;
    overflow: hidden;
    :deep(.el-sub-menu__icon-arrow) {
      position: absolute;
    }
  }
}

.logo img {
  width: 200px;
  object-fit: cover;
  transform: width 0.5s;
  cursor: pointer;
}

.logot img {
  width: 64px;
}
</style>