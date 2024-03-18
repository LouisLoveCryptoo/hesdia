<template>
  <main>
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
        <strong>Title : </strong>{{ el.title }} <strong>ID : </strong
        >{{ el.id }} <strong>Content : </strong>{{ el.content }}
      </article>
      <div class="play__response" v-if="response.show">
        <span :class="
                response.isCorrect ? 'correct' : 'wrong'
        ">
          {{ response.desc }}
        </span>
      </div>
    </div>
  </main>
</template>
<script setup>
/**
 * Objet réactif pour les données du jeu
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
 * Qui initialise la réponse et ses détails (show, isCorrect, desc)
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

  response.show = true;
  response.desc = choice ? dataToCompare[0].desc : dataToCompare[1].desc;
  response.isCorrect = res;
};

/**
 * Reste à faire :
 *  - Bouton Next/Restart
 *  - Afficher le score
 *  - Afficher l'avancement
 */
</script>
<style>
.play__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #000;
}

.correct {
  color: green;
}
.wrong {
  color: red;
}
</style>
