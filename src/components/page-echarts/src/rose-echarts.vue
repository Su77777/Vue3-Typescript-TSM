<template>
  <div class="rose-echarts">
    <BaseEcharts :options="options"></BaseEcharts>
  </div>
</template>

<script setup lang="ts">
import BaseEcharts from './base-echarts.vue'
interface IProps {
  roseData: any[]
}
const props = defineProps<IProps>()
const options = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '商品总销量',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      data: props.roseData
    }
  ]
}
</script>

<style lang="less" scoped>
.rose-echarts {
  background-color: #fff;
}
</style>
