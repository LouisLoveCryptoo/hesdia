<template>
  <div class="playContainer">
    <h2>Viens découvrir nos jeux !</h2>
    <div class="gamesContainer">
      <div class="gameCard" v-for="(game, index) in games" :key="index"> 
        <nuxt-link :to="game.path">
          <h3>{{ game.title }}</h3>
          <p>{{ game.desc }}</p>
        </nuxt-link>
      </div>
    </div>
    <img class="etoiles" src="../../assets/img/etoiles.svg" alt="">
    <img class="bras" src="../../assets/img/bras.svg" alt="">
  </div>
</template>

<style scoped>
.playContainer {
  padding: var(--sides-padding);
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  color: var(--color-text);

}

.gamesContainer {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; 
}

.gameCard {
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
  text-align: center; 
  border: 1px solid var(--color-orange-dark);
  background-color: rgba(var(--bg-color-main), 0.9);
  border-radius: 15px;
  width: 30vw;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; 
}

.gameCard:hover {
  transform: scale(1.05); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.gameCard nuxt-link {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  padding: 20px;
  color: var(--chatbot-color-text);
  text-decoration: none;
}

.gameCard h3, .gameCard p {
  margin: 10px 0;
}

.gameCard h3 {
  font-size: var(--fs-subsubtitle); 
  font-weight: bold;
}

.gameCard p {
  font-size: var(--fs-ptittext); 
}

.bras{
  position: absolute;
  top: 250px;
  bottom: 0;
  right: 0;
  width: 20%;
  height: auto;
  z-index: -1;
}

.etoiles{
  position: absolute;
  top: 200px;
  bottom: 0;
  left: 50px;
  right: 0;
  width: 10%;
  height: auto;
  z-index: -1;
}
</style>



<script setup>
const { data: games } = useFetch("/api/play");
</script>
