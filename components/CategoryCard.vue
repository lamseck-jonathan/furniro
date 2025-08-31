<template>
  <div class="category-card">
    <div class="category-card__image-container">
      <img 
        :src="imageUrl" 
        :alt="title" 
        :style="{ objectPosition: objectPosition }"
        class="category-card__image" 
      />
    </div>
    <div class="category-card__content">
      <h3 class="category-card__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  title: string;
  objectPosition?: string;
}

withDefaults(defineProps<Props>(), {
  objectPosition: 'center center'
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/variables' as *;

.category-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
  }

  &__image-container {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: $spacing-md;
  }

  &__image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  &__content {
    padding: 0 $spacing-sm;
  }

  &__title {
    font-family: $font-family;
    font-weight: $font-weight-semibold;
    font-size: 24px;
    color: $text-dark;
    margin: 0;
  }
}
</style>