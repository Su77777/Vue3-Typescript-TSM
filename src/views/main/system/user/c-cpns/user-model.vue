<template>
  <div class="user-model">
    <el-dialog
      v-model="dialogVisible"
      :title="isnewUser ? '新建用户' : '编辑用户'"
      align="center"
      width="30%"
    >
      <el-form :model="modelFormReactive" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input
            v-model="modelFormReactive.name"
            style="border: 1px solid #ccc; border-radius: 5px"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input
            v-model="modelFormReactive.realname"
            style="border: 1px solid #ccc; border-radius: 5px"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="modelFormReactive.password"
            style="border: 1px solid #ccc; border-radius: 5px"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="cellphone">
          <el-input
            v-model="modelFormReactive.cellphone"
            style="border: 1px solid #ccc; border-radius: 5px"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select
            v-model="modelFormReactive.role"
            style="width: 100%; border: 1px solid #ccc; border-radius: 5px"
            placeholder="请选择角色"
          >
            <template v-for="item in roleList" :key="item.id">
              <el-option :label="item.name" :value="item.name" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-select
            v-model="modelFormReactive.department"
            style="width: 100%; border: 1px solid #ccc; border-radius: 5px"
            placeholder="请选择部门"
          >
            <template v-for="item in departmentList" :key="item.id">
              <el-option :label="item.name" :value="item.name" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="dialogVisible = false"
            >取消</el-button
          >
          <el-button type="success" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useMainStore from '@/storage/main/main'
import useSystemStore from '@/storage/main/system/system'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const systemStore = useSystemStore()
mainStore.fetchRoleList()
mainStore.fetchDepartmentList()
const emits = defineEmits(['postUserList'])
const { roleList, departmentList } = storeToRefs(mainStore)
// 定义modelForm
const modelFormReactive = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  role: '',
  department: ''
})
let isnewUser = ref(true)
// 定义dialog开关
const dialogVisible = ref(false)
function dialogVisibleFn(isMenu: boolean = true, itemData?: any[]) {
  dialogVisible.value = true
  isnewUser.value = isMenu
  if (!isMenu && itemData) {
    for (const key in itemData) {
      modelFormReactive[key] = itemData[key]
    }
  } else {
    for (const key in modelFormReactive) {
      modelFormReactive[key] = ''
    }
  }
}
// 处理 dig确认按钮逻辑
function handleConfirmClick() {
  dialogVisible.value = false
  if (isnewUser.value) {
    systemStore.usersList.push(modelFormReactive)
  }
}
defineExpose({ dialogVisibleFn })
</script>

<style lang="less" scoped>
.user-model {
  color: red;
}
</style>
