const roleContentConfig = {
  pageName: 'role',
  headers: {
    title: '新建角色',
    btnTitle: '编辑角色'
  },
  list: [
    {
      type: 'selection',
      width: '50px'
    },
    {
      type: 'index',
      label: '序号',
      width: '60px'
    },
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      width: '120px'
    },
    {
      type: 'input',
      label: '权限介绍',
      prop: 'intro',
      width: '120px'
    }
  ]
}

export default roleContentConfig
