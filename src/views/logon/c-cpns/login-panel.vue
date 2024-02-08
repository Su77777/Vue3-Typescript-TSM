<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="accountName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </template>
          <login-account ref="loginAccountRef"></login-account>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
          <login-phone></login-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRebPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="login">
      <el-button
        @click="handleLoginBtnClick"
        class="login-btn"
        type="primary"
        size="large"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'

import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import { localCache } from '@/utils/cache';

let isRebPassword = ref(localCache.getCache('isRebPassword'))
let accountName = ref('account')
// 不能直接等于 loginAccount组件 因为这是一只值
// 需要使用到 loginAccount的实例组件
const loginAccountRef = ref<InstanceType<typeof loginAccount>>()
// 登录按钮逻辑
function handleLoginBtnClick() {
  if (accountName.value === 'account') {
    loginAccountRef.value?.loginAction(isRebPassword.value)
  } else {
    console.log('手机登录')
  }
}
// 保存记住密码状态,实时监听
watch(isRebPassword,(newValue)=>{
  localCache.setCache('isRebPassword',newValue)
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 362px;
  .title {
    text-align: center;
  }
}
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-btn {
  width: 100%;
}
</style>
