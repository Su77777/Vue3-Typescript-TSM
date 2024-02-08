import { localCache } from '@/utils/cache'
import { fastMenu } from '@/utils/map-menu'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      path: '/login',
      component: () => import('@/views/logon/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/main.vue')
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () =>
      //       import('../views/main/analysis/overview/overview.vue')
      //   }
      // ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-fount/not-fount.vue')
    }
  ]
})

router.beforeEach((to) => {
  const token = localCache.getCache('login/token')
  // 匹配以main开头路由
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/main') {

    return fastMenu?.path
  }
})
export default router
