<template>
  <div class="home">
    <h1>Welcome to Furniro</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  pageTitle: 'Home',
});
</script>

<style scoped lang="scss">
@use '../assets/scss/main.scss';
.home {
  padding: 2rem;
  text-align: center;
}
</style>