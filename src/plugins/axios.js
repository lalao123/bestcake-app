import Vue from 'vue';
import axios from 'axios';

axios.setupInterceptors = (vm)=>{
// console.log('setupInterceptors')

axios.interceptors.request.use(function(config){
 
    // console.log('拦截器 go',vm.$data.bLoading)
    vm.$data.bLoading=true;
    return config;
},function(error){
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function(response){
    vm.$data.bLoading=false;
    // console.log('拦截器 back',vm.$data.bLoading)
    return response;
  },function(error){
     return Promise.reject(error)
  });

  // axios.interceptors.response.use(function(response){
    
  //   vm.$data.bLoading=false;
  //   console.log('拦截器 back',vm.$data.bLoading)
  //   return response;
  // },function(error){
  //  return Promise.reject(error);
  // })

}



Vue.prototype.$axios=axios;
window.axios = axios;
export default axios;