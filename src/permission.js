import router from '@/router'
import state from '@/store'
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式
const bai = ['/login', '/404']
router.beforeEach((to, from, next) => { // 路由前置守卫
  NProgress.start() // 路由守卫开始工作的时候开启进度条
  if (state.getters.token) { // 有token的情况下
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // 没有token
    if (bai.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 路由守卫完成工作的时候关闭进度条
})
router.afterEach(() => {
  NProgress.done() // 路由守卫完成工作的时候关闭进度条
})
