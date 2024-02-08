<template>
  <div class="dashboard">
    <div class="header">
      <el-row :gutter="10">
        <template v-for="item in countData" :key="item.title">
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <PageCount v-bind="item"></PageCount
          ></el-col>
        </template>
      </el-row>
    </div>
    <div class="content">
      <el-row :gutter="12">
        <el-col :span="7">
          <RoseEcharts :roseData="roseData"></RoseEcharts>
        </el-col>
        <el-col :span="10">
          <MapEchart :mapData="mapData"></MapEchart>
        </el-col>
        <el-col :span="7">
          <LineEcharts> </LineEcharts>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <el-row :gutter="10">
        <el-col :span="24">
          <BarEcharts></BarEcharts>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import RoseEcharts from '@/components/page-echarts/src/rose-echarts.vue'
import LineEcharts from '@/components/page-echarts/src/line-echarts.vue'
import PageCount from '@/components/page-count/page-count.vue'
import BarEcharts from '@/components/page-echarts/src/bar-echarts.vue'
import MapEchart from '@/components/page-echarts/src/map-echart.vue'
import useAnalysisStore from '@/storage/main/analysis/analysis'
import { storeToRefs } from 'pinia'

const analysisStore = useAnalysisStore()
analysisStore.fetchCountData()
analysisStore.fetchRoseData()
analysisStore.fetchMapData()
const { countData, roseData, mapData } = storeToRefs(analysisStore)
</script>

<style scoped lang="less">
.dashboard {
  .content {
    margin-top: 10px;
  }
  .footer {
    margin-top: 10px;
  }
}
</style>
