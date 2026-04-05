import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../Connexion.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion,
    },
  ],
})

export default router
