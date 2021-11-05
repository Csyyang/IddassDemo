<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() =>  route.meta.title)
</script>

<template>
  <section class="nav-header">
    <div class="color-box"></div>
    <div class="route-name">{{ title }}</div>
  </section>
</template>

<style lang="scss" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 15px;
  padding: 0 15px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%);
}
.color-box {
  height: 32px;
  width: 2px;
  background: #657180;
  margin-right: 10px;
}

.route-name {
  font-weight: 700;
  color: #657180;
}
</style>