<script setup>
// import { computed } from 'vue-demi';
// import { mapState } from 'vuex';
import ztNav from '../components/ztNav.vue'
import ztSidebar from '../components/ztSidebar.vue'
import ztNavHeader from '../components/ztNavHeader.vue'

</script>

<template>
    <section id="zt-Navigation">
        <ztNav />
        <section class="view">
            <ztSidebar />
            <section class="router">
                <ztNavHeader />
                <router-view class="main"></router-view>
            </section>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.view {
    height: calc(100% - 62px);
    display: flex;
    align-items: stretch;
}
.ztSidebar {
    flex: 0 0 auto;
}
.router {
    flex: 1 0 auto;
}

.main {
    overflow: auto;
    height: calc(100% - 65px);
}
</style>

