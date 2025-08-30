<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <!-- Company Info -->
        <div class="footer__section footer__section--company">
          <h2 class="footer__logo">Funiro.</h2>
          <address class="footer__address">
            400 University Drive Suite 200 Coral Gables<br>
            FL 33134 USA
          </address>
        </div>

        <!-- Links -->
        <div class="footer__section">
          <h3 class="footer__heading">Links</h3>
          <nav class="footer__nav">
            <a href="/" class="footer__link">Home</a>
            <a href="/shop" class="footer__link">Shop</a>
            <a href="/about" class="footer__link">About</a>
            <a href="/contact" class="footer__link">Contact</a>
          </nav>
        </div>

        <!-- Help -->
        <div class="footer__section">
          <h3 class="footer__heading">Help</h3>
          <nav class="footer__nav">
            <a href="/payment-options" class="footer__link">Payment Options</a>
            <a href="/returns" class="footer__link">Returns</a>
            <a href="/privacy-policies" class="footer__link">Privacy Policies</a>
          </nav>
        </div>

        <!-- Newsletter -->
        <div class="footer__section footer__section--newsletter">
          <h3 class="footer__heading">Newsletter</h3>
          <form class="footer__newsletter" @submit.prevent="subscribe">
            <input 
              type="email" 
              v-model="email"
              placeholder="Enter Your Email Address" 
              class="footer__input"
              required
            >
            <button type="submit" class="footer__subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">2023 furino. All rights reverved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  if (email.value) {
    console.log('Subscribing email:', email.value)
    email.value = ''
  }
}
</script>

<style scoped>
.footer {
  background-color: #fff;
  border-top: 1px solid #d9d9d9;
  padding: 48px 0 24px;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer__content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer__section--company {
  max-width: 285px;
}

.footer__logo {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 50px;
}

.footer__address {
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #9f9f9f;
}

.footer__heading {
  font-size: 16px;
  font-weight: 500;
  color: #9f9f9f;
  margin-bottom: 55px;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.footer__link {
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer__link:hover {
  color: #b88e2f;
}

.footer__newsletter {
  display: flex;
  gap: 11px;
}

.footer__input {
  flex: 1;
  padding: 0 0 4px 0;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 14px;
  color: #9f9f9f;
  outline: none;
}

.footer__input::placeholder {
  color: #9f9f9f;
}

.footer__subscribe-btn {
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  padding: 0 0 4px 0;
  transition: color 0.3s ease;
}

.footer__subscribe-btn:hover {
  color: #b88e2f;
}

.footer__bottom {
  padding-top: 35px;
  border-top: 1px solid #d9d9d9;
}

.footer__copyright {
  font-size: 16px;
  color: #000;
  margin: 0;
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
  
  .footer__section--company {
    max-width: none;
  }
  
  .footer__newsletter {
    flex-direction: column;
    gap: 16px;
  }
  
  .footer__nav {
    gap: 24px;
  }
  
  .footer__logo,
  .footer__heading {
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 32px 0 16px;
  }
  
  .footer__content {
    margin-bottom: 32px;
  }
}
</style>