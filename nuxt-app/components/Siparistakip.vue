<template>
  <div class="order-tracking-container">
    <h6 class="title">Sipariş Takip</h6>
    <div class="order-form">
      <!-- E-posta Girişi -->
      <label for="email" class="label">E-posta Adresiniz</label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="input"
        placeholder="mail@site.com"
      />

      <!-- Sipariş Numarası Girişi -->
      <label for="order-number" class="label">Sipariş Numaranız</label>
      <input
        id="order-number"
        v-model="orderNumber"
        type="text"
        class="input"
        placeholder="668CW73351"
      />

      <!-- Sorgula Butonu -->
      <button class="button" @click="checkOrder">
        Sorgula
      </button>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const email = ref<string>("");
  const orderNumber = ref<string>("");
  
  const checkOrder = () => {
    console.log("Sipariş kontrol ediliyor:", orderNumber.value);
  };
  </script>
  
  <style scoped>
  /* Genel Konteyner */
  .order-tracking-container {
  font-family: 'Windsor', 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}
  
  /* Başlık */
  .title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  /* Form Kutusu */
  .order-form {
    margin: left;
    width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    
   
  }
  
  /* Etiket */
  .label {
    font-family: 'Windsor', Arial, sans-serif;
    display: block;
    text-align: left;
    margin: 10px 0 5px;
    font-size: 0.9rem;
    color: #333;
    font-weight: bold;
  }
  
  /* Giriş Alanı */
  .input {
    font-family: 'Windsor', Arial, sans-serif;
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 15px;
    background-color: #f5f5f5;
  }
  
  /* Giriş Alanı Odaklanma Efekti */
  .input:focus {
    outline: none;
    border-color: #63c78b;
    background-color: #fff;
    
  }
  
  @font-face {
  font-family: 'Windsor';
  src: url('/fonts/windsor-regular.woff2') format('woff2'),
       url('/fonts/windsor-regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  /* Buton */
  .button {
    padding: 10px 20px;
    font-size: 0.9rem;
    color: white;
    background-color: #63c78b;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }
  
  /* Buton Hover */
  .button:hover {
    background-color: #4fa971;
  }
  </style>
  