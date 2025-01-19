// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],

    plugins: ["~/plugins/firebase.ts"], // Firebase plugin dosyasını burada tanımlıyoruz

    css: [
      '@fortawesome/fontawesome-svg-core/styles.css', // Font Awesome için gerekli CSS
    ],
    build: {
      transpile: ['@fortawesome/vue-fontawesome'], // Font Awesome modüllerini transpile et
    },
   

})
// Nuxt 3 için temel yapı

