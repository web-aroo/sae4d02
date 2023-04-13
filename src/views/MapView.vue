<script setup>
import Header from '@/components/Header.vue';
import { usePositionStore } from '@/stores/position';
import { useStepsStore } from '@/stores/steps';
import { useTranslation } from 'i18next-vue';
import { Map as MapLibre, Popup } from 'maplibre-gl';
import computeLength from '@turf/length';
import { lineString } from '@turf/helpers';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const { t } = useTranslation();
const router = useRouter();
const map = ref(null);
const positionStore = usePositionStore();
const stepsStore = useStepsStore();

/**
 * @type {MapLibre}
 */
let mapInstance;
let popupInstance;
const unsubscribe = [];

const showPopup = (coordinates, href, index) => {
  if (popupInstance) {
    popupInstance.remove();
  }
  const el = document.createElement('div');
  el.id = 'map-popup';
  el.innerHTML = `
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-serif">${t('map.games.' + index)}</h3>
        <p class="text-sm">${t('map.descriptions.' + index)}</p>
        <button class="bg-slate-500 rounded-sm">${t('map.openGame')}</button>
      </div>
    `;
  el.addEventListener('click', () => {
    router.push({
      path: href
    });
  });
  popupInstance = new Popup()
    .setLngLat(coordinates)
    .setOffset(15)
    .setDOMContent(el)
    .addTo(mapInstance);
};

onMounted(() => {
  mapInstance = new MapLibre({
    container: map.value,
    style: 'https://france.leonekmi.fr/styles/france/style.json',
    center: [7.338449921777876, 47.74783461773022],
    zoom: 14
  });

  window.mapInstance = mapInstance;

  mapInstance.once('load', () => {
    mapInstance.addSource('steps-point', {
      type: 'geojson',
      data: stepsStore.activePoints
    });

    mapInstance.addSource('steps-line', {
      type: 'geojson',
      data: stepsStore.activeLines
    });

    mapInstance.addLayer({
      id: 'steps-point',
      source: 'steps-point',
      type: 'circle',
      paint: {
        'circle-radius': 15,
        'circle-color': '#754817'
      }
    });

    mapInstance.addLayer({
      id: 'steps-line',
      source: 'steps-line',
      type: 'line',
      paint: {
        'line-width': 5,
        'line-color': '#754817'
      }
    });

    mapInstance.addSource('point', {
      type: 'geojson',
      data: {
        type: 'Point',
        coordinates: [7.338449921777876, 47.74783461773022]
      }
    });

    mapInstance.addLayer({
      id: 'point',
      source: 'point',
      type: 'circle',
      paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
      }
    });

    unsubscribe.push(
      positionStore.$subscribe((_mutation, state) => {
        if (state.position.value) {
          const coordinates = [
            state.position.value.coords.longitude,
            state.position.value.coords.latitude
          ];
          mapInstance.getSource('point').setData({
            type: 'Point',
            coordinates
          });
          const length = computeLength(lineString([coordinates, stepsStore.currentStep.point]));
          if (length < 0.15) {
            showPopup(
              stepsStore.currentStep.point,
              stepsStore.currentStep.href,
              stepsStore.currentStepIndex
            );
          }
        }
      }),
      stepsStore.$subscribe(() => {
        mapInstance.getSource('steps-point').setData(stepsStore.activePoints);
        mapInstance.getSource('steps-line').setData(stepsStore.activeLines);
      })
    );
  });

  mapInstance.on('click', 'steps-point', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const href = e.features[0].properties.href;
    const index = e.features[0].properties.index;
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    showPopup(coordinates, href, index);
  });
});

onBeforeUnmount(() => {
  unsubscribe.forEach((fn) => fn());
  mapInstance.remove();
});
</script>

<template>
  <Header />
  <div class="flex flex-col gap-4 h-5/6">
    <h2 class="text-xl text-center font-bold font-serif">{{ t('map.title') }}</h2>
    <div ref="map" class="h-full"></div>
  </div>
</template>
