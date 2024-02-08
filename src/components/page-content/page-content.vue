<template>
  <div class="user-content">
    <div class="header">
      <h2>{{ pageContentConfig.headers.title ?? '用户列表' }}</h2>
      <el-button
        v-if="isCreate"
        type="primary"
        size="large"
        @click="newUserClick"
        >{{ pageContentConfig.headers.btnTitle ?? '新建用户' }}</el-button
      >
    </div>
  </div>
  <div class="table">
    <el-table
      :data="pageContentList"
      border
      style="width: 100%"
      :row-key="pageContentConfig?.rowKey"
    >
      <template v-for="item in pageContentConfig.list" :key="item">
        <template v-if="item.type !== 'custom'">
          <el-table-column v-bind="item" align="center"></el-table-column>
        </template>
        <template v-else>
          <el-table-column v-bind="item" align="center">
            <template #default="scope">
              <slot :name="item?.slotName" v-bind="scope"></slot>
            </template>
          </el-table-column>
        </template>
      </template>
      <el-table-column prop="createAt" label="创建时间" align="center">
        <template #default="scope">
          <!-- {{ formatDate(scope.row[item.prop]) }} -->
          {{ formatDate(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center">
        <template #default="scope">
          <!-- {{ formatDate(scope.row[item.prop]) }} -->
          {{ formatDate(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="170px" align="center">
        <template #default="scope">
          <el-button
            v-if="isUpdate"
            type="primary"
            size="small"
            icon="Edit"
            @click="updateUserClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            type="danger"
            size="small"
            icon="Delete"
            @click="handleDelateItem(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="pagination">
    <el-pagination layout="prev, pager, next" :total="pageContentTotal" />
  </div>
</template>

<script setup lang="ts">
import usePermission from '@/hook/usePermission'
import useSystemStore from '@/storage/main/system/system'
import formatDate from '@/utils/format'
import { storeToRefs } from 'pinia'

// 接受配置文件 自定义组件
interface PageContent {
  pageContentConfig: {
    pageName: string
    rowKey?: string
    headers: {
      title: string
      btnTitle: string
    }
    list: any[]
  }
}
const props = defineProps<PageContent>()

const emit = defineEmits(['handleNewUserClick', 'handleUpdateUserClick'])
const systemStore = useSystemStore()
systemStore.fetchPageContent(props.pageContentConfig.pageName)
const { pageContentList, pageContentTotal } = storeToRefs(systemStore)

// 新建用户
function newUserClick() {
  emit('handleNewUserClick')
}
// 编辑用户
function updateUserClick(itemData: any) {
  emit('handleUpdateUserClick', itemData)
}
// 删除用户
function handleDelateItem(itemData: any) {
  const index = pageContentList.value.findIndex(
    (item) => item.name === itemData.name
  )
  pageContentList.value.splice(index, 1)
}
// 判断用户 是否有增删改查权限
const isCreate = usePermission(`${props.pageContentConfig.pageName}:create`)
const isUpdate = usePermission(`${props.pageContentConfig.pageName}:update`)
const isDelete = usePermission(`${props.pageContentConfig.pageName}:delete`)
console.log(isCreate, isUpdate, isDelete)
</script>

<style lang="less" scoped>
.user-content {
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.table {
  margin-top: 20px;
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
  .el-checkbox__inner {
    border: 1px solid #ccc;
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
