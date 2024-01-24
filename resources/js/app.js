import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue';
import store from "./store";

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})

app.use(store);
app.use(PrimeVue);
app.use(router);
app.mount("#app")