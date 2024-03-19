<template>
  <h1>Memory Game</h1>
  <div class="memory__game">
    <div
      v-for="(card, index) in playData"
      :key="index"
      @click="flipCard(index)"
      :class="{ active: card.active }"
    >
      <p :class="{ hidden: card.active }">
        {{ card.title }}
      </p>
    </div>
  </div>

  <button @click="reloadWindow()">Reset Game</button>
</template>
<script setup>
/**
 * Récupère les données du jeu de mémoire
 * et les transforme pour doubler le nombre de cartes
 * et les mélanger aléatoirement puis ajoutes active: false
 * @type {ref: {data: Array}}
 */
const { data: playData } = useFetch("/api/play/memory-game", {
  transform: (res) => {
    const concatArr = res.concat(res);
    const randomArr = concatArr.sort(() => (Math.random() > 0.5 ? 2 : -1));
    return randomArr.map((item) => ({ ...item, active: false }));
  },
});

/**
 * Recharge la fenêtre pour réinitialiser le jeu
 * @returns {void}
 */
const reloadWindow = () => {
  window.location.reload();
};

const flipCard = (index) => {
  playData.value[index].active = !playData.value[index].active;
};

console.log(playData.value);
</script>
<style>
.hidden {
  visibility: hidden;
}
.memory__game {
  width: 440px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  transform-style: preserve-3d;
  perspective: 500px;
}
.memory__game div {
  position: relative;
  width: 100px;
  height: 100px;
  font-size: 1rem;
  text-align: center;
  transition: 0.25s;
  color: white;
}

.memory__game div, .memory__game div p {
    display: flex;
    justify-content: center;
    align-items: center;
}

.memory__game div p {
  color: black;
  z-index: 10;
  padding: 5px;
  background: whitesmoke;
  height: 100%;
}

.memory__game div::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #209d7b;
  transition: 0.25s;
  transform: rotateY(0deg);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.memory__game div.active {
  transform: rotateY(180deg);
}
</style>
