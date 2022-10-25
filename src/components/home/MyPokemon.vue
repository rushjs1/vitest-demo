<script setup>
import { ref } from "vue";

const pokemons = ref([]);

const getPokemon = () => {
  return new Promise((resolve, reject) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        pokemons.value = res.results;
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
</script>

<template>
  <div class="pokemon-container">
    <div class="title">
      <span> Assert data loads after click </span>
    </div>
    <button class="btn" @click="getPokemon" data-testid="get-pokemon">
      Get Pokemon
    </button>
    <div v-if="pokemons" class="pokemon">
      <h4
        v-for="(pokemon, idx) in pokemons"
        :key="idx"
        :data-testid="pokemon.name"
      >
        {{ pokemon.name }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 300px;
}

.btn {
  background-color: rgb(245, 245, 245);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: none;
}
.btn:hover {
  background-color: rgb(230, 230, 230);
}

.pokemon {
  margin-top: 20px;
}

.title {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 10px;
}
</style>
