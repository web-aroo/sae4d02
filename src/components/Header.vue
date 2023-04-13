<template>

  <header class="flex flex-row-reverse items-center justify-between">
    <LanguageSwitcher></LanguageSwitcher>
    <BackButton v-if="backButton" @click="back()"></BackButton>
  </header>

</template>

<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import BackButton from "@/components/BackButton.vue";
import Sound from "@/utils/sound";
import {useRouter} from "vue-router";

const router = useRouter();

defineProps({
  backButton: Boolean
});

function back(){
    Sound.button();
    router.push("/games")
}

</script>