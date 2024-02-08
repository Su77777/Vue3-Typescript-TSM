import { defineStore } from 'pinia'
import userListData from '@/data/userList.json'
import MenuList from '@/data/limits.json'
import roleList from '@/data/roleMenuList.json'
import { localCache } from '@/utils/cache'

interface ISystemState {
  usersList: any[]
  usersTotalCount: number
  pageContentList: any[]
  pageContentTotal: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
    pageContentList: [],
    pageContentTotal: 0
  }),
  actions: {
    usersListAction() {
      const { list, totalCount } = userListData
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    cacheUsersListAction() {
      localCache.setCache('userList', this.usersList)
    },
    fetchPageContent(dataName: string) {
      if (dataName === 'user') {
        const { list, totalCount } = userListData
        this.pageContentList = list
        this.pageContentTotal = totalCount
      }
      if (dataName === 'menu') {
        this.pageContentList = MenuList
      }
      if (dataName === 'role') {
        this.pageContentList = roleList.roleMenuList
      }
    }
  }
})

export default useSystemStore
