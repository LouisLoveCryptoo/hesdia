<template>
  <h1>Les Jeux Disponibles</h1>

  <nuxt-link v-for="(game, index) in games" :to="game.path" :key="index">
    <h3>
      {{ game.title }}
    </h3>
    <p>
      {{ game.desc }}
    </p>
  </nuxt-link>
</template>
<script setup>
const { data: games } = useFetch("/api/play");
</script>
