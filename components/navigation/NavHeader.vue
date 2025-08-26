<template>
    <header class="nav-header">
        <div class="nav-header__container">
            <div class="nav-header__logo">
                <NuxtLink to="/" class="nav-header__logo-link">
                    <img src="~/assets/furniro_logo.svg" alt="Furniro" class="nav-header__logo-image" />
                </NuxtLink>
            </div>
            
            <nav class="nav-header__nav">
                <ul class="nav-header__nav-list">
                    <li class="nav-header__nav-item">
                        <a href="#home" class="nav-header__nav-link">Home</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#shop" class="nav-header__nav-link">Shop</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#about" class="nav-header__nav-link">About</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#contact" class="nav-header__nav-link">Contact</a>
                    </li>
                </ul>
            </nav>

            <div class="nav-header__actions">
                <button class="nav-header__action-btn nav-header__action-btn--search" aria-label="Search">
                    <img src="~/assets/search.svg" alt="Search" class="nav-header__action-icon" />
                </button>
                <button class="nav-header__action-btn nav-header__action-btn--alert" aria-label="Notifications">
                    <img src="~/assets/alert.svg" alt="Notifications" class="nav-header__action-icon" />
                </button>
                <button class="nav-header__action-btn nav-header__action-btn--wishlist" aria-label="Wishlist">
                    <img src="~/assets/heart.svg" alt="Wishlist" class="nav-header__action-icon" />
                </button>
                <button class="nav-header__action-btn nav-header__action-btn--cart" aria-label="Shopping Cart">
                    <img src="~/assets/cart.svg" alt="Shopping Cart" class="nav-header__action-icon" />
                </button>
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  &__container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 $spacing-sm;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    &-link {
      display: block;
    }

    &-image {
      height: 40px;
      width: auto;
    }
  }

  &__nav {
    &-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: $spacing-xl;
    }

    &-link {
      color: $text-dark;
      text-decoration: none;
      font-weight: $font-weight-medium;
      transition: color 0.3s ease;
      scroll-behavior: smooth;

      &:hover {
        color: $primary-color;
      }

      &:focus {
        outline: none;
        color: $primary-color;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $spacing-md;
  }

  &__action-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: $spacing-xs;
    border-radius: 4px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    &:hover {
      background-color: $gray-light;
    }

    &:focus {
      outline: 2px solid $primary-color;
      outline-offset: 2px;
    }
  }

  &__action-icon {
    width: 20px;
    height: 20px;
    transition: filter 0.3s ease;

    .nav-header__action-btn:hover & {
      filter: brightness(0) saturate(100%) invert(54%) sepia(84%) saturate(491%) hue-rotate(19deg) brightness(95%) contrast(90%);
    }
  }
}
</style>