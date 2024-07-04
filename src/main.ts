import { createApp } from 'vue'
import './main.css'
import 'flowbite';
import App from './App.vue'
import router from "./routes";
import {createPinia} from "pinia";

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
