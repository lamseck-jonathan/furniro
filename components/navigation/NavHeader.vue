<template>
    <header class="nav-header">
        <div class="nav-header__container">
        <div class="nav-header__content">
            <div class="nav-header__logo">
            <NuxtLink to="/">
                <img src="~/assets/furniro_logo.svg" alt="Furniro" />
            </NuxtLink>
            </div>
            
            <nav class="nav-header__nav">
            <ul class="nav-list">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
            </nav>

            <div class="nav-header__actions">
            <!-- User icons -->
            </div>
        </div>
        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/variables' as *;

.nav-header {
  background-color: $white;
  padding: $spacing-sm 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $spacing-sm;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  &__nav {
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: $spacing-xl;

      li {
        a {
          color: $text-dark;
          text-decoration: none;
          font-weight: $font-weight-medium;
          transition: color 0.3s ease;

          &:hover {
            color: $primary-color;
          }

          &.router-link-active {
            color: $primary-color;
          }
        }
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }
}
</style>