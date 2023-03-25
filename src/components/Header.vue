<template>

  <header class="flex flex-row-reverse items-center justify-between p-4">
    <LanguageSwitcher></LanguageSwitcher>
    <BackButton></BackButton>
  </header>

</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Header",
  components: {BackButton, LanguageSwitcher}
}
</script>