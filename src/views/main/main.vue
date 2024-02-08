<template>
  <div class="main">
    <!-- <el-button type="danger" @click="handleExitLogin">退出登录</el-button> -->
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <MainMenu :is-fold="isCollapse"></MainMenu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <MainHeader @handle-fold-fn="foldChange"></MainHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

let isCollapse = ref(false)
const foldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
}
.main-container {
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
  }
  .el-main {
    background-color: rgb(240, 243, 244);
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    background-color: #001529;
    scrollbar-width: none;
    transition: all ease 0.4s;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
