import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import topNav from '../components/topNav'
import updateProfile from '../views/updateProfile'
import card from '../components/card'
import carousel from '../components/carousel'
import login from '../views/login'
import signup from '../views/signup'
import cartt from '../components/cartt'


Vue.use(VueRouter)

const routes = [
 
 
  {
    path: '/topNav',
    name: 'topNav',
    component: topNav
  },
  
  {
    path: '/updateProfile',
    name: 'updateProfile',
    component: updateProfile
  }, {
    path: '/card',
    name: 'card',
    component: card
  }, 
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }, 
   {
    path: '/carousel',
    name: 'carousel',
    component: carousel
  },  {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    name: 'signup',
    component: signup
  },{
    path: '/cartt',
    name: 'cartt',
    component: cartt
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
