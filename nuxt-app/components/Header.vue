<template>
    <div class="navbar">
      <div class="logo">
        <img src="https://static.ticimax.cloud/2571/uploads/editoruploads/resimlerim/100x100.jpg" alt="Logo" />
      </div>
      <div class="menu">
        <div class="menu-item">Kahve
          <div class="dropdown">
            <ul>
              <li v-for="item in kahveItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="menu-item">Lokum Çeşitleri</div>
        <div class="menu-item">Organik Ürünler</div>
        <div class="menu-item">Çay</div>
        <div class="menu-item">Blog</div>
        <div class="menu-item">Franchise Başvuru</div>
        <div class="menu-item">KVKK</div>
        <div class="menu-item">Sipariş Takip</div>
        <input v-model="ph" placeholder="Arama" class="search-input" />
        <div class="menu-item">ÜYE GİRİŞİ</div>
        <div class="menu-item" @click="navigateTo('/uyeol')">ÜYE OL</div>
        <div class="menu-item">SEPETİM
          <div class="sepet-menu">
            <p>Sepetinizde ürün bulunmamaktadır.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
  const ph = ref('');
  const kahveItems = ref([
    'Kahve Çeşitleri',
    'Dibek Kahveleri',
    'Yöresel Filtre Kahve',
    'Hazır Kahve & Setler',
  ]);
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: auto;
    height: 100px; /* Adjust height as needed */
    max-width: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
  
  
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .menu-item {
    font-family: 'Verona-Regular', sans-serif;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    padding: 15px;
    text-transform: capitalize;
    transition: color 0.3s;
  }
  
  .menu-item:hover {
    color: #cbab60;
  }
  
  .search-input {
    padding: 8px;
    font-size: 13px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .dropdown {
    position: absolute;
    background-color: #cbab60;
    color: white;
    display: none;
    padding: 10px;
    border-radius: 4px;
  }
  
  .menu-item:hover .dropdown {
    display: block;
  }
  
  .sepet-menu {
    background-color: white;
    padding: 10px;
    display: none;
  }
  
  .menu-item:hover .sepet-menu {
    display: block;
  }
  </style>
  