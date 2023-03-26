<template>

  <header class="flex flex-row-reverse items-center justify-between p-4">
    <LanguageSwitcher></LanguageSwitcher>
    <BackButton v-if="backButton"></BackButton>
  </header>

</template>

<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import BackButton from "@/components/BackButton.vue";

defineProps({
  backButton: Boolean
});

</script>