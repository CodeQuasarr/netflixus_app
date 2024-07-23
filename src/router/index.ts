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
          {path: '/movie/:id', name: 'MOVIE', component: HomeView},
          {path: '/movies', name: 'MOVIES', component: HomeView},
          {path: '/movies-categories', name: 'MOVIES_CATEGORIES', component: HomeView}
        ]
    }
  ]
})

export default router
