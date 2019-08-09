//导入vue和app
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './assets/js/font';
import './assets/css/base.css'
// console.log(font)
//定义路由，引入路由
import router from './plugins/router'
// import axios from './plugins/axios';
import axios from  './plugins/axios';
// Vue.prototype.$axios = axios;

Vue.prototype.baseUrl = 'http://localhost:3000'

import date from './filters/date';
Vue.filter('date',date)

//创建和挂载根实例，通过配置参数注入路由
let vm = new Vue({
  data:{
    bNav:true,
    bFoot:true,
    bLoading:false
  },

  render: h => h(App),
  router
}).$mount('#app')

axios.setupInterceptors(vm);