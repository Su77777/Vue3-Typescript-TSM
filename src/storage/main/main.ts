import { defineStore } from 'pinia'
import roleData from '@/data/role.json'
import departmentData from '@/data/department.json'

interface IMain {
  roleList: any[]
  departmentList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMain => ({
    roleList: [],
    departmentList: []
  }),
  actions: {
    fetchRoleList() {
      roleData.forEach((item) => {
        this.roleList.push(item)
      })
      console.log(this.roleList)
    },
    fetchDepartmentList() {
      this.departmentList = departmentData.list
    }
  }
})

export default useMainStore
