<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div id="main">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#main {
  min-width: 1218px;
  width: 100%;
  height: 100%;
  &>section {
    width: 100%;
    height: 100%;
  }
}
</style>
