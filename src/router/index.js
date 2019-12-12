import Vue from 'vue'
import VueRouter from 'vue-router'
const cities = () => import("../views/cities/cities")
const city = () => import("../views/city/city")
const home = () => import("../views/home/home")
const search = () => import("../views/search/search")
const order = () => import("../views/order/order")
const profile = () => import("../views/profile/profile")
const userInfo = () => import("../views/profile/user/userInfo")
const login = () => import("../views/login/login")
const forget = () => import("../views/login/children/forget")
const shop = () => import("../views/shop/shop")
const food = () => import("../views/shop/children/food")
const comment = () => import("../views/shop/children/comment")
const shopInfo = () => import("../views/shop/children/shopInfo")
const confirmOrder = () => import("../views/confirm_order/confirmOrder")

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/cities"
  },
  // 城市列表
  {
    path: '/cities',
    name: 'cities',
    component: cities
  },
  // 地址
  {
    path: '/city/:id',
    name: 'city',
    component: city
  },
  // 登录
  {
    path: "/login",
    name: "login",
    component: login,

  },
  // 忘记密码
  {
    path: "/forget",
    name: "forget",
    component: forget
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: home
  },
  // 店铺
  {
    path: '/shop',
    name: "shop",
    component: shop,
    redirect: { name: "food" },
    children: [
      {
        path: "/shop/food",
        name: "food",
        component: food
      },
      {
        path: "/shop/comment",
        name: "comment",
        component: comment
      },
    ]
  },
  {
    path:'/confirmOrder',
    name:"confirmOrder",
    component:confirmOrder
  },
  {
    path: "/shopinfo",
    name: "shop_info",
    component: shopInfo
  },
  // 搜索店铺
  {
    path: '/search',
    name: 'search',
    component: search
  },
  // 订单中心
  {
    path: '/order',
    name: 'order',
    component: order
  },
  // 我的
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path:'/userInfo',
    name:"userInfo",
    component:userInfo
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
