<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style>
  body {
    height: 100vh;
    overflow-y: hidden;
  }
</style>