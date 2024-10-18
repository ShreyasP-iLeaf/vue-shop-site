import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList,
    },
    {
      path: '/details',
      name: 'product',
      component: () => import('../views/Product.vue'),
    },
  ],
})

export default router
