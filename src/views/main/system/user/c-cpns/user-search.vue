<template>
  <div class="user-search">
    <el-form :model="searchForm" ref="searchFormEl" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input
              placeholder="请输入用户名"
              v-model="searchForm.name"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="searchForm.realname"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="searchForm.cellphone"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              v-model="searchForm.enable"
              placeholder="请选择你的状态"
              style="width: 100%"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              unlink-panels
              range-separator="To"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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

const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: []
})
const searchFormEl = ref<InstanceType<typeof ElForm>>()

function handleReset() {
  searchFormEl.value?.resetFields()
}
function handlequery() {
  console.log('query')
}
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
