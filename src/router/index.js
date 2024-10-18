import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'product',
      component: () => import('../views/Product.vue'),
    },
  ],
})

export default router
