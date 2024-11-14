<template>
  <div class="character-detail" v-if="character">
    <h1>{{ character.name }}</h1>
    <img :src="character.image" :alt="character.name" />
    <p><strong>Especie:</strong> {{ character.species }}</p>
    <p><strong>Género:</strong> {{ character.gender }}</p>
    <p><strong>Ubicación:</strong> {{ character.location.name }}</p>
    <p><strong>Estado:</strong> {{ character.status }}</p>
    <router-link to="/episodes">Volver a los episodios</router-link>
  </div>
  <p v-else>Cargando personaje...</p>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      character: null,
    };
  },
  created() {
    this.fetchCharacter();
  },
  methods: {
    async fetchCharacter() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${this.$route.params.id}`
        );
        this.character = response.data;
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    },
  },
};
</script>

<style scoped>
.character-detail {
  text-align: center;
}

.character-detail img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
