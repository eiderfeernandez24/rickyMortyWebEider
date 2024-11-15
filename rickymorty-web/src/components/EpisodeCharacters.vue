<template>
  <div class="episode-characters">
    <h1>Personajes del episodio: {{ episodeName }}</h1>
    <div v-if="loading">Cargando personajes...</div>
    <div v-else>
      <div
        v-for="character in characters"
        :key="character.id"
        class="character-card"
      >
        <router-link
          :to="{ name: 'CharacterDetail', params: { id: character.id } }"
        >
          <img :src="character.image" :alt="character.name" />
          <h3>{{ character.name }}</h3>
        </router-link>
        <p><strong>Especie:</strong> {{ character.species }}</p>
        <p><strong>Estado:</strong> {{ character.status }}</p>
      </div>
    </div>
    <router-link to="/episodes" class="back-link"
      >Volver a episodios</router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      characters: [],
      episodeName: "",
      loading: true,
    };
  },
  created() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      try {
        const episodeId = this.$route.params.id; // ID del episodio desde la ruta
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );

        this.episodeName = response.data.name;

        // Obtener los personajes del episodio
        const characterURLs = response.data.characters;
        const characterPromises = characterURLs.map((url) => axios.get(url));
        const responses = await Promise.all(characterPromises);

        this.characters = responses.map((res) => res.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.episode-characters {
  text-align: center;
  padding: 20px;
}

.character-card {
  display: inline-block;
  text-align: center;
  margin: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  width: 150px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.character-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: transform 0.3s;
}

.character-card img:hover {
  transform: scale(1.1);
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.back-link:hover {
  background-color: #2c3e50;
}
</style>
