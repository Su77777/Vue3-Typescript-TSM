<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isnewUser
          ? pageModelConfig.headers.newTitle
          : pageModelConfig.headers.updateTitle
      "
      align="center"
      width="30%"
    >
      <el-form :model="modelFormReactive" label-width="80px">
        <template v-for="item in pageModelConfig.list" :key="item.prop">
          <template v-if="item.type === 'select'">
            <el-form-item v-bind="item">
              <el-select
                v-model="modelFormReactive[item.prop]"
                style="width: 100%; border: 1px solid #ccc; border-radius: 5px"
                :placeholder="item.placeholder"
              >
                <!-- 部门 -->
                <template v-if="item.prop === 'department'">
                  <template v-for="deItem in departmentList" :key="deItem.id">
                    <el-option :label="deItem.name" :value="deItem.name" />
                  </template>
                </template>
              </el-select>
            </el-form-item>
          </template>
          <template v-else-if="item.type === 'custom'">
            <slot :name="item.slotName"></slot>
          </template>
          <template v-else>
            <el-form-item v-bind="item">
              <el-input
                v-model="modelFormReactive[item.prop]"
                style="border: 1px solid #ccc; border-radius: 5px"
                :show-password="item.type === 'password'"
              ></el-input>
            </el-form-item>
          </template>
        </template>
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

interface PageModel {
  pageModelConfig: {
    pageName:string
    headers: {
      newTitle: string
      updateTitle: string
    }
    list: any[]
  },
  otherInfo?:any
}
const props = defineProps<PageModel>()

// 获取storage
const mainStore = useMainStore()
const systemStore = useSystemStore()
// 调用storage中的action
mainStore.fetchRoleList()
mainStore.fetchDepartmentList()
// const emits = defineEmits(['postUserList'])
const { departmentList } = storeToRefs(mainStore)
// 定义modelForm
const initialValue: any = {}
for (const item of props.pageModelConfig.list) {
  initialValue[item.prop] = item.initialValue ?? ''
}
const modelFormReactive = reactive<any>(initialValue)
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

<style lang="less" scoped></style>
