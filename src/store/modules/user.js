// import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginapi } from '@/api/user'
const state = { // vuex的数据
  token: getToken() // 在本地拿数据
}
const mutations = { // 同步改变vuex的数据
  setyoken(state, token) { // 改变vuex里的数据
    state.token = token
    setToken(token) // 同时改变本地里的token
  },
  removeToken(state) { // 删除token 的一个方法
    state.token = null
    removeToken()
  }
}

const actions = { // 异步改变vuex的数据 api网络请求
  async  login(context, data) {
    const result = await loginapi(data)
    console.log(result)

    context.commit('setyoken', result)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
