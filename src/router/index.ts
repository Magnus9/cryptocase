import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Coins from '../views/Coins.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:      '/',
    name:      'Home',
    component: Home
  },
  {
    path:      '/coins',
    name:      'Coins',
    component: Coins
  },
]

const router = new VueRouter({
  routes
})

export default router
