<template>
  <h1>Les Jeux Disponibles</h1>

  <a v-for="(game, index) in games" :href="game.path" :key="index">
    <h3>
      {{ game.title }}
    </h3>
    <p>
      {{ game.desc }}
    </p>
  </a>
</template>
<script setup>
const { data: games } = useFetch("/api/play");
</script>
