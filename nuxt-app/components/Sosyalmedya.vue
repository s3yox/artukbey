<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube);

export default defineComponent({
  name: 'SosyalMedya',
  components: {
    FontAwesomeIcon,
  },
});
</script>

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
