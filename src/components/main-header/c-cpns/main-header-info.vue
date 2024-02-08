<template>
  <div class="main-header-info">
    <div class="operate">
      <span class="dot"></span>
      <el-icon size="24">
        <Message />
      </el-icon>
      <el-icon size="24">
        <ChatDotRound />
      </el-icon>
      <el-icon size="24">
        <Search />
      </el-icon>
    </div>
    <div class="person-info">
      <el-dropdown>
        <div class="info">
          <el-avatar :size="24" src="../../../assets/logo.svg" />
          <span class="name">CodeSyw</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><CircleClose /></el-icon>
              退出系统
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.main-header-info {
  display: flex;
}
.operate {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .el-icon {
    padding: 5px 5px;
    cursor: pointer;
    border-radius: 50%;
    margin: 0px 10px;
    &:hover {
      background-color: whitesmoke;
    }
  }
  .dot {
    position: absolute;
    z-index: 10;
    top: 6px;
    right: 64px;
    width: 4px;
    height: 4px;
    background-color: red;
    border-radius: 50%;
  }
}
.person-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  .el-avatar {
    margin-right: 10px;
    cursor: pointer;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    // 设定全局样式 :deep是找到某个父元素内的某个子元素
    :global(.el-dropdown-menu__item) {
      line-height: 36px !important;
      padding: 6px 22px;
    }
  }
}
</style>
