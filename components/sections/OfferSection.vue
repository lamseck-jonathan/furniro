<template>
  <section class="offer-section">
    <div class="container">
      <div class="offer-grid">
        <div class="offer-item">
          <div class="offer-icon">
            <img src="/trophy.png" alt="High Quality">
          </div>
          <div class="offer-content">
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        
        <div class="offer-item">
          <div class="offer-icon">
            <img src="/warranty.png" alt="Warranty Protection">
          </div>
          <div class="offer-content">
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        
        <div class="offer-item">
          <div class="offer-icon">
            <img src="/shipping.png" alt="Free Shipping">
          </div>
          <div class="offer-content">
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        
        <div class="offer-item">
          <div class="offer-icon">
            <img src="/support.png" alt="24 / 7 Support">
          </div>
          <div class="offer-content">
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offer-section {
  background-color: #faf3ea;
  padding: 100px 0;
}

.container {
  max-width: 98%;
  margin: 0 auto;
  padding: 0 20px;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.offer-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.offer-icon {
  flex-shrink: 0;
  
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
}

.offer-content {
  h3 {
    font-size: 25px;
    font-weight: 600;
    color: #242424;
    margin: 0 0 8px 0;
    line-height: 1.2;
  }
  
  p {
    font-size: 20px;
    font-weight: 500;
    color: #898989;
    margin: 0;
    line-height: 1.3;
  }
}

@media (max-width: 767px) {
  .offer-section {
    padding: 60px 0;
  }
  
  .offer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .offer-content {
    h3 {
      font-size: 20px;
    }
    
    p {
      font-size: 16px;
    }
  }
}
</style>