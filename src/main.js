import Vue from 'vue'
import App from './App.vue'
// 引入mint-ui
import { Swipe, SwipeItem,Switch} from 'mint-ui';

import router from './router'
import store from './store'
import axios from "axios"


// 使用插件

Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
Vue.component("mt-switch",Switch)


// axios 
// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   Indicator.open({
//     text: '加载中...',
//     spinnerType: 'double-bounce'
//   });
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   Indicator.close();
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
