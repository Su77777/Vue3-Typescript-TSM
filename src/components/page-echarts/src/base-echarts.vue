<template>
  <div class="base-echarts">
    <div
      class="earch"
      ref="echartsRef"
      style="widows: 100%; height: 350px"
    ></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
import ChinaJson from '../data/china.json'

// 注册地图
echarts.registerMap('china', ChinaJson as any)

interface IProps {
  options: any
}

const echartsRef = ref<HTMLDivElement>()
const props = defineProps<IProps>()

onMounted(() => {
  const echar = echarts.init(echartsRef.value!, 'light', {
    renderer: 'canvas'
  })
  watchEffect(() => {
    echar.setOption(props?.options)
  })
})
</script>

<style lang="less" scoped></style>
