<template>

  <header class="flex flex-row-reverse items-center justify-between">
    <LanguageSwitcher></LanguageSwitcher>
    <BackButton v-if="backButton" @click="Sound.button()"></BackButton>
  </header>

</template>

<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import BackButton from "@/components/BackButton.vue";
import Sound from "@/utils/sound";

defineProps({
  backButton: Boolean
});

</script>