<style>

.choix {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.answer_choix{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

}


</style>

<template>


  <div class="answer_container" v-if="answer_id">
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
    
    <h4>
      Tu as choisis : 
      {{
        playData[id - 1].context.answers[answer_id - 1].content
      }}. <br>
      Puis 
      {{
        playData[id - 1].context.answers[answer_id - 1].next_question.context.answers[choice_id - 1].content
      }}.  <br>Voici ce qu tu obtiens 
      
      {{
        playData[id - 1].context.answers[answer_id - 1].next_question.context.answers[choice_id - 1].next_question.conclusion
      }}
    </h4>

    <button @click="answer_id = null; choice_id = null">Recommencer</button>
  
  </div>

<div class="container" v-if="!answer_id">
    <div>
      <h1>
        {{ playData[id - 1].title }}
      </h1>
      <h4>
        {{ playData[id - 1].context.question }}
      </h4>
    </div>

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
  