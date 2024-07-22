import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Default from "../layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        redirect: '/',
        component: Default,
        children: [
            { path: '/', name: 'HOME', component: HomeView },
        ]
    },
    //{ path: "/:pathMatch(.*)*", name: "Error404", component: Error404 },
];

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
