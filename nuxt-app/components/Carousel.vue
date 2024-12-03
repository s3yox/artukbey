<template>
    <div class="carousel-container">
      <div class="carousel-slide">
        <div class="arrow left-arrow" @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </div>
        <img :src="images[currentSlide]" alt="carousel image" class="carousel-image" />
        <div class="arrow right-arrow" @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
          </svg>
        </div>
      </div>
    </div>
  
  
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const images = [
    
    'https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-eafd.jpg',
    'https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-d250.jpg',
    'https://imagizer.imageshack.com/img922/6146/TI08Bk.jpg',
    'https://imagizer.imageshack.com/img924/6936/Jueyhw.jpg',
    'https://imagizer.imageshack.com/img923/3405/Tz9XVh.jpg',
    'https://imagizer.imageshack.com/img923/2775/q9eOOJ.jpg',
    'https://imagizer.imageshack.com/img923/5636/2Mh9pt.jpg',
  ];
  
  const currentSlide = ref(0);
  
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % images.length;
  }
  
  function prevSlide() {
    currentSlide.value =
      (currentSlide.value - 1 + images.length) % images.length;
  }
  
  onMounted(() => {
    setInterval(nextSlide, 7000);
  });
  </script>
  
  <style scoped>
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
  }
  
  .carousel-slide {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
  
  .left-arrow {
    left: -70px;
  }
  
  .right-arrow {
    right: -70px;
  }
  
  .arrow svg {
    width: 24px;
    height: 24px;
    fill: rgba(0, 0, 0, 0.7);
    transition: fill 0.3s ease;
  }
  
  .arrow:hover svg {
    fill: white;
  }
  
  .info-section {
    text-align: center;
    margin-top: 40px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .col {
    flex: 1;
    text-align: center;
  }
  
  .col img {
    width: 43px;
  }
  </style>
  