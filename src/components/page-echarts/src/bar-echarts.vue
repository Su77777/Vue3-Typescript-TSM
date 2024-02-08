<template>
  <div class="bar-echarts">
    <BaseEcharts :options="options"></BaseEcharts>
  </div>
</template>

<script setup lang="ts">
import BaseEcharts from './base-echarts.vue'
const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月']
  },
  series: [
    {
      name: '上衣',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250, 451]
    },
    {
      name: '裤子',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310, 456, 124]
    },
    {
      name: '外套',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220, 625, 154]
    },
    {
      name: '帽子',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [121, 47, 741, 541, 321, 544, 321, 111]
    },
    {
      name: '秋裤',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [45, 201, 145, 212, 257, 535, 521, 632]
    }
  ]
}
</script>

<style lang="less" scoped>
.bar-echarts {
  color: red;
}
</style>
