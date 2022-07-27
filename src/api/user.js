import request from '@/utils/request'

// 登录接口
// export function loginapi(data) {
//   return request({
//     url: '/sys/login',
//     mwthod: 'post',
//     data
//   })
// }
export function loginapi(data) {
  // 返回了promise对象
  return request({
    url: '/sys/login',
    method: 'post',
    data // body参数体位于data
  })
}
export function getInfo(token) {

}

export function logout() {

}
