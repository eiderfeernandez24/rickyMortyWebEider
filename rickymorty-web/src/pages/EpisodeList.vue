<template>
  <div class="episode-list">
    <h1>LISTA DE EPISODIOS</h1>
    <div v-if="episodes.length">
      <div v-for="episode in episodes" :key="episode.id" class="episode-card">
        <h2>{{ episode.name }}</h2>
        <p>{{ episode.air_date }}</p>
        <router-link
          :to="{ name: 'CharacterDetail', params: { id: episode.id } }"
        >
          Ver personajes
        </router-link>
      </div>
    </div>
    <p v-else>Cargando episodios...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      episodes: [], // Array para almacenar los episodios
    };
  },
  created() {
    this.fetchEpisodes();
  },
  methods: {
    async fetchEpisodes() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        );
        this.episodes = response.data.results;
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    },
  },
};
</script>

<style scoped>
.episode-list {
  text-align: center;
}

.episode-card {
  margin: 20px;
  padding: 10px;
  background-color: beige;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
