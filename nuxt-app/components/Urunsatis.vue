<template>
  <div class="product-list">
    <h2 class="category-title">Dünya Kahveleri</h2>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product-item">
        <!-- Ürün Görseli ve Başlık -->
        <div class="product-content">
          <img
            :src="product.image || placeholderImage"
            :alt="product.title"
            class="product-img"
          />
          <h3 class="product-title">{{ product.title }}</h3>
        </div>

        <!-- Ürün Fiyatı ve Sepete Ekle Butonu -->
        <div class="product-footer">
          <p class="product-price">{{ product.price }}</p>
          <button
            class="add-to-cart"
            @click="addToCart(product)"
          >
            SEPETE EKLE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductList',
  data() {
    return {
      placeholderImage: 'https://via.placeholder.com/200', // Varsayılan görsel
      products: [
        {
          id: 1,
          title: 'Artukbey Filtre Kahve 1 kg',
          image: 'https://static.ticimax.cloud/cdn-cgi/image/width=380,quality=85/2571/uploads/urunresimleri/buyuk/artukbey-filtre-kahve-1-kg--a09e-.jpg',
          price: '₺710,00',
        },
        {
          id: 2,
          title: 'Guatemala (Filtre Kahve Çekirdeği) 250 Gr',
          image: 'https://static.ticimax.cloud/cdn-cgi/image/width=380,quality=85/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g--5828-.jpg',
          price: '₺360,00',
        },
        {
          id: 3,
          title: 'Blend (Filtre Kahve) 250 Gr',
          image: 'https://static.ticimax.cloud/cdn-cgi/image/width=380,quality=85/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg',
          price: '₺360,00',
        },
        {
          id: 4,
          title: 'Classic (Filtre Kahve) 250 Gr',
          image: 'https://static.ticimax.cloud/cdn-cgi/image/width=380,quality=85/2571/uploads/urunresimleri/buyuk/classic-filtre-kahve-250-gr-0-5e88.jpg',
          price: '₺230,00',
        },
        {
          id: 5,
          title: 'Columbia (Filtre Kahve) 250 Gr',
          image: 'https://static.ticimax.cloud/cdn-cgi/image/width=380,quality=85/2571/uploads/urunresimleri/buyuk/columbia-filtre-kahve-250-gr-1d-8e6.jpg',
          price: '₺310,00',
        },
      ],
    };
  },
  methods: {
    addToCart(product: any) {
      alert(`${product.title} sepete eklendi!`);
    },
  },
});
</script>

<style scoped>
/* Ana Liste */
.product-list {
  padding: 20px;
  text-align: center;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Ürün Kartı */
.product-item {
  width: 220px;
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  position: relative;
  background: #fff;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column; /* Görsel ve metni dikey olarak hizalar */
}



/* Ürün İçeriği (Görsel ve Başlık) */
.product-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Başlık ve görseli ortalar */
  padding-bottom: 10px;
}

.product-img {
  width: 100%;
  height: 200px; /* Sabit yükseklik verildi */
  object-fit: cover; /* Görselin kesilmeden uyumlu olmasını sağlar */
  border-radius: 10px;
}

.product-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

/* Ürün Fiyatı ve Sepete Ekle Butonu */
.product-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.product-price {
  font-size: 14px;
  color: #555;
}

/* Sepete Ekle Butonu */
.add-to-cart {
  background: #fff;
  border: 2px solid #f4a261;
  color: #f4a261;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: none; /* İlk durumda gizli */
}

.product-item:hover .add-to-cart {
  display: block; /* Hover olunca görünür */
}

.add-to-cart:hover {
  background: #f4a261;
  color: #fff;
}
</style>
