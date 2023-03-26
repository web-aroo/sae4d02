<template>

  <Dimmer @click="next">
    <div class="relative">
      <img :src='"/img/mouses/"+character+".png"' alt="">
      <div class="absolute bg-gray-50 p-4 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 min-w-[32em] rounded text-black">
        {{typewritedMsg}}
        <div class="absolute left-4 top-0 -translate-y-1/2 px-4 py-1 bg-light-brown text-white font-bold rounded">
          {{names[character]}}
        </div>
      </div>
    </div>
  </Dimmer>

</template>

<script setup>

import Dimmer from "@/components/Dimmer.vue";
import {ref} from "vue";

const props = defineProps({
  character: String,
  message: String
});

let closeable = false;

const emit = defineEmits(["close"])

const names = {
  "emile": "Émile",
  "helene": "Hélène",
  "joseph": "Joseph",
  "mulin": "Mulin",
};

let arrayMsg = props.message.split(" ");
const typewritedMsg = ref("");

let interval = setInterval(() => {
  typewritedMsg.value += arrayMsg.shift() + " ";
  if(!arrayMsg.length){
    closeable = true;
    clearInterval(interval);
  }
},100);

function next(){
  if(closeable) emit("close");
  closeable = true;
  clearInterval(interval);
  typewritedMsg.value = props.message;
}
</script>