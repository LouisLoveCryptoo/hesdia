<template>
  <h1>Memory Game</h1>
  <div class="memory__game">
    <div
      v-for="(card, index) in playData"
      :key="index"
      @click="flipCard(index)"
      :class="{ active: !card.active }"
    >
      <p :class="{ hidden: !card.active }">
        {{ card.title }}
      </p>
    </div>
  </div>
  <article v-if="state.descToDisplay">
    <p>
      {{ state.descToDisplay }}
    </p>
    <span @click="state.descToDisplay = ''">
        X
    </span>
  </article>
  <button @click="reloadWindow()">Reset Game</button>
</template>
<script setup>
/**
 * Contient les données du jeu
 * : (isFirstCard: boolean, oldIndex: number, descToDisplay: string)
 * @type {reactive: state}
 */
const state = reactive({
  isFirstCard: true,
  oldIndex: null,
  descToDisplay: "",
});

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
    return randomArr.map((item) => ({ ...item, active: false, match: false }));
  },
});

/**
 * Recharge la fenêtre pour réinitialiser le jeu
 * @returns {void}
 */
const reloadWindow = () => {
  window.location.reload();
};

/**
 * Retourne la carte retournée,
 * si c'est la première carte, elle est retournée
 * sinon, elle est comparée à la première carte
 *
 * @param {number} index
 * @returns {void}
 */
const flipCard = (index) => {
  if (playData.value[index].active) return;

  /**
   * Définit les cartes correspondantes comme étant match (donc active)
   * en fonction de l'index précédent et de l'index actuel.
   * @returns {void}
   */
  const setMatchingCard = () => {
    playData.value.forEach((card) => {
      if (card.id === state.oldIndex || card.id === playData.value[index].id) {
        card.match = true;
        card.active = true;
        state.descToDisplay = card.desc;
        console.log(state.descToDisplay);
      }
    });
  };

  /**
   * Réinitialise les cartes retournées
   * @returns {void}
   */
  const resetFlip = () => {
    setTimeout(() => {
      playData.value.forEach((card) => {
        if (
          card.id === state.oldIndex ||
          card.id === playData.value[index].id
        ) {
          card.active = false;
        }
      });
    }, 600);
  };

  if (state.isFirstCard) {
    playData.value[index].active = true;
    state.isFirstCard = false;
    state.oldIndex = playData.value[index].id;
  } else {
    if (state.oldIndex === playData.value[index].id) {
      playData.value[index].active = true;
      setMatchingCard();
      console.log("match");
    } else {
      playData.value[index].active = true;
      resetFlip();
    }
    state.isFirstCard = true;
  }
};
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

.memory__game div,
.memory__game div p {
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
