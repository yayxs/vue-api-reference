import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const HomeView = {
  template: `<div>
  home
  </div>`
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sfc',
      name: 'sfc',
      component: () => import('../views/SFCView.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/ts',
      name: 'ts',
      component: () => import('../views/TSView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RefView.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../views/APIView.vue')
    }
  ]
})

export default router
