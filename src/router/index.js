import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Formulario',
      component: () => import('../views/FFirst.vue')
    },
    {
      path: '/FSecond',
      name: 'Second Form',
      component: () => import('../views/FSecond.vue')
    },
    {
      path: '/FProfile',  
      name: 'User Information',
      component: () => import('../views/FProfile.vue')
    }
  ]
})

export default router
