// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import './filters'

Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.axios = axios

// 异步请求前在header里加入token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorizatior = localStorage.getItem('Authorization')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })
// 异步请求后，判断token是否过期
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization')
          this.$router.push('/')
      }
    }
  }
)
// 异步请求前判断请求的连接是否需要token
// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next()
//   } else {
//     let token = localStorage.getItem('Authorization')
//     console.log('我是浏览器本地缓存的token: ' + token)
//     if (token === 'null' || token === '') {
//       next('/')
//     } else {
//       next()
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
