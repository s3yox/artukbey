<template>
  <div class="login-register">
    <div class="tabs">
      <button :class="{ active: activeTab === 'login' }" @click="setTab('login')">
        Giriş Yap
      </button>
      <button :class="{ active: activeTab === 'register' }" @click="setTab('register')">
        Üye Ol
      </button>
    </div>

    <!-- Login Form -->
    <div v-if="activeTab === 'login'" class="form-content">
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="loginEmail" placeholder="E-posta" required />
        <div class="password-wrapper">
          <input
            :type="showLoginPassword ? 'text' : 'password'"
            v-model="loginPassword"
            placeholder="Şifre"
            required
          />
          <span class="toggle-password" @click="toggleLoginPassword">👁️</span>
        </div>
        <button type="submit" class="btn">Giriş Yap</button>
        <a href="#" class="forgot-password">Şifremi Unuttum</a>
      </form>
    </div>

    <!-- Register Form -->
    <div v-if="activeTab === 'register'" class="form-content">
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="registerFirstName" placeholder="Adınız" required />
        <input type="text" v-model="registerLastName" placeholder="Soyadınız" required />
        <input type="email" v-model="registerEmail" placeholder="E-posta" required />
        <div class="password-wrapper">
          <input
            :type="showRegisterPassword ? 'text' : 'password'"
            v-model="registerPassword"
            placeholder="Şifre"
            required
          />
          <span class="toggle-password" @click="toggleRegisterPassword">👁️</span>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" v-model="acceptTerms" required />
            Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum.
          </label>
        </div>
        <button type="submit" class="btn">Üye Ol</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useNuxtApp } from "#app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "UserLogin",
  setup() {
    const { $firebaseAuth } = useNuxtApp(); // Plugin içindeki `auth` objesine eriş

    const activeTab = ref<"login" | "register">("login");
    const loginEmail = ref("");
    const loginPassword = ref("");
    const showLoginPassword = ref(false);

    const registerFirstName = ref("");
    const registerLastName = ref("");
    const registerEmail = ref("");
    const registerPassword = ref("");
    const showRegisterPassword = ref(false);
    const acceptTerms = ref(false);

    const setTab = (tab: "login" | "register") => {
      activeTab.value = tab;
    };

    const toggleLoginPassword = () => {
      showLoginPassword.value = !showLoginPassword.value;
    };

    const toggleRegisterPassword = () => {
      showRegisterPassword.value = !showRegisterPassword.value;
    };

    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          $firebaseAuth,
          loginEmail.value,
          loginPassword.value
        );
        alert(`Giriş Başarılı! Hoş geldin, ${userCredential.user.email}`);
      } catch (error) {
        console.error("Giriş Hatası:", error);
        alert("Giriş Hatası: " + error.message);
      }
    };

    const handleRegister = async () => {
      if (!acceptTerms.value) {
        alert("Üyelik koşullarını kabul etmelisiniz!");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          $firebaseAuth,
          registerEmail.value,
          registerPassword.value
        );
        alert(`Kayıt Başarılı! Hoş geldin, ${userCredential.user.email}`);
      } catch (error) {
        console.error("Kayıt Hatası:", error);
        alert("Kayıt Hatası: " + error.message);
      }
    };

    return {
      activeTab,
      loginEmail,
      loginPassword,
      showLoginPassword,
      registerFirstName,
      registerLastName,
      registerEmail,
      registerPassword,
      showRegisterPassword,
      acceptTerms,
      setTab,
      toggleLoginPassword,
      toggleRegisterPassword,
      handleLogin,
      handleRegister,
    };
  },
});
</script>




<style scoped>
.login-register {
  width: 450px;
  margin:auto;
  font-family: Arial, sans-serif;
}

/* Sekme Alanı */
.tabs {
  display: flex;
  justify-content: flex-start; /* Sol tarafa hizalama */
  gap: 200px; /* Butonlar arasındaki boşluk */
  margin-bottom: 5px;
  border-bottom: 1px solid #ddd;
}

.tabs button {
  font-size: 18px; /* Yazı boyutu */
  font-weight: 500; /* Hafif kalın yazı */
  color: #aaa; /* Pasif sekme rengi */
  padding: 10px 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent; /* Alt çizgi başlangıçta görünmez */
  transition: color 0.3s, border-bottom 0.3s;
}

.tabs button.active {
  color: #034896; /* Aktif sekme yazı rengi */
  border-bottom: 2px solid hsl(212, 83%, 35%); /* Alt çizgi */
}

.tabs button:hover {
  color: #0056b3; /* Hover sırasında yazı rengi */
}

.form-content {
  background: #f9f9f9;
  padding: 20px 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input,
select {
  display: block;
  width: 93%;
  margin-bottom: 15px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.phone-wrapper {
  display: flex;
  gap: 10px;
}

.checkbox-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #001b3a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #005bbc;
}
</style>
