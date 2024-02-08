const roleSearchConfig = {
  pageName: 'role',
  headers:{
    title:'角色列表',
    btnTitle:'新建角色'
  },
  list:[
    {
      type:'input',
      label:'角色名称',
      prop:'role'
    },
    {
      type:'input',
      label:'权限介绍',
      prop:'intro'
    },
    {
      type:'date-picker',
      label:'创建时间',
      prop:'createAt'
    }
  ]
}


export default roleSearchConfig