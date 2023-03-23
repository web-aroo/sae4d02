import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { usePositionStore } from '@/stores/position';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

if (!('geolocation' in navigator)) {
  console.warn('Geolocation is not available');
} else {
  const store = usePositionStore();
  navigator.geolocation.watchPosition(
    (newPosition) => {
      store.position.value = newPosition;
      console.log(store);
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}
