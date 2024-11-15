<template>
  <div class="episode-card">
    <h2>{{ episode.name }}</h2>
    <p>{{ episode.air_date }}</p>
    <router-link
      :to="{ name: 'EpisodeCharacters', params: { id: episode.id } }"
      class="character-link"
    >
      Ver personajes
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    episode: Object,
  },
};
</script>

<style scoped>
.episode-card {
  margin: 20px;
  padding: 10px;
  background-color: beige;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.character-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.character-link:hover {
  background-color: #2c3e50;
}
</style>
