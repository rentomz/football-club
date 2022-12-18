<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->

  <HeaderVue></HeaderVue>

  <RouterView @scrollToTop="scrollToTop"/>
  <FooterVue></FooterVue>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>
<style scoped>

</style>
