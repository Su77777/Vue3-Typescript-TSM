<template>
  <div class="user-content">
    <div class="header">
      <h2>用户列表</h2>
      <el-button type="primary" size="large" @click="newUserClick"
        >新建用户</el-button
      >
    </div>
  </div>
  <div class="table">
    <el-table :data="usersList" border style="width: 100%">
      <el-table-column
        type="selection"
        width="50px"
        align="center"
      ></el-table-column>
      <el-table-column align="center" type="index" width="60px" label="序号" />
      <el-table-column
        prop="name"
        label="用户名"
        width="120px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="realname"
        label="真实姓名"
        width="120px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="cellphone"
        label="手机号"
        width="150px"
        align="center"
      ></el-table-column>
      <el-table-column prop="enable" label="状态" width="100px" align="center">
        <template #default="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center">
        <template #default="scope">
          {{ formatDate(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="更新时间" align="center">
        <template #default="scope">
          {{ formatDate(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="170px" align="center">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            icon="Edit"
            @click="updateUserClick(scope.row)"
            >编辑</el-button
          >
          <el-button
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
    <el-pagination layout="prev, pager, next" :total="totalCount" />
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '../../../../../storage/main/system/system'
import formatDate from '@/utils/format'
import { storeToRefs } from 'pinia'
const emit = defineEmits(['handleNewUserClick', 'handleUpdateUserClick'])
const systemStore = useSystemStore()
systemStore.usersListAction()
// const usersList = systemStore.usersList
const { usersList } = storeToRefs(systemStore)
const totalCount = systemStore.usersTotalCount

// 新建用户
function newUserClick() {
  emit('handleNewUserClick')
}
// 编辑用户
function updateUserClick(itemData: any) {
  console.log(itemData)

  emit('handleUpdateUserClick', itemData)
}
// 删除用户
function handleDelateItem(itemData: any) {
  const index = usersList.value.findIndex((item) => item.name === itemData.name)
  usersList.value.splice(index, 1)
}
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
@/utils/format
