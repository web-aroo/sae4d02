<template>
  <div class="flex flex-col justify-between h-full">
    <Header back-button></Header>
    <div class="grid place-items-center gap-3">
      <div class="border-2 border-light-brown">
        <slot></slot>
      </div>
      <div class="flex gap-3">
        <button class="py-4 px-8 bg-light-grey">
          {{t("gabaritGame.help")}}
        </button>
        <button class="py-4 px-8 bg-prune">
          {{t("gabaritGame.restart")}}
        </button>
      </div>
    </div>
    <div class="text-right text-2xl">
      Step : {{step}}
    </div>
  </div>

</template>

<script setup>
import Header from "@/components/Header.vue";
import {useTranslation} from "i18next-vue";

const {t} = useTranslation();

defineProps({
  step: Number
});
</script>