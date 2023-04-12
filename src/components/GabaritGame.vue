<template>

  <div class="flex flex-col justify-between h-full">
    <Header back-button></Header>
    <div class="grid place-items-center gap-3">
      <div class="p-4">
        <slot></slot>
      </div>
      <div class="flex gap-3">
        <button class="py-4 px-8 bg-light-grey" @click="showHelp = true; Sound.button()">
          {{t("gabaritGame.help")}}
        </button>
        <button class="py-4 px-8 bg-prune" @click="emit('reset'); Sound.button()">
          {{t("gabaritGame.restart")}}
        </button>
      </div>
    </div>
    <div class="text-right text-2xl">
      {{t("gabaritGame.step")}} {{step}}
    </div>
  </div>

  <HelpModal @close="showHelp = false" v-if="showHelp">
    {{help}}
  </HelpModal>

</template>

<script setup>
import Header from "@/components/Header.vue";
import {useTranslation} from "i18next-vue";
import {ref} from "vue";
import HelpModal from "@/components/HelpModal.vue";
import Sound from "@/utils/sound";

const {t} = useTranslation();

defineProps({
  step: Number,
  help: String
});

const emit = defineEmits([
    "reset"
]);

const showHelp = ref(false);

</script>