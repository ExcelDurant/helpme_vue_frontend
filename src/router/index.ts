import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/signup',
    name:'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/ask-for-help',
    name: 'AskHelp',
    component: () => import('../views/AskHelp.vue')
  },
  {
    path: '/create-task',
    name: 'CreateTask',
    component: () => import('../views/CreateTask.vue')
  },
  {
    path: '/my-tasks',
    name: 'MyTasks',
    component: () => import('../views/MyTasks.vue')
  },
  {
    path: '/proposals',
    name: 'Proposals',
    component: () => import('../views/Proposals.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
