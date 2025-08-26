<template>
  <div class="home">
   <HeroSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue';

definePageMeta({
  layout: 'default',
  pageTitle: 'Home',
});
</script>

<style scoped lang="scss">
@use '../assets/scss/main.scss';
</style>