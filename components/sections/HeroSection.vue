<template>
  <section class="hero-section" id="home">
    <div class="hero-section__container">
      <div class="hero-section__background">
        <img src="~/assets/hero-bg.jpg" alt="Hero Background" class="hero-section__background-image" />
      </div>
      
      <div class="hero-section__content">
        <div class="hero-section__card">
          <div class="hero-section__card-content">
            <p class="hero-section__subtitle">New Arrival</p>
            <h1 class="hero-section__title">Discover Our New Collection</h1>
            <p class="hero-section__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button class="hero-section__cta-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/variables' as *;

.hero-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &__container {
    position: relative;
    width: 100%;
    display: flex;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    width: 50%;
    height: 100%;
    margin-left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $spacing-xxl;
  }

  &__card {
    background-color: #FFF3E3;
    padding: $spacing-xxl;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &-content {
      text-align: left;
    }
  }

  &__subtitle {
    color: $text-dark;
    font-weight: $font-weight-semibold;
    font-size: 16px;
    margin-bottom: $spacing-sm;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &__title {
    color: $primary-color;
    font-family: $font-family;
    font-weight: $font-weight-bold;
    font-size: 52px;
    line-height: 1.2;
    margin-bottom: $spacing-md;
  }

  &__description {
    color: $text-dark;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: $spacing-xl;
  }

  &__cta-btn {
    background-color: $primary-color;
    color: $white;
    border: none;
    padding: $spacing-md $spacing-xl;
    font-size: 16px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
      transform: translateY(-2px);
    }

    &:focus {
      outline: 2px solid $primary-color;
      outline-offset: 2px;
    }
  }

  // Responsive design
  @media (max-width: $breakpoint-lg) {
    &__container {
      padding-right: $spacing-lg;
      justify-content: center;
    }

    &__card {
      padding: $spacing-lg;
    }

    &__title {
      font-size: 40px;
    }
  }

  @media (max-width: $breakpoint-md) {
    &__container {
      padding: $spacing-md;
    }

    &__card {
      padding: $spacing-md;
    }

    &__title {
      font-size: 32px;
    }
  }
}
</style>