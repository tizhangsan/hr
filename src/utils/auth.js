// import Cookies from 'js-cookie'
// // 本地存储方法
// const TokenKey = 'hrtoken'

// export function getToken() { // 在本地拿数据
//   return Cookies.get(TokenKey)
// }

// export function setToken(token) { // 在本地存数据
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() { // 在本地删除数据
//   return Cookies.remove(TokenKey)
// }
import Cookies from 'js-cookie'

const TokenKey = 'hr-token'

const timeKey = 'hr-sass-time-key' // 用来作为时间戳存储的key

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTimeStamp() {
  // 设置当前最新的时间戳
  // Date.now()  new Date.getTime()
  Cookies.set(timeKey, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(timeKey)
}
