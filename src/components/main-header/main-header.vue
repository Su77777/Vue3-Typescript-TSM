<template>
  <div class="main-header">
    <div class="fold">
      <el-icon size="30px" @click="handleNavStatus">
        <component :is="isFold ? Expand : Fold"></component>
      </el-icon>
    </div>
    <div class="info">
      <div class="breadcrumb">
        <MainHeaderCrumb></MainHeaderCrumb>
      </div>
      <div class="person-info">
        <MainHeaderInfo></MainHeaderInfo>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
// 子组件
import MainHeaderInfo from './c-cpns/main-header-info.vue'
import MainHeaderCrumb from './c-cpns/main-header-crumb.vue'
// 定义Nav状态栏折叠状态
let isFold = ref(false)
// 定义事件监听
const emit = defineEmits(['handleFoldFn'])

const handleNavStatus = () => {
  isFold.value = !isFold.value
  // 发送事件监听
  emit('handleFoldFn', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  width: 100%;
}
.fold {
  display: flex;
}
.info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .breadcrumb {
    margin-left: 30px;
    margin-bottom: 2px;
  }
}
</style>
