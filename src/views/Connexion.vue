<script setup></script>

<template>
  <nav>
    <RouterLink to="/" class="link">PayTrack</RouterLink>
    <RouterLink to="/connexion" class="link">Connexion</RouterLink>
    <RouterLink to="/inscription" class="link">Inscription</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}

.link {
  color: black;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 10px;
  margin-inline: 20px;
  font-size: 20px;
}
</style>
