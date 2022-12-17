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

  <RouterView />
  <FooterVue></FooterVue>
</template>

<style scoped>

</style>
