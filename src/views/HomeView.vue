<template>
  <div class="flex flex-col justify-between h-full">
    <Header></Header>
    <img
      alt="Mulhouse mysteries logo"
      class="Main-logo place-self-center"
      src="@/assets/logo.png"
      width="259"
      height="98"
    />
    <RouterLink
      to="/dialogues/start"
      class="bg-light-brown text-white p-3 text-center shadow-custom place-self-center"
      @click="Sound.button()"
    >
      {{ t('home') }}
    </RouterLink>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import { useTranslation } from 'i18next-vue';
import Sound from '@/utils/sound';
const { t } = useTranslation();
</script>
