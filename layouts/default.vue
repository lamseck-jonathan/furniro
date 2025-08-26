<template>
  <div class="app">
    <NavHeader />
    <main class="app__main-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
// Layout logic
import NavHeader from '../components/navigation/NavHeader.vue';
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main-content {
    flex: 1;
  }
}


</style>