<template>

  <Dimmer @click.self="$emit('close')">
    <div class="relative bg-dark-brown shadow-custom border border-light-brown border-2 p-8 m-7 max-w-screen-md">
      <button class="absolute top-0 right-0 mt-2 mr-2" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#97714A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <h2 class="text-lg font-bold mb-4 text-center">{{t("gabaritGame.help")}}</h2>
      <p class="text-sm text-justify">
        <slot></slot>
      </p>
    </div>
  </Dimmer>

</template>

<script setup>
import Dimmer from "@/components/Dimmer.vue";
import {useTranslation} from "i18next-vue";

const {t} = useTranslation();

</script>
