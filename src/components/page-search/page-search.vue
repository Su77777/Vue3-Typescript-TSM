<template>
  <div class="user-search" v-if="isQuery">
    <el-form :model="searchForm" ref="searchFormEl" label-width="80px">
      <el-row :gutter="20">
        <template v-for="item in pageConfig.list" :key="item.prop">
          <el-col :span="8">
            <template v-if="item.type === 'date-picker'">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  unlink-panels
                  range-separator="To"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </el-form-item>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-select
                  style="width: 100%"
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                >
                  <template v-for="iten in item.options" :key="iten.value">
                    <el-option :label="iten.label" :value="iten.value">
                    </el-option>
                  </template>
                </el-select>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="searchForm[item.prop]"
                ></el-input>
              </el-form-item>
            </template>
          </el-col>
        </template>
        <el-col :span="24">
          <div class="operation">
            <el-button size="large" type="primary" @click="handleReset"
              >重置</el-button
            >
            <el-button size="large" type="success" @click="handlequery"
              >查询</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import usePermission from '@/hook/usePermission'

interface IConfig {
  pageConfig: {
    pageName: string
    list: any[]
  }
}
// 自定义组件
const props = defineProps<IConfig>()
const initialForm: any = {}
for (const item of props.pageConfig.list) {
  initialForm[item.prop] = ''
}

const searchForm = reactive(initialForm)
const searchFormEl = ref<InstanceType<typeof ElForm>>()

function handleReset() {
  searchFormEl.value?.resetFields()
}
function handlequery() {
  console.log('query')
}
const isQuery = usePermission(`system:${props.pageConfig.pageName}:query`)
</script>

<style lang="less" scoped>
.user-search {
  width: 100%;
  height: 100%;
  .operation {
    width: 100%;
    height: 100%;
    text-align: right;
  }
}
.el-input,
.el-date-picker {
  border: 1px solid #ccc;
  border-radius: 5px;
}
.el-form-item {
  padding: 20px 30px;
  margin-bottom: 0;
}
</style>
