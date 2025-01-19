import { defineStore } from 'pinia';

// Ürünler için arayüz tanımı
interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity?: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Product[], // Sepetteki ürünlerin listesi
  }),
  getters: {
    totalItems: (state) =>
      state.cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0),
    totalPrice: (state) =>
      state.cartItems.reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace('₺', '')) * (item.quantity || 0),
        0
      ),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity! += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});
