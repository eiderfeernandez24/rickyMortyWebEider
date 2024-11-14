<template>
  <div class="episode-card">
    <h2 class="episode-name">{{ formattedName }}</h2>
    <p class="episode-code">Episode: {{ episode.episode }}</p>
    <p class="episode-date">Air Date: {{ episode.air_date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedName() {
      return this.episode.name;
    },
  },
};
</script>

<style scoped>
.episode-card {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: calc(33% - 20px);
  background-color: #3d3d3d;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.episode-card:hover {
  transform: scale(1.05);
}

.episode-name {
  font-size: 20px;
  margin-bottom: 10px;
}

.episode-code,
.episode-date {
  font-size: 16px;
  margin: 5px 0;
}
</style>
