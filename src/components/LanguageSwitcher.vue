<script setup>
import france from '../assets/france.png';
import uk from '../assets/uk.png';
import { useTranslation } from 'i18next-vue';
import Sound from "@/utils/sound";

const { t, i18next } = useTranslation();

console.log(i18next.language, i18next);
</script>

<template>
  <button
    class="rounded-full h-8 w-16 border-2 border-light-brown overflow-hidden relative"
    @click="i18next.changeLanguage(i18next.language === 'fr' ? 'en' : 'fr'); Sound.button()"
  >
    <div
      :class="{
        'absolute h-5 aspect-square bg-light-brown border border-black rounded-full top-1/2 -translate-y-1/2 left-1 transition-all z-10': true,
        'left-1': i18next.language === 'fr',
        'left-9': i18next.language === 'en'
      }"
    ></div>
    <img
      :src="france"
      :class="{
        'absolute h-full w-full inset-0 object-cover transition-transform': true,
        'translate-x-full': i18next.language !== 'fr'
      }"
      :title="t('languages.fr')"
    />
    <img
      :src="uk"
      :class="{
        'absolute h-full w-full inset-0 object-cover transition-transform': true,
        '-translate-x-full': i18next.language !== 'en'
      }"
      :title="t('languages.en')"
    />
  </button>
</template>
