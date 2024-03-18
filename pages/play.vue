<template>
  <main>
    <div :style="slideStyle" class="play__main">
      <div
        class="play__container"
        v-for="(play, index) in pairPlayData"
        :key="index"
      >
        <div class="play__buttons">
          <button @click="gameResponse(1, play.id)">+</button>
          <button @click="gameResponse(0, play.id)">-</button>
        </div>
        <article
          class="play__card"
          v-for="(el, indexCard) in playData.slice(play.id - 1, play.id + 1)"
          :key="indexCard"
        >
          <p>{{ el.title }}</p>

          <p v-if="response.show || indexCard % 2 === 0">
            {{ el.content }}
          </p>
        </article>
        <div class="play__response" v-if="response.show">
          <span :class="response.isCorrect ? 'correct' : 'wrong'">
            {{ response.desc }}
          </span>
          <button @click="nextSlide()">Prochain Challenge</button>
        </div>
      </div>
    </div>
    <div class="progress__bar">
      <span
        v-for="index in (pairPlayData.length)"
        :key="index"
        :class="{ active: index <= response.currentId }"
      ></span>
    </div>
  </main>
</template>
<script setup>
/**
 * Objet réactif pour fetch les données du jeu
 * @type {object}
 */
const { data: playData } = useFetch("/api/play");

/**
 * Objet réactif pour la réponse du jeu
 * @type {object}
 */
const response = reactive({
  show: false,
  desc: "",
  isCorrect: false,
  id: 0,
  score: 0,
  currentId: 0,
});

/**
 * Fonction pour filtrer les données du jeu pour les afficher par paire
 * @returns {void}
 */
const pairPlayData = computed(() => {
  return playData.value.filter((_, index) => index % 2 === 0);
});

/**
 * Fonction avec la logique du jeu pour comparer les données
 * Qui initialise la réponse et ses détails (show, isCorrect, desc, score)
 *
 * @param {number} choice
 * @param {number} id
 * @returns {void}
 */
const gameResponse = (choice, id) => {
  const dataToCompare = playData.value.filter(
    (data) => data.id === id || data.id === id + 1
  );

  let res = false;
  if (choice === 1) {
    dataToCompare[0].content > dataToCompare[1].content
      ? (res = true)
      : (res = false);
  } else {
    dataToCompare[0].content < dataToCompare[1].content
      ? (res = true)
      : (res = false);
  }

  res ? response.score++ : null;
  response.show = true;
  response.desc = choice ? dataToCompare[0].desc : dataToCompare[1].desc;
  response.isCorrect = res;
  response.id = id;
  response.currentId++;
};

/**
 * Objet réactif pour le style du slide
 * @type {object}
 */
const slideStyle = ref("");

/**
 * Fonction pour le slide suivant
 * @returns {void}
 */
const nextSlide = () => {
  const style = `transform: translateX(-${response.currentId}00%)`;
  slideStyle.value = style;
  response.show = false;
};

/**
 * Reste à faire :
 *  - Afficher l'avancement
 */
</script>
<style>
.play__main {
  display: flex;
  transition: transform 0.5s;
}

.play__container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 20px;
  border: 1px solid #000;
  min-height: 100vh;
  min-width: 100vw;
}

.play__card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.correct {
  color: green;
}
.wrong {
  color: red;
}

.progress__bar {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: absolute;
  bottom: 0;
}

.progress__bar span {
  display: block;
  width: 100%;
  height: 10px;
  background: cadetblue;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s ease;
}

.progress__bar span.active {
  transform: scale(1);
}
</style>
