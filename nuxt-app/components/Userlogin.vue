<template>
  <div class="auth-container">
    <div class="tab-menu">
      <button :class="{ active: activeTab === 'login' }" @click="switchTab('login')">Giriş Yap</button>
      <button :class="{ active: activeTab === 'signup' }" @click="switchTab('signup')">Üye Ol</button>
    </div>

    <!-- Giriş Yap -->
    <div v-if="activeTab === 'login'" class="form-container">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input type="email" placeholder="E-posta" v-model="loginData.email" class="input-full" required />
        </div>
        <div class="form-group">
          <div class="password-container">
            <input type="password" placeholder="Şifre" v-model="loginData.password" class="input-full" required />
            <span class="show-password-icon">👁️</span>
          </div>
        </div>
        <button type="submit">Giriş Yap</button>
        <a href="/forgot-password" class="forgot-link">Şifremi Unuttum</a>
      </form>
    </div>

    <!-- Üye Ol -->
    <div v-if="activeTab === 'signup'" class="form-container">
      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <input type="text" placeholder="Adınız" v-model="signupData.name" class="input-full" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Soyadınız" v-model="signupData.surname" class="input-full" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="E-posta" v-model="signupData.email" class="input-full" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Şifre" v-model="signupData.password" class="input-full" required />
        </div>
        <button type="submit">Üye Ol</button>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('login');

const loginData = ref({
  email: '',
  password: '',
});

const signupData = ref({
  name: '',
  surname: '',
  email: '',
  password: '',
});

const switchTab = (tab: 'login' | 'signup') => {
  activeTab.value = tab;
};

const handleLogin = () => {
  console.log('Login Data:', loginData.value);
};

const handleSignup = () => {
  console.log('Signup Data:', signupData.value);
};
</script>

<style scoped>
/* Genel Konteyner */
/* Genel Konteyner */
.auth-container {
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Tab Menüsü */
.tab-menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab-menu button {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
}

.tab-menu button.active {
  border-bottom: 2px solid #1c355e;
  color: #1c355e;
}

/* Formlar */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-full {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.password-container {
  position: relative;
}

.show-password-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

button[type='submit'] {
  padding: 10px;
  background-color: #1c355e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #162a47;
}

.forgot-link {
  text-align: right;
  font-size: 14px;
  color: #1c355e;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

</style>
