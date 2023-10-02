<script setup lang="ts">
    const { name, url } = defineProps({
        name: {type: String, required: true},
        url: {type: String, required: true}
    });
    const baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const pokemonId = url.split('/')[6];

    const finalUrl = `${baseImageUrl}${pokemonId}.svg`;
</script>

<template>
    <div class="col-4 col-md-6 col-xl-3">
        <div class="card p-2 mb-3 pokemon-card">
            <p class="text-center">{{name}}</p>
            <img class="card-img-top" height="80" :src="finalUrl" :alt="name">
        </div>
    </div>
</template>

<style scoped>
.pokemon-card {
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,0.5) 0%, rgba(255,255,255,1) 100%);
    cursor: pointer;
}

.pokemon-card:hover {
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,0.8) 0%, rgba(212,248,255,1) 100%);
}

.pokemon-card img:hover {
    padding: .2rem;
}
</style>