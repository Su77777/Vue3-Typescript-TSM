<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :model="account"
      size="large"
      :rules="accountForm"
      status-icon
      ref="ElFormRef"
    >
      <el-form-item label="账号:" size="large" prop="account">
        <el-input v-model="account.account" />
      </el-form-item>
      <el-form-item label="密码:" size="large" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import useLoginStore from '@/storage/login/login.ts'
import { localCache } from '@/utils/cache';
// 双向绑定 账号密码
const account = reactive({
  account: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
// 账号校验
const accountForm: FormRules = {
  account: [
    { required: true, message: '必须输入账号信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '帐号必须是6到20位',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是6到20位',
      trigger: 'change'
    }
  ]
}
// 获取表单元素
const ElFormRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRebPassword: boolean) {
  ElFormRef.value?.validate((validate) => {
    if (validate) {
      const name = account.account
      const password = account.password
      loginStore.loginAction({ name, password }).then(()=>{
        if(isRebPassword) {
          localCache.setCache('name',name)
          localCache.setCache('password',password)
        } else {
          localCache.removeCache('name')
          localCache.removeCache('password')
        }
      })
    } else {
      ElMessage({
        showClose: true,
        message: '账号或密码格式不对,请重新输入',
        type: 'error'
      })
    }
  })
}

// 暴露子组件方法 供给父组件调用
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
