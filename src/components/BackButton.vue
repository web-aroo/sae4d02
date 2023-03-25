<template>
  <button class="grid place-items-center text-1xl">
    <img src="/img/icons/key.svg" alt="back" class="w-16 aspect-square">
    <div class="-m-6">{{t("backButton")}}</div>
  </button>
</template>

<script setup>
import {useTranslation} from "i18next-vue";
const {t} = useTranslation();
</script>