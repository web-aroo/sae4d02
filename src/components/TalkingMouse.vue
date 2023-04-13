<template>
  <Dimmer @click="next">
    <div class="relative">
      <img :src="'/img/mouses/' + character + '.png'" alt="" />
      <div
        class="absolute bg-gray-50 p-4 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 min-w-[24em] min-h-[10rem] rounded text-black"
      >
        {{ typewritedMsg }}
        <div
          class="absolute left-4 top-0 -translate-y-1/2 px-4 py-1 bg-light-brown text-white font-bold rounded"
        >
          {{ names[character] }}
        </div>

        <div class="Click w-8 absolute right-2 bottom-2">
            <img src="/img/click.svg">
        </div>
      </div>
    </div>
  </Dimmer>
</template>

<script setup>
import Dimmer from '@/components/Dimmer.vue';
import { ref } from 'vue';

const props = defineProps({
  character: String,
  message: String
});

let closeable = false;

const emit = defineEmits(['close']);

const names = {
  emile: 'Émile',
  helene: 'Hélène',
  joseph: 'Joseph',
  mulin: 'Mulin'
};

let arrayMsg = props.message.split(' ');
const typewritedMsg = ref('');

let interval = setInterval(() => {
  typewritedMsg.value += arrayMsg.shift() + ' ';

  let nAudio = Math.ceil(Math.random() * 5);
  new Audio('/sound/mouses/' + props.character + '/' + nAudio + '.mp3').play();

  if (!arrayMsg.length) {
    closeable = true;
    clearInterval(interval);
  }
}, 80);

function next() {
  if (closeable) emit('close');
  closeable = true;
  clearInterval(interval);
  typewritedMsg.value = props.message;
}
</script>

<style scoped lang="scss">

  .Click{
    animation: bounce infinite ease-in-out 2s;
    transform: rotate(-30deg);
  }
  
  @keyframes bounce {
    50%{
      transform: translateY(-0.5em) rotate(-30deg);
    }
  }
</style>