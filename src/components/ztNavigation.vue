<script setup>
import ztNav from '../components/ztNav.vue'
import ztSidebar from '../components/ztSidebar.vue';
</script>

<template>
    <section id="zt-Navigation">
        <ztNav />
        <section class="view">
            <ztSidebar />
            <section class="router">
                <router-view></router-view>
            </section>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.view {
    height: 100%;
    display: flex;
    align-items: stretch;
}
.ztSidebar {
    flex: 0 0 auto;
}
.router {
    flex: 1 0 auto;
}
</style>

