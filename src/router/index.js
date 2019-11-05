import Vue from 'vue'
import VueRouter from 'vue-router'
const Cities = () => import("../views/cities/Cities")
const City = () => import("../views/city/City")

Vue.use(VueRouter)

const routes = [
  {
    path: '/cities',
    name: 'cities',
    component: Cities
  },
  {
    path: '/city',
    name: 'city',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
