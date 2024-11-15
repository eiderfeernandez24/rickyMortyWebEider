<template>
  <div class="episode-list">
    <h1>LISTA DE EPISODIOS</h1>
    <div v-if="episodes.length">
      <EpisodeCard
        v-for="episode in episodes"
        :key="episode.id"
        :episode="episode"
      />
    </div>
    <p v-else>Cargando episodios...</p>
  </div>
</template>

<script>
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard.vue";

export default {
  components: {
    EpisodeCard,
  },
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
</style>
