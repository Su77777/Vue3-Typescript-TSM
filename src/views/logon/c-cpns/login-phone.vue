<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号:" size="large">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码:" size="large">
        <div class="verify-box">
          <el-input class="verify-input" />
          <el-button type="primary" :icon="PhoneFilled" class="verify-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {PhoneFilled} from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.login-phone {
  .verify-box {
    display: flex;
    .verify-input {
      width: 110px !important;
    }
    .verify-button {
      margin-left: 20px;
    }
  }
}
</style>
