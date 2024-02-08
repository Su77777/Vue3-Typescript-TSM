import { accountLoginRequest } from '@/service/login'
import { localCache } from '@/utils/cache'
import { mapMenuToRoutes, mapPermissionToMenuList } from '@/utils/map-menu'

import type { IAccount } from '@/typs'

import { defineStore } from 'pinia'
import router from '@/router'
import limits from '@/data/limits.json'

const LOGIN_TOKEN = 'login/token'
interface ILogin {
  id: any
  name: string
  token: any
  userMenu: any[]
  permission: string[]
}
const useLoginStore = defineStore('login', {
  state: (): ILogin => ({
    id: '',
    name: '',
    token: '',
    userMenu: [],
    permission: []
  }),
  actions: {
    async loginAction(account: IAccount) {
      // 发送网络请求 验证账号是否正确
      const res = await accountLoginRequest(account)
      // 保存用户信息
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      // 本地存储token
      localCache.setCache(LOGIN_TOKEN, this.token)
      localCache.setCache('userMenu', limits)
      // 重要 动态路由 根据角色权限展示路由
      const routes = mapMenuToRoutes(limits)
      // 获取按钮权限
      const permission = mapPermissionToMenuList(limits)
      if (permission) this.permission = permission
      console.log(permission)

      routes.forEach((route) => router.addRoute('main', route))

      // 页面跳转
      router.push('/main')
    },
    loadLocalCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userMenu = localCache.getCache('userMenu')
      if (token && userMenu) {
        this.token = token
        this.userMenu = userMenu
        const routes = mapMenuToRoutes(limits)
        const permission = mapPermissionToMenuList(limits)
        if (permission) this.permission = permission
        console.log(permission)

        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
