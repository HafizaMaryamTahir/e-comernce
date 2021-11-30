import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import register from '../views/register'
import topNav from '../components/topNav'
import updateProfile from '../views/updateProfile'
import Catogary from '../views/Catogary.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
 
  {
    path: '/',
    name: 'topNav',
    component: topNav
  },
  {
    path: '/Catogary',
    name: 'Catogary',
    component: Catogary
  },
  {
    path: '/updateProfile',
    name: 'updateProfile',
    component: updateProfile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
