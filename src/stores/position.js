import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePositionStore = defineStore('position', () => {
  /**
   * @type {import('vue').Ref<GeolocationPosition>}
   */
  const position = ref({});

  return { position };
});
