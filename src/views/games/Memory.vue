<script setup>
import GabaritGame from "@/components/GabaritGame.vue";
import {ref} from "vue";

const cards = ref([]);
for(let i=0; i<6; i++){
  for(let j=0; j<2; j++){
    cards.value.push({
      index: i,
      flipped: false
    });
  }
}

shuffle(cards.value);

// Mélange de Fisher-Yates
// https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates
function shuffle(array){
  for(let i=array.length-1; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

</script>


<template>

  <GabaritGame>

    <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 p-4">

      <div class="w-[4em] h-[7em] bg-be cursor-pointer bg-prune border-light-brown border-2" v-for="card in cards" :key="card" @click="card.flipped = !card.flipped">
        <img :src='"/img/games/memory/"+card.index+".jpg"' class="object-cover w-full h-full" v-if="card.flipped">
      </div>

    </div>

  </GabaritGame>

</template>

<style scoped lang="scss">

  .Card{
    width: 2em;
    height: 4em;
    background-color: #413332;
  }

</style>