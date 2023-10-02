<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

import Card from '@/components/Card.vue';
import { getAll, getById, type PokemonData } from '@/services/Pokemon';
import PokemonItem from '@/components/PokemonItem.vue';
import { computed } from '@vue/reactivity';

let pokemonList = ref<PokemonData[]>([] as PokemonData[]);
let searchText = ref<string>("");
let pokemonSelected = ref<PokemonData>();
let loading = ref<boolean>(false);

const filteredPokemons = computed(() => {
  if(pokemonList.value && searchText.value){
    return pokemonList.value.filter(
      (pokemon) => pokemon.name.toLowerCase().includes(searchText.value.toLowerCase())
    )
  }
  return pokemonList.value;
})

async function list(){
  const {success, data} = await getAll();

  if(success && data){
    pokemonList.value = data;
  }
}

onMounted(() => {
  list();
});

async function selectPokemon(pokemon: PokemonData){
  loading.value = true;
  const id = pokemon.url?.split('/')[6];

  if(id){
    const { success, data } = await getById(id)
    if(success && data){
      pokemonSelected.value = data;
    }
  }
  loading.value = false;
}

</script>

<template>
  <section class="container">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6">
        <Card 
          :name="pokemonSelected?.name" 
          :xp="pokemonSelected?.base_experience" 
          :height="pokemonSelected?.height" 
          :img-url="pokemonSelected?.sprites?.other.dream_world.front_default"
          :loading="loading"
        /> 
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="card pokemon-list">
          <div class="card-body">
            <div class="input-group mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Pesquisar..." 
                aria-label="Pesquisar"
                aria-describedby="basic-addon1"
                v-model="searchText"
              />
              <span class="input-group-text" id="basic-addon1">
                <PhMagnifyingGlass :size="20" weight="bold" />
              </span>
            </div>
            <div class="row">
              <PokemonItem 
                v-for="pokemon in filteredPokemons" 
                :key="pokemon.name" 
                :name="pokemon.name"
                :url="pokemon.url || ''"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pokemon-list{
  max-height: 76vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.pokemon-list::-webkit-scrollbar {
  width: 10px;
}

.pokemon-list::-webkit-scrollbar-track {
  background-color: #EEEEEE;
}

.pokemon-list::-webkit-scrollbar-thumb {
  background-color: #0D6EFD;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .pokemon-list{
    max-height: 45vh;
  }
}
</style>
