<script setup lang="ts">
  const {name, xp, height, imgUrl, loading} = defineProps({
    name: String,
    xp: Number,
    height: Number,
    imgUrl: String,
    loading: Boolean
  })
</script>

<template>
    <div :class="loading ? 'card' : 'card animate__animated animate__flipInY'">
        <img v-if="name" :src="imgUrl" :alt="name" class="card-img-top pt-2">
        <img v-else src="../assets/egg_pokemon.svg" alt="???" class="card-img-top pt-2">
        <div class="card-body">
          <h5 class="card-title text-center">{{name || '???'}}</h5>
          <hr class="row" v-show="name">
          <div class="row" v-show="name">
            <div class="col">
              <strong>XP: </strong>
              <span>{{xp}}</span>
            </div>
            <div class="col">
              <strong>Altura: </strong>
              <span>{{height}}</span>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
.card {
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(0,212,255,0.8) 0%, rgba(212,248,255,1) 100%);
  height: 76vh;
}

.card img{
  height: 250px;
}

@media (max-width: 768px) {
  .card{
      height: 32vh;
      width: 40%;
      margin: 0 auto 10px auto;
  }
  .card img{
      height: 100px;
  }
}
</style>