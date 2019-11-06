import Vue from 'vue'
import VueRouter from 'vue-router'
const Cities = () => import("../views/cities/Cities")
const City = () => import("../views/city/City")
const Home = () => import("../views/home/Home")

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
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
