<template>
  <div class="page-count">
    <div class="total-sales">
      {{ title }}
      <el-tooltip :content="tips" placement="top" effect="dark" class="tooltip">
        <el-icon size="12" color="#cc">
          <QuestionFilled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="content" ref="contentRef">{{ number1 }}</div>
    <div class="footer">
      <div class="subtitle">{{ subtitle }}</div>
      <div class="number2" ref="number2Ref">{{ number2 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'
interface IProps {
  title: string
  subtitle: string
  tips: string
  number1: number
  number2: number
}
// 给props默认值
const props = withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  subtitle: '商品总销量',
  tips: '所有商品总销量'
})

const contentRef = ref<HTMLElement>()
const number2Ref = ref<HTMLElement>()

onMounted(() => {
  const countup1 = new CountUp(contentRef.value!, props.number1, {})
  countup1.start()
})
</script>

<style lang="less" scoped>
.page-count {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  height: 120px;
  // width: 400px;
  background-color: #fff;
  box-sizing: border-box;

  .total-sales {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 35px;
    line-height: 35px;
    font-size: 12px;
    color: #ccc;
  }
  .content {
    flex: 1;
    font-size: 24px;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }

  .footer {
    display: flex;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    padding-top: 5px;
    .subtitle {
      margin-right: 5px;
    }
  }
  .el-icon {
    cursor: pointer;
  }
}
</style>
