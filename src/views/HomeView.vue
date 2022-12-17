<template>
  <!-- Hero Section Start -->
  <Hero/>
  <!-- Hero Section End -->
  <!-- Section Area Start -->
  <Area/>
  <!-- Section Area End -->
</template>

<script>
import Area from "../components/Area.vue";
import Hero from "../components/Hero.vue";
export default {
    name: "Home View",
    components: { Area, Hero }
};
</script>
