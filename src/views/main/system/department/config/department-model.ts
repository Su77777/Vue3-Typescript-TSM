const departmentModelConfig = {
  pageName: 'department',
  headers: {
    newTitle: '新建部门',
    updateTitle: '编辑部门'
  },
  list: [
    {
      type: 'normal',
      prop: 'name',
      label: '用户名'
    },
    {
      type: 'normal',
      prop: 'realname',
      label: '真实姓名'
    },
    {
      type: 'normal',
      prop: 'cellphone',
      label: '手机号'
    },
    {
      type: 'password',
      prop: 'password',
      label: '密码'
    },
    {
      type: 'select',
      prop: 'department',
      label: '部门',
      placeholder: '请选择部门'
    }
  ]
}

export default departmentModelConfig
