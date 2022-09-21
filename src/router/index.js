import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/registerProduct',
      name: 'RegisterProduct',
      component: () => import('../components/RegisterProduct.vue')
    },
    {
      path: '/editProduct',
      name: 'EditProduct',
      component: () => import('../components/EditCustomer.vue')
    }
  ]
})

export default router