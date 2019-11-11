import Vue from 'vue'
import VueRouter from 'vue-router'
const Cities = () => import("../views/cities/Cities")
const City = () => import("../views/city/City")
const Home = () => import("../views/home/Home")
const Search = () => import("../views/search/Search")
const Order = () => import("../views/order/Order")
const Me = () => import("../views/me/Me")
const Login = () => import("../views/login/Login")
const Forget = () => import("../views/login/children/Forget")
const Shop = () => import("../views/shop/Shop")
const Food = () => import("../views/shop/children/Food")
const Comment = () => import("../views/shop/children/Comment")
const ShopInfo = () => import("../views/shop/children/ShopInfo")

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  // 城市列表
  {
    path: '/cities',
    name: 'cities',
    component: Cities
  },
  // 地址
  {
    path: '/city/:id',
    name: 'city',
    component: City
  },
  // 登录
  {
    path: "/login",
    name: "login",
    component: Login,

  },
  // 忘记密码
  {
    path: "/forget",
    name: "forget",
    component: Forget
  },
// 首页
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 店铺
  {
    path:'/shop',
    name:"shop",
    component:Shop,
    redirect:{name:"food"},
    children:[
      {
        path:"/shop/food",
        name:"food",
        component:Food
      },
      {
        path:"/shop/comment",
        name:"comment",
        component:Comment
      },
    ]
  },
  {
    path:"/shopinfo",
    name:"shop_info",
    component:ShopInfo
  },
  // 搜索店铺
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  // 订单中心
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  // 我的
  {
    path: '/me',
    name: 'me',
    component: Me
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
