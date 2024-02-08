<template>
  <div class="main-header-crumb">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in crumbs" :key="index">
        <el-breadcrumb-item :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/storage/login/login'
import { mapPathToCrumb } from '@/utils/map-menu'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const loginStore = useLoginStore().userMenu
const route = useRoute()
const crumbs = computed(() => mapPathToCrumb(route.path, loginStore))
</script>

<style lang="less" scoped>
.main-header-crumb {
  color: red;
}
</style>
