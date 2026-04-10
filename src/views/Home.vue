<script setup></script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/" class="link">PayTrack</RouterLink>
      <RouterLink to="/connexion" class="link">Connexion</RouterLink>
      <RouterLink to="/inscription" class="link">Inscription</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  background-color: red;
}
nav {
  display: flex;
  justify-content: center;
}

.link {
  color: black;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-inline: 20px;
  margin-block: 10px;
  font-size: 20px;
}
</style>
