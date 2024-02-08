<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/logo.svg" alt="" />
      <h2 class="title" v-if="!isFold">TS-CMS</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultAction"
        text-color="#b7bdc3"
        active-text-color="#ffd04b"
        background-color="#001529"
        :collapse="isFold"
      >
        <template v-for="item in limitsData" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                <!-- el-menu插槽 -->
                <template #title>{{ subitem.name }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import limitsData from '@/data/limits.json'
import { useRouter, useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menu'
import { computed, ref } from 'vue'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
const router = useRouter()

// 动态匹配defaultAction
const route = useRoute()

const defaultAction = computed(() => {
  const pathMenu = mapPathToMenu(route.path, limitsData)
  return pathMenu.id + ''
})

function handleItemClick(item: any) {
  const url = item.url
  router.push(url)
}
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 14px;
      margin-left: 10px;
    }
    .img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
  }
}
.logo {
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  padding: 10px 20px 10px 20px;
}
.el-menu-item {
  height: 40px;
  padding-left: 50px !important;
  background-color: #0c2135;
  &:hover {
    color: #ffd04b;
  }
}
.el-menu-item.is-active {
  background-color: rgb(3, 44, 83);
}
</style>
