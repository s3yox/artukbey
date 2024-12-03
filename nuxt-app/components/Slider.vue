<template>
  <div class="slider-bar bg-red-800 text-white py-2">
    <div class="container mx-auto flex justify-center items-center h-full overflow-hidden">
      <transition-group name="slide-fade" tag="div">
        <p
          v-for="(text, index) in texts"
          :key="index"
          v-show="currentIndex === index"
          class="text-center"
        >
          {{ text }}
        </p>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SliderBar",
  data() {
    return {
      texts: [
        "750 TL ÜZERİ ALIŞVERİŞLERİNİZE KARGO ÜCRETSİZ",
        "500 TL VE ÜZERİ TÜM ALIŞVERİŞLERİNİZE İNDİRİM!",
        "SEZON SONU İNDİRİMLERİ KAÇIRMAYIN!",
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(this.changeText, 5000);
  },
  methods: {
    changeText() {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    },
  },
});
</script>

<style scoped>
.slider-bar {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #800000; /* Bordo renk */
  color: white;
  max-width: 100%;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Kayma sırasında taşan metni gizlemek için */
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
