<!-- HomeView.vue -->
<template>
  <div class="home-view">
    <h1>Welcome to the Episode List</h1>
    <div class="episode-list">
      <EpisodeCard
        v-for="episode in episodes"
        :key="episode.id"
        :episode="episode"
      />
    </div>
  </div>
</template>

<script>
import EpisodeCard from "../components/EpisodeCard.vue"; // Importar el componente

export default {
  components: {
    EpisodeCard, // Registrar el componente
  },
  data() {
    return {
      episodes: [
        {
          id: 1,
          name: "Pilot",
          air_date: "December 2, 2013",
          episode: "S01E01",
        },
        // Aquí puedes añadir más episodios de ejemplo si es necesario
      ],
    };
  },
};
</script>

<style scoped>
.home-view {
  text-align: center;
  background-color: #1e272e;
  padding: 20px;
  min-height: 100vh;
}

.episode-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
