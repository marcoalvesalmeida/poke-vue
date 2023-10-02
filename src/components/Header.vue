<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  let currentPage = ref<'home' | 'about'>('home');
  const route = useRoute();

  watch(() => route.path, (newPath) => {
    currentPage.value = newPath === '/about' ? 'about' : 'home';
  });
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/188/188987.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                PokeVue
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <router-link to="/" :class="currentPage === 'home' ? 'nav-link active' : 'nav-link'">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about" :class="currentPage === 'about' ? 'nav-link active' : 'nav-link'">Sobre</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>