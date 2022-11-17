import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode:'history',
  routes
})



export default router
