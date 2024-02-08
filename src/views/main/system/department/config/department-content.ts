const departmentContentConfig = {
  pageName: 'user',
  headers: {
    title: '部门列表',
    btnTitle: '新建部门'
  },
  list: [
    {
      type: 'selection',
      width: '50px'
    },
    {
      type: 'index',
      width: '60px',
      label: '序号'
    },
    {
      prop: 'realname',
      width: '120px',
      label: '真实姓名'
    },
    {
      prop: 'department',
      width: '150px',
      label: '部门名称'
    },
    {
      type: 'custom',
      slotName: 'enable',
      prop: 'enable',
      label: '状态',
      width: '100px'
    }
  ]
}

export default departmentContentConfig
