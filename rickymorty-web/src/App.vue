<template>
  <nav>
    <router-link to="/" class="nav-link">Home</router-link> |
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: #333;
}

.nav-link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 0 10px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #42b983;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
