import { createApp } from 'vue';
import { createPinia } from 'pinia';
import I18NextVue from 'i18next-vue';
import i18next from 'i18next';
import './i18n';

import App from './App.vue';
import router from './router';

import { usePositionStore } from '@/stores/position';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(I18NextVue, { i18next });

app.mount('#app');

if (!('geolocation' in navigator)) {
  console.warn('Geolocation is not available');
} else {
  const store = usePositionStore();
  navigator.geolocation.watchPosition(
    (newPosition) => {
      store.position.value = newPosition;
    },
    null,
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}
