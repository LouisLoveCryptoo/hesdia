<template>
    <div class="wordGuessContainer">
      <h2>Trouve le bon mot !</h2>
      <h1 v-if="status === 'Success'">GG! Tu l'as</h1>
      <h1 v-else-if="status === 'Failure'">OH NO! Tu l'as pas</h1>
  
      <br><br>
      <p>{{ playData[currentId].hint }}</p>
      <br>
      <p>Lettres correctes : </p>
      <input type="text" v-model="text" @input="consoleLogText()" @keydown="handleKeyDown($event)">

      <div v-if="greenLetters.length > 0">
        <p>Mot = </p>
        <ul>
          <li v-for="letter in greenLetters" :key="letter">{{ letter }}</li>
        </ul>
      </div>

      <br><br>
      <p>Insère le mot trouvé : </p>

      <form @submit.prevent="checkAnswer">
        <input type="text" v-model="answer" placeholder="Réponse"> 
        <button type="submit">Valider</button>
      </form>
      
      <br><br>

      <p>Nombre d’essai restant : </p>
      <button v-if="status === 'Success'" @click="nextWord">Mot suivant</button>
     
      <button v-if="failureCount > 5" @click="showHint">Besoin d'aide ?</button>
      <div v-if="guessedLetter">
        <p>Lettre devinée : {{ guessedLetter }}</p>
      </div>
  

    <h4>Nombre d'échecs : {{ failureCount }}</h4>
    <h4>Statut actuel : {{ status }}</h4>
    <button @click="playAgain">Play Again</button>
    
  
  
  
  
  
  
  <div>

    <img class="interrogationPOINT" src="@/assets/img/interrogationPOINT.svg" alt="">
    <img class="arrow" src="@/assets/img/arrow.svg" alt="">
  </div>
  </div>


</template>
  
<style scoped>
  .wordGuessContainer{
    padding: var(--sides-padding);
    padding-top: 200px;
    padding-left: 300px;
    height: 100vh;
  }

  .wordGuessContainer img.arrow{
    position: absolute;
    left: 0px;
    top: 250px;
  }

  .wordGuessContainer img.interrogationPOINT{
    position: absolute  ;
    right: 50px;

    
  }
</style>

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
  