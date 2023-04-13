import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Lock from '@/views/Lock.vue';
import MapView from '@/views/MapView.vue';
import TalkingMousesView from '@/views/TalkingMousesView.vue';
import Memory from '@/views/games/Memory.vue';
import SlidingPuzzle from '@/views/games/SlidingPuzzle.vue';
import PathMaking from '@/views/games/PathMaking.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lock',
      name: 'lock',
      component: Lock
    },
    {
      path: '/dialogues/:name',
      name: 'dialogue',
      component: TalkingMousesView,
      props: true
    },
    {
      path: '/games',
      name: 'choose-game',
      component: MapView
    },
    {
      path: '/games/1',
      name: 'sliding-puzzle',
      component: SlidingPuzzle
    },
    {
      path: '/games/2',
      name: 'memory',
      component: Memory
    },
    {
      path: '/games/3',
      name: 'pathmaking',
      component: PathMaking
    }
  ]
});

export default router;
