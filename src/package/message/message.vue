<script setup>
import { messageList } from 'api/message/message'
import { reactive, onMounted } from 'vue'
onMounted(() => {
  getList()
})

//获取未读消息
const getList = async () => {
  const resList = await messageList()
  tableData = resList.list
}

// 搜索
const searchs = reactive({
  title: '',
  people: ''
})
const search = () => { }

// 表单
const tableData = reactive([])
</script>

<template>
  <section id="message">
    <div class="search-box">
      <el-input v-model="searchs.title" placeholder="标题" />
      <el-input v-model="searchs.people" placeholder="发送人" />
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="creator" label="发送人" width="180" />
        <el-table-column prop="type" label="消息类型"  width="180" />
        <el-table-column prop="address" label="状态"  width="180" />
        <el-table-column prop="createTime" label="添加时间"  width="180" />
        <el-table-column  label="操作"  width="180" />
      </el-table>

      <el-pagination background layout="prev, pager, next" :total="2"></el-pagination>
    </div>
  </section>
</template>


<style lang="scss" scoped>
#message {
  padding: 30px 15px;
}
.el-input {
  width: 150px;
  margin-right: 15px;
}
</style>