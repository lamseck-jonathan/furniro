<template>
    <section class="feature-section">
        <div class="feature-section__container">
            <div class="feature-section__tabs">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="setActiveTab(tab.id)"
                    :class="['feature-section__tab', { 'feature-section__tab--active': activeTab === tab.id }]"
                >
                    {{ tab.label }}
                </button>
            </div>
            
            <div class="feature-section__content">
                <div v-if="activeTab === 'description'" class="feature-section__tab-content">
                    <div class="feature-section__description-container">
                      <p class="feature-section__description">
                          {{ productDescription.title }}
                      </p>
                      <p class="feature-section__description">
                          {{ productDescription.content }}
                      </p>
                    </div>
                    <div class="feature-section__images">
                        <div class="feature-section__image-container">
                            <img src="/left_sofa.png" alt="Left sofa" class="feature-section__image" />
                        </div>
                        <div class="feature-section__image-container feature-section__image-container--right">
                            <img src="/right_sofa.png" alt="Right sofa" class="feature-section__image" />
                        </div>
                    </div>
                </div>
                
                <div v-if="activeTab === 'additional'" class="feature-section__tab-content">
                    <p class="feature-section__description">
                        Additional product information would go here.
                    </p>
                </div>
                
                <div v-if="activeTab === 'reviews'" class="feature-section__tab-content">
                    <p class="feature-section__description">
                        Customer reviews would be displayed here.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('description')

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'additional', label: 'Additional Information' },
  { id: 'reviews', label: 'Reviews [5]' }
]

const productDescription = {
  title: 'Embodying the raw, wayward spirit of rock \'n\' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
  content: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'
}

const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>

<style scoped lang="scss">
.feature-section {
  padding: 48px 0;
  background-color: #fff;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-bottom: 36px;
  }

  &__tab {
    background: none;
    border: none;
    padding: 24px 32px;
    font-family: Poppins;
    font-weight: 500 !important;
    font-style: Medium;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #9f9f9f;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: #000;
    }
    
    &--active {
      color: #000;
      font-weight: 600;
    }
  }

  &__content {
    margin: 0 auto;
  }

  &__tab-content {
    text-align: center;
  }

  &__description-container {
    padding: 0 100px;
  }

  &__description {
    font-size: 16px;
    line-height: 1.5;
    color: #9f9f9f;
    margin-bottom: 24px;
    text-align: justify;
  }

  &__images {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-top: 48px;
  }

  &__image-container {
    width: 605px;
    height: 348px;
    top: 1960px;
    transform: rotate(0deg);
    opacity: 1;
    border-radius: 8px;
    background-color: #faf3ea;
    overflow: hidden;

    &--right {
      .feature-section__image {
        object-fit: contain;
        object-position: center -20px;
        transform: scale(1.1);
        transform-origin: center center;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
    
    &__container {
      padding: 0 15px;
    }
    
    &__tabs {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 24px;
    }
    
    &__tab {
      padding: 12px 20px;
      font-size: 18px;
      margin: 5px;
    }
    
    &__description-container {
      padding: 0 20px;
    }
    
    &__description {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 16px;
    }
    
    &__images {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 32px;
    }
    
    &__image-container {
      width: 100%;
      max-width: 350px;
      height: 200px;
      
      &--right .feature-section__image {
        transform: scale(1.05);
        object-position: center -10px;
      }
    }
  }
}
</style>