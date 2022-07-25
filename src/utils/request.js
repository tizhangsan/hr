import axios from 'axios'

// 创建axios实例
const instance = axios.create()

// 请求拦截器
instance.interceptors.request.use()
// 响应拦截器
instance.interceptors.reponse.use()

export default instance
