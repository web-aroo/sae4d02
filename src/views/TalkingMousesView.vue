<script setup>
import { appDialogues } from '@/assets/dialogues';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTranslation } from 'i18next-vue';
import TalkingMouse from '@/components/TalkingMouse.vue';
const props = defineProps(['name']);

const router = useRouter();
const { i18next } = useTranslation();

const dialogueObject = computed(() => appDialogues.get(props.name));
const activeDialogueIndex = ref(0);
const activeLine = computed(() => dialogueObject.value.dialogues[activeDialogueIndex.value]);

const next = () => {
  if (activeDialogueIndex.value < dialogueObject.value.dialogues.length - 1) {
    activeDialogueIndex.value++;
  } else {
    router.push(dialogueObject.value.nextEndpoint);
  }
};
</script>

<template>
  <TalkingMouse
    :key="activeDialogueIndex"
    :character="activeLine.character"
    :message="activeLine.text[i18next.resolvedLanguage]"
    @close="next"
  />
</template>
