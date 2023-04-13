<script setup>
import GabaritGame from "@/components/GabaritGame.vue";
import {ref} from "vue";
import {useTranslation} from "i18next-vue";
import Sound from "@/utils/sound";
import Game from "@/utils/game";
import {useRouter} from "vue-router";

const {t} = useTranslation();

const cards = ref([]);
let interactedCards = [];

const router = useRouter();

reset();

function reset(){
  cards.value = [];
  interactedCards = [];
  for(let i=0; i<6; i++){
    for(let j=0; j<2; j++){
      cards.value.push({
        index: i,
        interacted: false,
        matched: false
      });
    }
  }
  shuffle(cards.value);
}

// Mélange de Fisher-Yates
// https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates
function shuffle(array){
  for(let i=array.length-1; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function update(card){

  if(interactedCards.length >= 2 || card.interacted || card.matched) return;

  Sound.pickCard();

  card.interacted = true;
  interactedCards.push(card);

  // Si deux cartes sont retournées
  if(interactedCards.length >= 2){

    // Si les deux cartes sont les mêmes
    if(interactedCards[0].index === interactedCards[1].index){
      interactedCards[0].matched = true;
      interactedCards[0].interacted = false;
      interactedCards[1].matched = true;
      interactedCards[1].interacted = false;
      interactedCards = [];

      setTimeout(() => {
        Sound.success();
      },200)

      if(cards.value.every(card => card.matched === true)){
        setTimeout(() => {
          Game.winFxAndRedirect("/dialogues/game1-end", router);
        },750)
      }

    } else {
      setTimeout(() => {
        interactedCards[0].interacted = false;
        interactedCards[1].interacted = false;
        interactedCards = [];
        Sound.dropCard();
      },750);
    }

  }

}

</script>


<template>

  <GabaritGame
    @reset="reset()"
    :help='t("games.memory.help")'
    step="1"
  >

    <div class="Cards">

      <div class="Card" v-for="card in cards" :key="card" @click="update(card)" :class="{flipped: card.interacted || card.matched}">

        <div class="Card-front">
          <img :src='"/img/games/memory/"+card.index+".jpg"'>
        </div>

        <div class="Card-back">
          <img src="/img/games/memory/back.jpg">
        </div>

      </div>

    </div>

  </GabaritGame>

</template>

<style scoped lang="scss">

  .Cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  .Card{
    width: 6em;
    height: 10em;
    border-radius: 0.25em;
    position: relative;

    &-front,
    &-back{
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.5s;
      backface-visibility: hidden;
      border: solid 2px #97714A;
      border-radius: .5em;
      overflow: hidden;

      > img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

    }

    &-front{
      transform: rotateY(180deg);
    }

    &-back{
      background: #413332;
    }

    &.flipped{

      & .Card-front{
        transform: rotateY(0deg);
      }

      & .Card-back{
        transform: rotateY(180deg);
      }

    }

  }

</style>