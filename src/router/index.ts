import { createRouter, createWebHistory } from 'vue-router';
import TheHomeVue from '@/views/TheHome.vue';
import MyMcVue from '@/views/MyMc.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHomeVue
    },
    {
      path: '/mymc',
      name: 'mymc',
      component: MyMcVue
    }
  ]
})

export default router
