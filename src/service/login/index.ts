import SyAxios from '..'
export function accountLoginRequest(account?: any) {
  return SyAxios.post({
    url: '/login',
    data:account
  })
}
