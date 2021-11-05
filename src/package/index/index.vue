<script setup>
import appBox from './components/appBox.vue'
</script>

<template>
  <section id="index">
    <appBox />
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

