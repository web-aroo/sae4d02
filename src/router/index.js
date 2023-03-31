import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Memory from "@/views/games/Memory.vue";
import SlidingPuzzle from "@/views/games/SlidingPuzzle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games/1',
      name: 'memory',
      component: Memory
    },
    {
      path: '/games/2',
      name: 'sliding-puzzle',
      component: SlidingPuzzle
    }
  ]
});

export default router;
