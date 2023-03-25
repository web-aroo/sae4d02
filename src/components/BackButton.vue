<template>
  <button class="grid place-items-center text-2xl">
    <img src="/img/icons/key.svg" alt="back" class="w-24 aspect-square">
    <div class="-m-6">{{t("backButton")}}</div>
  </button>
</template>

<script setup>
import {useTranslation} from "i18next-vue";
const {t} = useTranslation();
</script>