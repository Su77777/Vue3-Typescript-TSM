<template>
  <div class="user">
    <div class="search">
      <UserSearch></UserSearch>
    </div>
    <div class="content">
      <UserContent
        @handle-new-user-click="newUserClick"
        @handle-update-user-click="updateUserClick"
      ></UserContent>
    </div>
    <div class="model">
      <UserModel ref="userModelRef"></UserModel>
    </div>
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import UserModel from './c-cpns/user-model.vue'
import { ref } from 'vue'
const userModelRef = ref<InstanceType<typeof UserModel>>()
function newUserClick() {
  userModelRef.value?.dialogVisibleFn(true)
}
function updateUserClick(itemData: any[]) {
  userModelRef.value?.dialogVisibleFn(false, itemData)
}
</script>

<style lang="less" scoped>
.user {
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
