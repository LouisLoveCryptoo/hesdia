<template>
    <div>
        <h4>Nombre d'échecs : {{ failureCount }}</h4>
        <h4>Statut actuel : {{ status }}</h4>
      <h1>Trouveeeee (Press any key)</h1>
      <h3>ID = {{ playData[currentId].id }}</h3>
      <h3>{{ playData[currentId].word }}</h3>
      <h3>{{ playData[currentId].hint }}</h3>
      <button @click="playAgain">Play Again</button>

      <br>

      <input type="text" v-model="text" @input="consoleLogText()" @keydown="handleKeyDown($event)">

      <div v-if="greenLetters.length > 0">
        <p>Mot = </p>
        <ul>
          <li v-for="letter in greenLetters" :key="letter">{{ letter }}</li>
        </ul>
      </div>

      <form @submit.prevent="checkAnswer">
        <input type="text" v-model="answer" placeholder="Réponse">
        <button type="submit">Valider</button>
      </form>

      <h1 v-if="status === 'Success'">GG! Tu l'as</h1>
      <h1 v-else-if="status === 'Failure'">OH NO! Tu l'as pas</h1>

      <button v-if="status === 'Success'" @click="nextWord">Mot suivant</button>

      <button v-if="failureCount > 5" @click="showHint">Besoin d'aide ?</button>



      <div v-if="guessedLetter">
        <p>Lettre devinée : {{ guessedLetter }}</p>
      </div>
    </div>
  </template>

  <script setup>
  const { data: playData } = useFetch("/api/play/word-guess");
  const text = ref('');
  const greenLetters = ref([]);
  const answer = ref('');
  const status = ref('');
  const currentId = ref(0);
  let failureCount = ref(0);
  const guessedLetter = ref('');

  /**
 * Parcourt chaque lettre du mot à deviner, si la lettre rentré dans le input="Text" et que celle ci n'est pas déjà dans la li "greenLetters" alors elle ajoute le mot
 * @return void
 */
  const consoleLogText = () => {
    const wordToGuess = playData.value[currentId.value].word;

    for (const letter of wordToGuess) {
      if (text.value.includes(letter) && !greenLetters.value.includes(letter)) {
        greenLetters.value.push(letter);
      }
    }
  };

    /**
 * Intercepte les touches pressées pour filtrer uniquement les lettres de l'alphabet et mettre à jour le texte entré
 * @return void
 */
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (/^[a-z]$/.test(key)) {
      text.value = key;
      consoleLogText();
      event.preventDefault();
    }
  };

  /**
 * Vérifie si la réponse correspond au mot à deviner et met à jour le statut Success Ou Failure
 * @return void
 */
 const checkAnswer = () => {
  if (answer.value.toLowerCase() === playData.value[currentId.value].word.toLowerCase()) {
    status.value = 'Success';
  } else {
    status.value = 'Failure';
    failureCount.value++;
  }
};

/**
 * Affiche le mot à deviner
 */
const showHint = () => {
    if (guessedLetter.value.length < playData.value[currentId.value].word.length) {
        const wordToGuess = playData.value[currentId.value].word;
        guessedLetter.value = wordToGuess;
    }
};

 /**
 * Réinitialise les valeurs pour rejouer
 * @return void
 */
  const playAgain = () => {
    text.value = '';
    greenLetters.value = [];
    answer.value = '';
    status.value = '';
    failureCount.value = 0;
    guessedLetter.value = '';

  };

/**
 * Passe au mot suivant en mettant à jour l'id et réinitialise les valeurs
 * @return void
 */
  const nextWord = () => {
    currentId.value++;
    failureCount.value = 0;
    guessedLetter.value = '';
    playAgain();
  };
  </script>
