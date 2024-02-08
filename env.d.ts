/// <reference types="vite/client" />

// 声明vue组件的类型 让它具有更友好的提示
// 完整声明写法
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: defineComponent
  export default component
}
declare module '*.mjs'
