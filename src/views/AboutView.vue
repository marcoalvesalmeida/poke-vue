
<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue';
</script>
<template>
  <section class="container mt-4">
    <div class="card animate__animated animate__fadeInUp">
      <div class="card-header">
        Sobre
      </div>
      <div class="card-body">
        <h5 class="card-title">PokeVue</h5>
        <p class="card-text">Esse projeto foi desenvolvido em um curso de Vue.JS onde usei diversas tecnologias para a criação dessa SPA. Aprendi diversos conceitos como Options API e Composition API.</p>
        <a href="https://github.com/marcoalvesalmeida/poke-vue" target="_blank" class="btn btn-primary"><PhGithubLogo :size="20" color="#FFFFFF" /> Veja no Github</a>
      </div>
    </div>
  </section>
</template>

<style>
</style>
