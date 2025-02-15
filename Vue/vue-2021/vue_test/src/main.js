// 引入 Vue
import Vue from 'vue'
// 引入 App 组件
import App from './App.vue'
import router from './router'

// 关闭 Vue 生产提示
Vue.config.productionTip = false
const vm = new Vue({
  render: (h) => h(App),
  router,
})
vm.$mount('#app')

console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
