<template>
  <div class="home">
    <!-- Sidebar -->
    <div :class="['sidebar', { 'sidebar-open': isSidebarOpen }]">
      <button v-if="isSidebarOpen" class="sidebar-toggle" @click="toggleSidebar">
        Kapat
      </button>
      <button class="sidebar-button" @click="updateState(0)">
        Slider
      </button>
      <button class="sidebar-button" @click="updateState(1)">
        Header
      </button>
      <button class="sidebar-button" @click="updateState(2)">
        Carousel
      </button>
      <button class="sidebar-button" @click="updateState(3)">
        Info Section
      </button>
      <button class="sidebar-button" @click="updateState(4)">
        Product Grid
      </button>
      <button class="sidebar-button" @click="updateState(5)">
        Ürün Satış
      </button>
      <button class="sidebar-button" @click="updateState(6)">
        Sosyal Medya
      </button>
      <button class="sidebar-button" @click="updateState(7)">
        Footer
      </button>
      <button class="sidebar-button" @click="updateState(8)">
        User Login
      </button>
      <button class="sidebar-button" @click="updateState(9)">
        Sipariş Takip
      </button>
    </div>

    <!-- Açma Düğmesi -->
    <button 
      v-if="!isSidebarOpen" 
      class="open-sidebar-btn" 
      @click="toggleSidebar">
      Aç
    </button>

    <!-- Main Section -->
    <div :class="['main-section', { 'sidebar-open': isSidebarOpen }]">
      <div v-if="state === 0">
        <Slider />
      </div>
      <div v-if="state === 1">
        <component2 />
      </div>
      <div v-if="state === 2">
        <Carousel />
      </div>
      <div v-if="state === 3">
        <Infosection />
      </div>
      <div v-if="state === 4">
        <Productgrid />
      </div>
      <div v-if="state === 5">
        <Urunsatis />
      </div>
      <div v-if="state === 6">
        <Sosyalmedya />
      </div>
      <div v-if="state === 7">
        <component8 />
      </div>
      <div v-if="state === 8">
        <Userlogin />
      </div>
      <div v-if="state === 9">
        <Siparistakip />
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";

// Tüm bileşenleri içeri aktarıyoruz.
import Slider from "./components/Slider.vue";
import component2 from "./components/Header.vue";
import Carousel from "./components/Carousel.vue";
import Infosection from "./components/Infosection.vue";
import Productgrid from "./components/Productgrid.vue";
import Urunsatis from "./components/Urunsatis.vue";
import Sosyalmedya from "./components/Sosyalmedya.vue";
import component8 from "./components/Footer.vue";
import Userlogin from "./components/Userlogin.vue";
import Siparistakip from "./components/Siparistakip.vue";

export default {
  data() {
    return {
      state: 0, // Hangi bileşenin görüntüleneceğini kontrol eder
      isSidebarOpen: true, // Sidebar açık mı kapalı mı
    };
  },
  methods: {
    updateState(index) {
      this.state = index;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
  components: {
    Slider,
    component2,
    Carousel,
    Infosection,
    Productgrid,
    Urunsatis,
    Sosyalmedya,
    component8,
    Userlogin,
    Siparistakip,
  },
};
</script>

<style scoped>
/* Tüm CSS aynı kalıyor, zaten düzenlemiştik. */
.home {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 25%;
  background-color: #f4f4f4;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  position: fixed;
  height: 100%;
  z-index: 10;
}

.sidebar-open {
  transform: translateX(0); /* Açık duruma getir */
}

.sidebar-toggle {
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sidebar-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sidebar-button:hover {
  background-color: #d0d0d0;
}

.open-sidebar-btn {
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 20;
}

.main-section {
  flex-grow: 1;
  padding: 1rem;
  background-color: #ffffff;
  overflow-y: auto;
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
}

.main-section.sidebar-open {
  margin-left: 25%; /* Sidebar açıkken sağa kayar */
}
</style>
