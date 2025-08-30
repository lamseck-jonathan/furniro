<template>
    <header class="nav-header">
        <div class="nav-header__container">
            <div class="nav-header__logo">
                <NuxtLink to="/" class="nav-header__logo-link">
                    <img src="~/assets/furniro_logo.svg" alt="Furniro" class="nav-header__logo-image" />
                </NuxtLink>
            </div>
            
            <nav class="nav-header__nav" :class="{ 'nav-header__nav--open': mobileMenuOpen }">
                <ul class="nav-header__nav-list">
                    <li class="nav-header__nav-item">
                        <a href="#home" class="nav-header__nav-link" @click="closeMobileMenu">Home</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#shop" class="nav-header__nav-link" @click="closeMobileMenu">Shop</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#about" class="nav-header__nav-link" @click="closeMobileMenu">About</a>
                    </li>
                    <li class="nav-header__nav-item">
                        <a href="#contact" class="nav-header__nav-link" @click="closeMobileMenu">Contact</a>
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

            <button 
                class="nav-header__mobile-toggle"
                @click="toggleMobileMenu"
                aria-label="Toggle mobile menu"
            >
                <span class="nav-header__hamburger"></span>
                <span class="nav-header__hamburger"></span>
                <span class="nav-header__hamburger"></span>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
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

  &__mobile-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    gap: 4px;
    
    .nav-header__hamburger {
      width: 24px;
      height: 3px;
      background-color: $text-dark;
      transition: all 0.3s ease;
      border-radius: 2px;
    }
  }
}

@media (max-width: 768px) {
  .nav-header {
    &__container {
      padding: 0 15px;
      position: relative;
    }

    &__nav {
      display: none;
      
      &.nav-header__nav--open {
        display: block;
      }
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: $white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      z-index: 1000;

      &--open {
        max-height: 400px;
      }

      &-list {
        flex-direction: column;
        gap: 0;
        padding: 20px;
      }

      &-item {
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
        
        &:last-child {
          border-bottom: none;
        }
      }

      &-link {
        display: block;
        padding: 15px 0;
        font-size: 18px;
        width: 100%;
      }
    }

    &__actions {
      gap: 10px;
      
      .nav-header__action-btn {
        width: 35px;
        height: 35px;
      }
      
      .nav-header__action-icon {
        width: 18px;
        height: 18px;
      }
    }

    &__mobile-toggle {
      display: flex;
    }
  }
}
</style>