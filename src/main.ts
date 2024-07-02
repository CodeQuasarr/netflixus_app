import { createApp } from 'vue'
import './main.css'
import 'flowbite';
import App from './App.vue'
import router from "./routes";

createApp(App)
    .use(router)
    .mount('#app')
