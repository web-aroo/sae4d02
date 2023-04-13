<template>
  <Header></Header>

  <div class="h-full grid place-items-center">

      <h2 class="text-lg font-bold mb-4 text-center text-4xl">{{t("lock.title")}}</h2>

      <div class="flex gap-4 bg-dark-grey p-6" v-if="locked">
          <div v-for="(digit, index) in digits" :key="digit" class="grid justify-center text-center gap-4">
              <button class="bg-light-grey text-3xl drop-shadow-md" @click="plus(index)">
                  +
              </button>
              <div class="text-6xl bg-light-grey px-4 py-8 bg-gradient-to-b from-gray-900 via-light-grey to-gray-900">
                  {{ digit }}
              </div>
              <button class="bg-light-grey text-3xl drop-shadow-md" @click="minus(index)">
                  -
              </button>
          </div>
      </div>
      <div v-else>
          <video src="/video/chest.mp4" autoplay>

          </video>
      </div>


      <button class="py-4 px-8 bg-light-brown" @click="verify()">
          {{ t("lock.button") }}
      </button>

  </div>

</template>

<script setup>
import Header from "@/components/Header.vue";
import {ref} from "vue";
import {useTranslation} from "i18next-vue";
import {useRouter} from "vue-router";
import Game from "@/utils/game";

const {t} = useTranslation();

const digits = ref([0,0,0,0]);

const locked = ref(true);

const router = useRouter();

function plus(index){
    digits.value[index] = digits.value[index]+1;
    if(digits.value[index] > 9) digits.value[index] = 0;
}

function minus(index){
    digits.value[index] = digits.value[index]-1;
    if(digits.value[index] < 0) digits.value[index] = 9;
}

function verify(){

    if(!locked.value) return;

    const realCode = [1,4,3,8];

    if(digits.value.every((digit,i) => digit === realCode[i])){
        locked.value = false;
        Game.winFxAndRedirect("/dialogues/end", router);
    }
}

</script>