<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: '',
  password: ''
})

</script>

<template>
  <div id="login">
    <section class="login-box">
      <div class="logo">
        <img src="../../assets/logo.png" />
      </div>

      <div class="login-title">中天IDAAS</div>

      <el-form :model="user" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="user.name" type="text" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>

      <section class="primary-bt">
        <el-button type="primary">登录</el-button>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/loginBg.jpeg") no-repeat;
  background-size: cover;
}

.login-title {
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 30px;
}
.login-box {
  background: #fff;
  border-radius: 5px;
  padding: 20px 50px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 450px;
  .logo {
    text-align: center;
  }
}

#login .primary-bt {
  padding-left: 60px;
  :deep(.el-button) {
    width: 290px;
  }
}
</style>