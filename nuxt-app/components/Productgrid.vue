<template>
    <div class="product-grid-container">
      <div class="product-grid">
        <div class="product" v-for="product in products" :key="product.id">
          <img class="product-img" :src="product.image" :alt="product.title" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const products = [
    {
      id: 1,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-76dd84d6-c.jpg",
    },
    {
      id: 2,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-e961f765-b.jpg",
    },
    {
      id: 3,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-2f4dc9cc-2.jpg",
    },
    {
      id: 4,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-b83b51d7-a.jpg",
    },
    {
      id: 5,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-f2b71acb-4.jpg",
    },
    {
      id: 6,
      image: "https://static.ticimax.cloud/cdn-cgi/image/width=466,quality=99/2571/uploads/sayfatasarim/sayfa1/title-fe734588-c.jpg",
    },
  ];
  </script>
  
  <style scoped>
    .product-grid-container {
      width: 100%;
      max-width: 1200px; /* Sayfa genişliği 1200px'yi geçmesin, ihtiyaca göre değiştirebilirsiniz */
      margin: 0 auto; /* Konteyneri ortalar */
      padding: 0 15px; /* Konteynere sağ ve soldan biraz boşluk ekler */
    }
  
    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Üç sütun */
      gap: 15px; /* Küçük boşluk, bu değeri ihtiyaca göre ayarlayabilirsiniz */
      padding: 5px;
    }
  
    .product {
      background-color: white;
      padding: 0;
      text-align: center;
      border-radius: 2px;
      transition: transform 0.3s ease;
    }
  
    .product:hover {
      transform: scale(1.05);
    }
  
    .product-img {
      width: 100%; /* Resim genişliğini %100 yapıyoruz, çünkü her sütun %50 genişliğinde olacak */
      height: auto;
      border-radius: 5px;
      object-fit: cover; /* Resmin düzgün bir şekilde kutuya oturmasını sağlar */
    }
  </style>
  