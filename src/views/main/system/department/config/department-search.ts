const departmentSearchConfig = {
  pageName: 'department',
  list: [
    {
      type: 'input',
      label: '部门名称',
      prop: 'name',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      placeholder: '请选择状态',
      options: [{ label: '启用', value: 1 }, { label: '禁用', value: 0 }]
    }
  ]
}

export default departmentSearchConfig
