import useLoginStore from '@/storage/login/login'

function usePermission(permissionKey: string) {
  const loginStore = useLoginStore()
  const { permission } = loginStore
  return !!permission.find((item) => item.includes(permissionKey))
}

export default usePermission
