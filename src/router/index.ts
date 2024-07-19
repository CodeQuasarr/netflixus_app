import { createRouter, createWebHistory } from 'vue-router'
import DefaultTemplate from "@/layouts/DefaultTemplate.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultTemplate
    },
  ]
})

export default router
