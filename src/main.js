import Vue from 'vue'
import App from './App.vue'
// 引入mint-ui
import { Switch,Indicator  } from 'mint-ui';

import { AddressList,Swipe, SwipeItem} from 'vant';


Vue.use(Swipe).use(SwipeItem).use(AddressList);

// 全局注册


import router from './router'
import store from './store'
import axios from "axios"


import Toast from "../src/components/common/toast/index"


Vue.use(Toast)


// 注册全局组件

Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
Vue.component("mt-switch",Switch)


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Indicator.open({
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  setTimeout(() => {
    Indicator.close();
  }, 300);
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 将axios挂载到vue原型
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
