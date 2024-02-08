const roleModelConfig = {
  pageName: 'role',

  headers: {
    newTitle: '新建角色',
    updateTitle: '编辑角色'
  },
  list: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name'
    },
    {
      type: 'input',
      label: '权限介绍',
      prop: 'intro'
    },
    {
      type:'custom',
      slotName:'tree'
    }
  ]
}

export default roleModelConfig
