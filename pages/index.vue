<template>
  <div class="home">
   <HeroSection />
   <CategorySection />
   <FeatureSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue';
import CategorySection from '~/components/sections/CategorySection.vue';
import FeatureSection from '~/components/sections/FeatureSection.vue';

definePageMeta({
  layout: 'default',
  pageTitle: 'Home',
});
</script>

<style scoped lang="scss">
@use '../assets/scss/main.scss';
</style>