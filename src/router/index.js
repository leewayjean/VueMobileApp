import Vue from 'vue'
import VueRouter from 'vue-router'
const Cities = () => import("../views/cities/Cities")
const City = () => import("../views/city/City")
const Home = () => import("../views/home/Home")
const Search = () => import("../views/search/Search")
const Order = () => import("../views/order/Order")
const Me = () => import("../views/me/Me")
const Login = () => import("../views/login/Login")

Vue.use(VueRouter)

const routes = [
  {
    path: '/cities',
    name: 'cities',
    component: Cities
  },
  {
    path: '/city/:id',
    name: 'city',
    component: City
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
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
