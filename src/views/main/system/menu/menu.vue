<template>
  <div class="menu">
    <div class="content">
      <PageContent :page-content-config="menuContentConfig"> </PageContent>
    </div>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue'
import menuContentConfig from './config/menuContent.ts'
</script>

<style scoped lang="less">
.menu {
  .search,
  .content {
    background-color: #fff;
    padding: 20px 25px;
    border-radius: 6px;
    overflow: hidden;
  }
  .content {
    margin-top: 20px;
  }
}
</style>
