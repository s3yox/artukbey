<template>
  <div class="navbar">
    <!-- Logo -->
    <div class="logo" @click="navigateTo('/')">
  <img src="https://static.ticimax.cloud/2571/uploads/editoruploads/resimlerim/100x100.jpg" alt="Logo" />
</div>

    <!-- Menü -->
    <div class="menu">
      <div class="menu-item">Kahve</div>
      <div class="menu-item">Lokum Çeşitleri</div>
      <div class="menu-item">Organik Ürünler</div>
      <div class="menu-item">Çay</div>
      <div class="menu-item">Blog</div>
      <div class="menu-item">Franchise Başvuru</div>
      <div class="menu-item">KVKK</div>
      <div class="menu-item" @click="navigateTo('/siparistakip')">Sipariş Takip</div>
      <input v-model="ph" placeholder="Arama" class="search-input" />
      <div class="menu-item" @click="navigateTo('/uyeol')">ÜYE GİRİŞİ</div>
      <div class="menu-item" @click="navigateTo('/uyeol')">ÜYE OL</div>

      <!-- Sepet -->
      <div class="menu-item cart-menu">
        <span>SEPETİM ({{ cartStore.totalItems }})</span>
        <!-- Hover ile Sepet Detayları -->
        <div class="cart-dropdown" v-if="cartStore.cartItems.length > 0">
          <div class="cart-item" v-for="item in cartStore.cartItems" :key="item.id">
            <img :src="item.image" alt="Ürün Görseli" class="cart-item-img" />
            <div class="cart-item-details">
              <p>{{ item.title }}</p>
              <p>x {{ item.quantity }}</p>
              <p>{{ item.price }}</p>
            </div>
            <button @click="removeItem(item.id)" class="remove-item">🗑️</button>
          </div>
          <div class="cart-total">
            <p>Genel Toplam</p>
            <p>{{ cartStore.totalPrice.toFixed(2) }} ₺</p>
          </div>
          <div class="cart-actions">
            <button class="view-cart">Sepetim</button>
            <button class="checkout">Sipariş Tamamla</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '~/stores/cart'; // Pinia store'u import ediyoruz
import { useRouter } from "vue-router";

const router = useRouter();

function navigateTo(path) {
  router.push(path); // /uyeol sayfasına yönlendirme yapılır
}
const cartStore = useCartStore(); // Sepet için store
const ph = ref(''); // Arama inputu için placeholder
function removeItem(productId) {
  cartStore.removeFromCart(productId); // Ürünleri sepetten çıkar
}

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
  cursor: pointer;
}

.logo img {
  width: auto;
  height: 100px;
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

/* Sepet Menüsü */
.cart-menu {
  position: relative;
}

/* Sepet Dropdown */
.cart-dropdown {
  position: absolute;
  top: 100%; /* Menü altına yerleştirir */
  right: 0;
  width: 300px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  display: none; /* Varsayılan olarak görünmez */
  z-index: 10;
}

.cart-menu:hover .cart-dropdown {
  display: block; /* Hover ile görünür */
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-details p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.remove-item {
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 18px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.view-cart {
  background-color: white;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.view-cart:hover {
  background-color: #f9f9f9;
}

.checkout {
  background-color: #f0c040;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.checkout:hover {
  background-color: #d9a830;
}
</style>
