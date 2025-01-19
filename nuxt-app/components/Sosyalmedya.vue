<template>
  <div class="footerSosyalMedya">
    <a href="https://www.facebook.com/artukbey1910" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </a>
    <a href="https://twitter.com/artukbey1910" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a href="https://www.instagram.com/artukbey1910/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://www.linkedin.com/company/artukbey-kahve/mycompany/verification/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
    <a href="https://www.youtube.com/@artukbeykahve1910" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'youtube']" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

// CSS otomatik eklemeyi devre dışı bırakıyoruz
config.autoAddCss = false;

// Kullanılacak ikonları ekliyoruz
library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube);

export default defineComponent({
  name: "SosyalMedya",
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style scoped>
.footerSosyalMedya {
  display: flex;
  gap: 15px; /* İkonlar arasındaki boşluk */
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.footerSosyalMedya a {
  text-decoration: none;
  color: #333; /* Varsayılan ikon rengi */
  font-size: 24px; /* İkon boyutu */
  transition: color 0.3s ease; /* Renk geçişi */
}

.footerSosyalMedya a:hover {
  color: #0056b3; /* Hover sırasında ikon rengi */
}
</style>
