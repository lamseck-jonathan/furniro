<template>
  <section class="category-section" id="shop">
    <div class="category-section__container">
      <div class="category-section__header">
        <h2 class="category-section__title">Browse The Range</h2>
        <p class="category-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      
      <div class="category-section__grid">
        <CategoryCard
          imageUrl="/dining.png"
          title="Dining"
        />
        <CategoryCard
          imageUrl="/living.png"
          title="Living"
        />
        <CategoryCard
          imageUrl="/bedroom.png"
          title="Bedroom"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CategoryCard from '~/components/CategoryCard.vue';
</script>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/variables' as *;

.category-section {
  padding: $spacing-xxl 0;
  background-color: $white;

  &__container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $spacing-sm;
  }

  &__header {
    text-align: center;
    margin-bottom: $spacing-xxl;
  }

  &__title {
    font-family: $font-family;
    font-weight: $font-weight-bold;
    font-size: 40px;
    color: $text-dark;
    margin: 0 0 $spacing-md 0;
  }

  &__description {
    font-family: $font-family;
    font-size: 20px;
    color: $text-light;
    margin: 0;
    line-height: 1.5;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;
  }

  @media (max-width: $breakpoint-lg) {
    &__title {
      font-size: 36px;
    }

    &__description {
      font-size: 18px;
    }

    &__grid {
      gap: $spacing-lg;
    }
  }

  @media (max-width: $breakpoint-md) {
    padding: $spacing-xl 0;

    &__title {
      font-size: 32px;
    }

    &__description {
      font-size: 16px;
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
    }
  }

  @media (max-width: $breakpoint-sm) {
    &__header {
      margin-bottom: $spacing-xl;
    }

    &__grid {
      gap: $spacing-md;
    }
  }
}
</style>