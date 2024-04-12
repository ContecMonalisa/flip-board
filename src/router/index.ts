import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'showRoom',
      component: ()=> import(/* webpackChunkName: "dashboard" */ '@/views/ShowRoom.vue'),
      props: true,
    },
  ],
});

export default router;
