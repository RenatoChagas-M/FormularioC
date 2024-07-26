import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Formulario',
      component: () => import('../views/FSecond.vue')
    },
    {
      path: '/FSecond',
      name: 'Second Form',
      component: () => import('../views/FSecond.vue')
    }
  ]
})

export default router
