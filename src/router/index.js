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
    },
    {
      path: '/comingsoon',
      name: 'Coming Soon',
      component: () => import('../components/Error/ComingSoon.vue')
    },
    {
      path: '/forgotpassword',
      name: 'Forgot Password',
      component: () => import('../components/Form/ForgotPassword.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Form/Login.vue')
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('../components/Error/Faq.vue')
    },
    {
      path: '/error',
      name: 'Error404',
      component: () => import('../components/Error/Erro404.vue')
    }
  ]
})

export default router