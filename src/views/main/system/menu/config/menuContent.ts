const menuContentConfig = {
  pageName: 'menu',
  rowKey: 'id',
  headers: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  list: [
    {
      label: '菜单名称',
      prop: 'name',
      width: '180px'
    },
    {
      label: '级别',
      prop: 'type',
      width: '100px'
    },
    {
      label: '菜单url',
      prop: 'url',
      width: '150px'
    },
    {
      label: '菜单icon',
      prop: 'icon',
      width: '150px'
    },
    {
      label: '排序',
      prop: 'sort',
      width: '100px'
    },
    {
      label: '权限',
      prop: 'permission',
      width: '120px'
    }
  ]
}

export default menuContentConfig
