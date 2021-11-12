import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import { tokenState } from '../services/token';
import {  toRefs } from 'vue'
import { userState } from '../services/user';

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
    component: () => import('../views/Welcome.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/ask-for-help',
    name: 'AskHelp',
    component: () => import('../views/AskHelp.vue')
  },
  {
    path: '/helper-details',
    name: 'HelperDetails',
    component: () => import('../views/HelperDetails.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/create-task',
    name: 'CreateTask',
    component: () => import('../views/CreateTask.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/my-tasks',
    name: 'MyTasks',
    component: () => import('../views/MyTasks.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/proposals',
    name: 'Proposals',
    component: () => import('../views/Proposals.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/offer-help',
    name: 'OfferHelp',
    component: () => import('../views/OfferHelp.vue'),
    meta:{requiresAuth:true, requiresHelper:true}
  },
  {
    path: '/become-helper',
    name: 'BecomeHelper',
    component: () => import('../views/BecomeHelper1.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/become-helper-final',
    name: 'BecomeHelper2',
    component: () => import('../views/BecomeHelper2.vue')
  },
  {
    path: '/task-details',
    name: 'TaskDetails',
    component: () => import('../views/TaskDetails.vue'),
    meta:{requiresAuth:true, requiresHelper:true}
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/Feedback.vue'),
    meta:{requiresAuth:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// protects routes requiring authentication
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    let { token } = toRefs(tokenState.state);
    if(token.value == '') {
      console.log('unauthenticated')
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})

// protects routes requiring being a helper
router.beforeEach((to, from, next) => {
  if(to.meta.requiresHelper) {
    let { user } = toRefs(userState.state);
    if(!user.value.is_helper) {
      console.log('not a helper')
      next('/become-helper');
    } else {
      next();
    }
  } else {
    next();
  }
})

// protect login and signup routes when authenticated
// router.beforeEach((to, from, next) => {
//   if(to.path = '/login') {
//     let { token } = toRefs(tokenState.state);
//     let { loggedIn } = toRefs(userState.state);
//     if(token.value == '' || !loggedIn.value) {
//       next();
//     } else {
//       next('/');
//     }
//   } else {
//     next();
//   }
// })

export default router
