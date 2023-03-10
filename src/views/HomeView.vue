<script setup>
import { usePositionStore } from '@/stores/position';

const store = usePositionStore();
</script>

<template>
  <main>{{ JSON.stringify(store.position.coords.latitude) }}</main>
</template>
