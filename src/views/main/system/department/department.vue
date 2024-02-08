<template>
  <div class="department">
    <div class="search">
      <PageSearch :page-config="departmentSearchConfig"></PageSearch>
    </div>
    <div class="content">
      <PageContent
        :page-content-config="departmentContentConfig"
        @handleNewUserClick="newUserClick"
        @handleUpdateUserClick="updateUserClick"
      >
        <template #enable="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
      </PageContent>
    </div>
    <div class="model">
      <PageModel
        ref="pageModelRef"
        :page-model-config="departmentModelConfig"
      ></PageModel>
    </div>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModel from '@/components/page-model/page-model.vue'
import departmentSearchConfig from './config/department-search'
import departmentContentConfig from './config/department-content'
import departmentModelConfig from './config/department-model'

import usePageContent from '@/hook/usePageContent'


const { pageModelRef,newUserClick,updateUserClick } = usePageContent()
</script>

<style scoped lang="less">
.department {
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
