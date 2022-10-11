import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Principal/HomePage.vue'

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
      component: () => import('../components/Form/RegisterProduct.vue')
    },
    {
      path: '/editProduct',
      name: 'EditProduct',
      component: () => import('../components/Edit/EditCustomer.vue')
    }
  ]
})

export default router