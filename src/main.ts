import { createApp } from 'vue'
import './assets/css/main.css'
import 'flowbite';
import App from './App.vue'
import router from "./routes";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
