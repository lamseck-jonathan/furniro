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
                    <div class="feature-section__description-container">
                        <p class="feature-section__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p class="feature-section__description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                    </div>
                </div>
                
                <div v-if="activeTab === 'reviews'" class="feature-section__tab-content">
                    <div class="feature-section__description-container">
                        <p class="feature-section__description">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                        </p>
                        <p class="feature-section__description">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                        </p>
                    </div>
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
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
}

const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>

<style scoped>
.feature-section {
  padding: 48px 0;
  background-color: #fff;
}

.feature-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.feature-section__tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 36px;
}

.feature-section__tab {
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
}

.feature-section__tab:hover {
  color: #000;
}

.feature-section__tab--active {
  color: #000;
  font-weight: 600;
}


.feature-section__content {
  margin: 0 auto;
}

.feature-section__tab-content {
  text-align: center;
}

.feature-section__description-container {
  padding: 0 100px;
}

.feature-section__description {
  font-size: 16px;
  line-height: 1.5;
  color: #9f9f9f;
  margin-bottom: 24px;
  text-align: justify;
}

.feature-section__images {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 48px;
}

.feature-section__image-container {
  width: 605px;
  height: 348px;
  top: 1960px;
  transform: rotate(0deg);
  opacity: 1;
  border-radius: 8px;
  background-color: #faf3ea;
  overflow: hidden;
}

.feature-section__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-section__image-container--right .feature-section__image {
  object-fit: contain;
  object-position: center -20px;
  transform: scale(1.1);
  transform-origin: center center;
}

@media (max-width: 768px) {
  .feature-section {
    padding: 32px 0;
  }
  
  .feature-section__container {
    padding: 0 15px;
  }
  
  .feature-section__tabs {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;
  }
  
  .feature-section__tab {
    padding: 12px 20px;
    font-size: 18px;
    margin: 5px;
  }
  
  .feature-section__description-container {
    padding: 0 20px;
  }
  
  .feature-section__description {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 16px;
  }
  
  .feature-section__images {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 32px;
  }
  
  .feature-section__image-container {
    width: 100%;
    max-width: 350px;
    height: 200px;
  }
  
  .feature-section__image-container--right .feature-section__image {
    transform: scale(1.05);
    object-position: center -10px;
  }
}
</style>