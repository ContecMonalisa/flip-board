import '@/assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import gsap from 'gsap';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(gsap);
app.use(router);

app.mount('#app');
