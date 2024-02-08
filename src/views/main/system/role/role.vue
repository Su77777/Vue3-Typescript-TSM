<template>
  <div class="role">
    <div class="search">
      <PageSearch :page-config="roleSearch"></PageSearch>
    </div>
    <div class="content">
      <PageContent
        :page-content-config="roleContentConfig"
        @handle-new-user-click="newUserClick"
        @handle-update-user-click="updateUserClick"
      ></PageContent>
    </div>
    <div class="model">
      <PageModel
        ref="pageModelRef"
        :page-model-config="roleModelConfig"
        :other-info="otherInfo"
      >
        <template #tree>
          <el-tree
            ref="elTreeRef"
            :data="menuList"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            @check="handleCheckClick"
          />
        </template>
      </PageModel>
    </div>
  </div>
</template>

<script setup lang="ts" name="role">
import PageSearch from '@/components/page-search/page-search.vue'
import roleSearch from './config/roleSearch'

import PageContent from '@/components/page-content/page-content.vue'
import roleContentConfig from './config/roleContent'

import PageModel from '@/components/page-model/page-model.vue'
import roleModelConfig from './config/roleModel'
import roleMenuList from '@/data/roleMenuList.json'

import usePageContent from '@/hook/usePageContent'
import { mapMenuListToTreeId } from '@/utils/map-menu'
import { nextTick, ref } from 'vue'
import type { ElTree } from 'element-plus'
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const { pageModelRef, newUserClick, updateUserClick } =
  usePageContent(newUserCallBack,updateCallBack)

const defaultProps = {
  children: 'children',
  label: 'name'
}
// 获取选中的菜单列表
const otherInfo = ref({})
function handleCheckClick(data1: any, data2: any) {
  const menuListId = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuListId }
}
// 获取菜单列表
const menuList = roleMenuList.roleMenuList[0].menuList

function updateCallBack(itemData: any) {
  // 等待queue队列里面的所有操作执行完毕后就会立马回调nextTick操作
  // nextTick = promise(()=>{}).then(fn)
  // nextTick 在Vue2版本的时候 是一直变化不断的 一会宏任务一会微任务
  // 但是在Vue3的时候就已经确定了 nextTick就是微任务
  // 底层逻辑实现就是放在promise的then中执行的
  nextTick(() => {
    const menuIds = mapMenuListToTreeId(itemData.menuList)
    elTreeRef.value?.setCheckedKeys(menuIds)
  })
}
function newUserCallBack() {
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys([])
  })
}
</script>

<style scoped lang="less">
.role {
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
