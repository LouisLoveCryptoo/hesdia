<template>

<div class="main" v-if="scenarios">
  <h1>Choix du scénario</h1>

  <nuxt-link v-for="(scenario, index) in scenarios" :to="'/play/conversation-simulator/' + scenario.id" :key="index">
    <h3>
      {{ scenarios[index].title }}
    </h3>
  </nuxt-link>

  
</div>
    

</template>
<script setup>

  const {data: scenarios} = useFetch("/api/play/conv-simulator");
  console.log(scenarios.value)
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:50px;
  }

</style>
