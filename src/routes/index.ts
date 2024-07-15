import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from "../layouts/Default.vue";
import IndexView from "../views/movies/IndexView.vue";

const routes: Array<RouteRecordRaw> = [
    // {path: '/login', name: 'LOGIN', component: LoginView},
    {
        path: '/',
        redirect: '/',
        component: Default,
        children: [
            {path: '/', name: 'HOME', component: HomeView},
            {path: '/movies', name: 'MOVIES', component: IndexView},
        ]
    },
    // { path: "/:pathMatch(.*)*", name: "NOT_FOUND", component: PageNotFoundVew },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
})

export default router
