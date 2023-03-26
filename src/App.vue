<script setup>
import './scss/index.scss';

import { RouterView } from 'vue-router';
import Container from "@/components/Container.vue";
</script>

<template>
  <Container>
    <RouterView />
  </Container>
</template>

<style scoped></style>
