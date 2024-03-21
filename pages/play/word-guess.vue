<template>
  <div class="wordGuessContainer">
    <div class="title">
      <h2>Trouve le bon mot !</h2>
    </div>

    <p>{{ playData[currentId].hint }}</p>

    <div class="input-area">
      <p>Lettres correctes :</p>
      <input type="text" v-model="text" @input="consoleLogText()" @keydown="handleKeyDown($event)">
    </div>

    <div v-if="greenLetters.length > 0" class="lettres">
      <p>Lettres présentes dans le mot :</p>
      <div class="mots">
        <ul>
          <li v-for="letter in greenLetters" :key="letter">{{ letter }}</li>
        </ul>
      </div>
    </div>

    <form class="motTrouve" @submit.prevent="checkAnswer">
      <input type="text" v-model="answer" placeholder="Réponse">
      <button type="submit">Valider</button>
    </form>

    <div class="game-info"> 
      
      <button 
      :class="{ 'button-active': aideCount <= 0, 'button-inactive': aideCount > 0 }"
      :disabled="aideCount > 0"
      @click="showHint">
      Besoin d'aide ? <span v-show="aideCount > 0">{{ aideCount }}</span>
    </button>


      <button @click="playAgain">Play Again</button>
      
      <p>Nombre d'échecs : {{ failureCount }}</p>
    </div>

    <div v-if="guessedLetter">
      <p>Lettre devinée : {{ guessedLetter }}</p>
    </div>

    <div class="resulat">
      <div v-if="status === 'Success' || status === 'Failure'" class="resultat">
        <h2 v-if="status === 'Success'">GG! Tu l'as</h2>
        <h2 v-else-if="status === 'Failure'">OH NO! Tu l'as pas</h2>
    </div>
    <button class="motsuivant" v-if="status === 'Success'" @click="nextWord">Mot suivant</button>

  </div>

  <img class="interrogationPOINT" src="@/assets/img/interrogationPOINT.svg" alt="">
  <img class="arrow" src="@/assets/img/arrow.svg" alt="">
</div>
</template>



<style scoped>
.wordGuessContainer {
  padding: var(--sides-padding);
  padding-top: 20px;
  height: 100vh;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.title h2 {
  margin: 10px 0;
}

.game-info{
  display: flex;
  align-items: center;
}

.input-area{
  display: flex;
  align-items: center;
}

.input-area, .lettres, .motTrouve, .game-info {
  width: 100%;
  max-width: 600px; 
  margin: 10px 0;
}

.input-area p, .lettres p {
  text-align: left;
}

.mots ul {
  display: flex;
  padding: 0;
  list-style-type: none;
}

.mots li {
  background-color: var(--color-orange-dark);
  color: white;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 5px;
}

.motTrouve {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.motTrouve input[type="text"] {
  flex-grow: 1;
}

.input-area input[type="text"]{
  margin-left: 10px;
}

.motTrouve input[type="text"], .input-area input[type="text"] {
  padding: 10px;
  margin-right: 10px;
  border: 2px solid var(--color-orange-dark);
  border-radius: 5px;
  gap: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: var(--color-orange-dark);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.motTrouve button:hover, .game-info .button-active:hover {
  background-color: var(--color-orange-light);
}

.game-info {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}

.button-inactive {
  background-color: #ccc; 
  color: #666;
  cursor: not-allowed; 
}

.button-active {
  background-color: var(--color-orange-dark); 
  color: white; 
  cursor: pointer;
}

.button-inactive:hover, .button-active:hover {
  background-color: var(--color-orange-light); 
}

.resulat{
  padding-top: 20px;
  min-height: 50px; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.motsuivant{
  margin-top: 20px;
}

.wordGuessContainer img.arrow{
  position: absolute;
  left: 0px;
  top: 250px;
  z-index: -1;
}

.wordGuessContainer img.interrogationPOINT{
  position: absolute  ;
  right: 50px; 
  z-index: -1;
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
  const aideCount = ref(5);
  
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
    if (aideCount.value > 0) {
      aideCount.value--; // Decrement aideCount when there's a failure
    }
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
    aideCount.value = 5; 
    playAgain();
  };
  </script>
  