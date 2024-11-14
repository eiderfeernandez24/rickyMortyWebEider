<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
    <router-link
      :to="{ name: 'CharacterDetail', params: { id: character.id } }"
    >
      Ver detalles
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    character: Object, // Recibe un personaje como prop
  },
};
</script>

<style scoped>
.character-card {
  display: inline-block;
  text-align: center;
  margin: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
}

.character-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
