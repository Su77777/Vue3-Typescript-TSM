import type { RouteRecord, RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const localRoutes: RouteRecord[] = []
  // 读取router/main文件夹下的所有ts文件 => main的子路由
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true //立即获取同步获取
    }
  )
  // 通过key -> 路径 遍历所有value出来
  // value = { path：’/**/***‘，component：’/‘ }
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}
export let fastMenu: any = null
export const mapMenuToRoutes = (userMenu: any[]) => {
  const localRoutes = loadLocalRoutes()
  const routes: RouteRecordRaw[] = []
  // 对请求数据遍历
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      // 拿所有处理过的main子路由路径和请求数据的子路由路径匹配
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 1.给顶层菜单添加重定向功能
        if (!routes.find((item) => item.path === menu.url)) {
          // 只给你添加 你有的权限菜单
          routes.push({ path: menu.url, redirect: route.path })
        }

        routes.push(route)
      }
      if (!fastMenu && route) {
        fastMenu = routes[0]
      }
    }
  }
  console.log(routes)

  return routes
}

export function mapPathToMenu(path: string, userMenu: any[]) {
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface ICrumbPath {
  name: string
  path: string
}

export function mapPathToCrumb(path: string, userMenu: any[]) {
  const crumbPath: ICrumbPath[] = []
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (path === submenu.url) {
        crumbPath.push({ name: menu.name, path: menu.url })
        crumbPath.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return crumbPath
}

export function mapMenuListToTreeId(itemData: any) {
  const ids: number[] = []
  function getMenuListId(menus: any) {
    for (const item of menus) {
      if (item.children) {
        getMenuListId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  getMenuListId(itemData)
  return ids
}
export function mapPermissionToMenuList(menuList: any[]) {
  const perMission: string[] = []
  function getPermission(menu: any[]) {
    for (const item of menu) {
      if (item.type === 3) {
        perMission.push(item.permission)
      } else {
        getPermission(item.children ?? [])
      }
    }
  }
  getPermission(menuList)

  return perMission
}
