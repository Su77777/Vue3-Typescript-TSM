import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite' //element-plus插件 根据使用的组件 进行按需引入
import Components from 'unplugin-vue-components/vite' //element-plus插件 根据使用的组件 进行按需引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' //element-plus插件 根据使用的组件 进行按需引入
// 按需导入样式插件
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), //为了识别vue文件
    AutoImport({
      resolvers: [ElementPlusResolver()] //element-plus插件
    }),
    Components({
      resolvers: [ElementPlusResolver()] //element-plus插件
    }),
    // 根据按需引入的组件 按需引入组件的样式
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      //解决路径文件 打包dist文件到./src下
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
