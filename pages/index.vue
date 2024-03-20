
import doubleTrukContainer from '~/components/doubleTrukContainer.vue';
<template>
<div class="homeContainer">
  <div class="text">
    <h1 class="strong">Avec Hesdia,</h1>
    <div class="textImg">
      <h1 class="notStrong">luttons pour un web sans peur</h1>
      <img class="epis" src="../assets/img/epis.svg" alt="" />

    </div>
  
    <p>Le média de prévention contre le cyber-harcèlement pour les jeunes</p>
  </div>


  <div class="buttonImg">
    <div class="button">
      <button-transparant path="/#">
        Besoin d'aide ?
      </button-transparant>

      <button-phone path="/#" :phone="true">
        Numéro prévention
      </button-phone>
    </div>

  <img class="bonhomme-pouce" src="../assets/img/bonhomme-pouce.svg" alt="" />
  </div>

</div>
  
<LesNouveauxCommercants />
<ArticlesContainer />
<vingtSeptContainer />
<doubleTrukContainer />
<SoloTrukContainer />

</template>

<style scoped>
/*homeContainer*/
.homeContainer{
  display: flex;
  flex-direction: column;
  padding: var(--sides-padding);
  height: 100vh;
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

.textImg{
  display: flex;
}

.textImg img.epis{
  margin-top: -80px;
}



h1.strong{
  font-weight: 900;
}

h1.notStrong{
  font-weight: 300;
}

p{
  margin-top: 2rem;
}


.buttonImg{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.button{
  display: flex;
  flex-direction: column;
  gap: 20px;
}


 .buttonImg img.bonhomme-pouce{
  width: 300px;
  padding-right: 40px;
}

</style>