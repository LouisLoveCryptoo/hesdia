<style scoped>
.gameplay {
  height: 100vh;
  background-color: var(--bg-color-secondary);
  position: relative;
}

.jeu {

  padding: 5% 20% 0 20%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap:20px;
  margin-top: 50px;
}

.container h1{
  color: var(--color-text);
  font-size: 36px;
}

.container h4{
  color: var(--color-text);
  font-size: 16px;
}

.container .choix {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

}

.container .choix div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:7% 2%;
  background-color: var(--bg-color-main);
  border-radius: 15px;

}

.gameplay  p {
  color: var(--color-text);
  font-size: 20px;
  max-width: 250px;
  height: 150px;
  text-align: center;
}

.gameplay button {
  margin-top: 10px;
  background-color: var(--color-orange-dark);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}



.gameplay svg{
  position:absolute;
  left: 0;
  top: 180px;
}

.answer_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap:20px;
  margin-top: 50px;


}

.answer_choix{
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.answer_choix div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:7% 2%;
  background-color: var(--bg-color-main);
  border-radius: 15px;
}

.answer_container h1{
  color: var(--color-text);
  font-size: 36px;
}

.answer_container h4{
  color: var(--color-text);
  font-size: 16px;
}

.choice_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  margin-top: 50px;
}

.choice_container div {
  display: flex;
  flex-direction: column;
  padding:2% 2%;
  background-color: var(--bg-color-main);
  border-radius: 15px;
  gap: 20px;
}

.choice_container h4{
  color: var(--color-text);
  font-size: 16px;
}

.choice_container button {
  margin-top: 10px;
  background-color: var(--color-orange-dark);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
}
</style>

<template>
<div class="gameplay">
<div class="jeu">
  <div class="answer_container" v-if="answer_id">
    <h1>
      {{ playData[id - 1].title }}
    </h1>
    <h4>
      {{
        playData[id - 1].context.answers[answer_id - 1].content
      }}
    </h4>
    <div class="answer_choix">
      <div>
        <p v-if="playData && playData.length > 0">
          {{
            playData[id - 1].context.answers[answer_id - 1].next_question.context.answers.find(answer => answer.choice_id === 1).content
          }}
        </p>
        <button @click="choice_id = 1">CHOISIR</button>
      </div>
      <div>
        <p v-if="playData && playData.length > 0">
          {{
            playData[id - 1].context.answers[answer_id - 1].next_question.context.answers.find(answer => answer.choice_id === 2).content
          }}
        </p>
        <button @click="choice_id = 2">CHOISIR</button>
      </div>
      <div>
        <p v-if="playData && playData.length > 0">
          {{
            playData[id - 1].context.answers[answer_id - 1].next_question.context.answers.find(answer => answer.choice_id === 3).content
          }}
        </p>
        <button @click="choice_id = 3">CHOISIR</button>
      </div>
    </div>
  </div>

  <div class="choice_container" v-if="choice_id">

    <div>
      <h4>
        Tu as choisis :
        {{
          playData[id - 1].context.answers[answer_id - 1].content
        }}.
      </h4>
      <h4>
        Puis
        {{
          playData[id - 1].context.answers[answer_id - 1].next_question.context.answers[choice_id - 1].content
        }}.
      </h4>
      <h4>
        Voici ce qu tu obtiens
        {{
          playData[id - 1].context.answers[answer_id - 1].next_question.context.answers[choice_id - 1].next_question.conclusion
        }}
      </h4>
    </div>

    <button @click="answer_id = null; choice_id = null">Recommencer</button>

  </div>

<div class="container" v-if="!answer_id && playData">
      <h1>
        {{ playData[id - 1].title }}
      </h1>
      <h4>
        {{ playData[id - 1].context.question }}
      </h4>

  <div class="choix">
    <div>
      <p v-if="playData && playData.length > 0">
        {{
          playData[id - 1].context.answers.find(answer => answer.answer_id === 1).content
        }}
      </p>
      <button @click="answer_id = 1">CHOISIR</button>
    </div>
    <div>
      <p v-if="playData && playData.length > 0">
        {{
          playData[id - 1].context.answers.find(answer => answer.answer_id === 2).content
        }}
      </p>
      <button @click="answer_id = 2">CHOISIR</button>
    </div>
    <div>
      <p v-if="playData && playData.length > 0">
        {{
          playData[id - 1].context.answers.find(answer => answer.answer_id === 3).content
        }}
      </p>
      <button @click="answer_id = 3">CHOISIR</button>
    </div>
  </div>
</div>

</div>
<svg width="241" height="254" viewBox="0 0 241 254" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-12.0469 76.3676L13.5412 183.798C13.5412 183.798 26.0527 196.977 26.0678 180.343C26.0932 161.378 8.73076 117.543 4.26734 84.8563C2.44105 71.4934 0.521417 56.0292 7.81077 39.0136C9.87416 34.2056 17.4008 16.6206 35.9085 7.71133C65.3978 -6.48935 96.1189 14.1366 97.6245 15.1861C97.6245 15.1861 113.944 31.5305 117.225 48.8934C120.498 66.2559 131.209 95.0956 131.209 95.0956C131.209 95.0956 133.628 103.051 160.208 96.1904L173.133 138.416C173.133 138.416 129.182 157.017 113.352 143.721C97.5215 130.417 79.1695 111.881 77.8302 83.1014C76.4996 54.3224 60.9929 56.4562 60.9929 56.4562C60.9929 56.4562 42.6741 53.0454 53.7187 88.8467C64.7633 124.648 88.173 201.748 63.6447 226.538C39.1167 251.319 19.1018 244.814 19.1018 244.814C19.1018 244.814 -8.94846 242.849 -17.5317 221.652C-26.1063 200.455 -12.0473 76.3762 -12.0473 76.3762L-12.0469 76.3676Z" fill="#FFA750"/>
  <path d="M185.535 90.6809L205.782 87.3794C205.782 87.3794 213.704 89.9574 210.135 97.1603C210.135 97.1603 225.049 100.667 216.742 106.897C216.742 106.897 225.331 107.825 219.165 115.897C219.165 115.897 254.448 114.233 222.746 126.003L196.972 131.858C196.972 131.858 228.176 153.65 192.544 145.114C170.027 139.715 170.041 138.205 170.041 138.205L159.247 96.4476L185.535 90.6809Z" fill="#FFA750"/>
  <path d="M210.621 97.1008C210.41 98.1029 210.199 99.1223 209.759 100.047C209.318 100.971 208.63 101.825 207.699 102.248C206.689 102.702 205.518 102.623 204.429 102.435C203.348 102.248 202.238 101.929 201.438 101.174C200.462 100.257 200.128 98.8111 200.239 97.4772C200.35 96.1434 200.864 94.8765 201.368 93.6352" fill="#FFA750"/>
  <path d="M210.621 97.1008C210.41 98.1029 210.199 99.1223 209.759 100.047C209.318 100.971 208.63 101.825 207.699 102.248C206.689 102.702 205.518 102.623 204.429 102.435C203.348 102.248 202.238 101.929 201.438 101.174C200.462 100.257 200.128 98.8111 200.239 97.4772C200.35 96.1434 200.864 94.8765 201.368 93.6352" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M216.392 107.03C214.969 108.375 213.437 109.629 211.678 110.487C209.919 111.335 207.9 111.76 205.981 111.368C204.063 110.976 202.281 109.7 201.564 107.878C200.847 106.055 201.375 103.744 202.971 102.622" fill="#FFA750"/>
  <path d="M216.392 107.03C214.969 108.375 213.437 109.629 211.678 110.487C209.919 111.335 207.9 111.76 205.981 111.368C204.063 110.976 202.281 109.7 201.564 107.878C200.847 106.055 201.375 103.744 202.971 102.622" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M220.124 115.648C218.621 117.258 218.595 118.638 216.665 119.687C214.735 120.736 213.421 121.239 211.24 120.941C209.058 120.643 206.964 119.399 205.924 117.46C204.875 115.53 205.051 112.921 206.553 111.32" fill="#FFA750"/>
  <path d="M220.124 115.648C218.621 117.258 218.595 118.638 216.665 119.687C214.735 120.736 213.421 121.239 211.24 120.941C209.058 120.643 206.964 119.399 205.924 117.46C204.875 115.53 205.051 112.921 206.553 111.32" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M196.621 131.551C197.372 127.893 193.03 124.251 190.231 121.78C187.433 119.309 183.877 117.906 180.406 116.549" fill="#FFA750"/>
  <path d="M196.621 131.551C197.372 127.893 193.03 124.251 190.231 121.78C187.433 119.309 183.877 117.906 180.406 116.549" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
  </svg>


</div>
</template>

  <script setup>
  const route = useRoute();
  const id = ref(route.params.id);
  const answer_id = ref(route.query.answer_id)
  const choice_id = ref(route.query.choice_id)
  //   console.log(id.value, answer_id.value)
  const {data: playData} = useFetch("/api/play/conv-simulator");
  console.log(playData.value)



  </script>
