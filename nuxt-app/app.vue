<template>
  <div class="app-container">
    <Slider />
    <Header />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Slider from "./components/Slider.vue";
</script>

<style>
/* Ana kapsayıcı */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Tüm ekran yüksekliğini kapsar */
}

/* İçerik alanı */
.content {
  flex: 1; /* İçeriğin kalan boşluğu doldurmasını sağlar */
}

/* Footer */
footer {
  background-color: #001b3a; /* Footer arka plan rengi */
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>