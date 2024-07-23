import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from "@/layouts/Default.vue";
import IndexView from "@/views/movies/IndexView.vue";
import MovieShowView from "@/views/movies/MovieShowView.vue";
import MovieView from "@/views/movies/MovieView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/',
      component: Default,
        children: [
          {path: '/', name: 'HOME', component: HomeView},
          {path: '/movie/:id', name: 'MOVIE', component: MovieShowView},
          {path: '/movies', name: 'MOVIES', component: MovieView},
          {path: '/movies-categories', name: 'MOVIES_CATEGORIES', component: IndexView}
        ]
    }
  ]
})

export default router
