import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from "@/layouts/Default.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/',
      component: Default,
        children: [
          {path: '/', name: 'HOME', component: HomeView},
        ]
    }
  ]
})

export default router
