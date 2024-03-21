<template>

  <div class="container">
    <div class="content">
      <h1>Viens lire</h1>
      <h3>nos nouveaux articles !</h3>
    </div>
      <img class="bras" src="../assets/img/bras.svg" alt="">

  </div>

  <div class="nouveauxArticles">
      <div class="gauche">
        <articlePhoto />
        <articleText />
      </div>

      <div class="droite">
        <ArticleText />
        <articlePhotoLeft />
      </div>

      <button-phone path="/blog" :phone="false">
        Voir toutes les actualités
      </button-phone>

  </div>

 <div class="les-nouveaux-commerçants__container">
  <lesNouveauxCommercants />
 </div>

  <div class="itw">
    <h2>Nos interviews et témoignages </h2>
    <svg width="122" height="114" viewBox="0 0 122 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.0112 7.59024C21.3863 17.5775 13.5794 35.0461 17.4106 62.9352C17.6464 64.6515 19.7016 65.4205 20.9953 64.2634C29.0323 57.0588 50.304 35.5694 47.1612 12.3075C45.9591 3.3836 34.4752 0.439034 29.0112 7.59024Z" fill="#FF8800"/>
      <path d="M72.2201 34.5611C60.0754 37.7953 43.218 46.841 29.1886 71.2471C28.3239 72.753 29.4828 74.6155 31.2122 74.4914C41.9773 73.707 71.9486 69.7187 83.6947 49.3946C88.2023 41.5971 80.923 32.2496 72.2201 34.5611Z" fill="#FF8800"/>
      <path d="M92.8035 78.6818C80.6472 75.5077 61.5158 75.0619 37.2801 89.3775C35.7844 90.2612 35.8751 92.4531 37.4458 93.1942C47.1934 97.818 75.241 109.132 95.4785 97.2424C103.243 92.6801 101.522 80.955 92.8095 78.6839L92.8035 78.6818Z" fill="#FF8800"/>
      </svg>

    <div class="interview">
      
      <interview class="component" />
      <interview class="component"/>
      <interview class="component"/>
      
  </div>

  </div>












</template>

<style scoped>
.les-nouveaux-commerçants__container{
  margin-top: 100px;
}

.container{
  position: relative;
  height: 90vh;
  width: 100vw;


}
.content h1, h3, p{
  color: var(--color-text);
}

.content{
  padding: 10% 0 0 0;
  display:flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: left;
  margin: 0 10%;

}

.content h1{
  font-size: 64px;
  font-weight: 700;
}

.content h3{
  font-size: 62px;
  font-weight: 400;
  padding-left:50px;
}

.bras{
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 30%;
  height: auto;
}


.nouveauxArticles{
  display: flex;
  flex-direction: row;
  gap: 420px;
  justify-content: center;
  align-items: center;
  padding-left:15%;

}

.nouveauxArticles .gauche{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}


.nouveauxArticles .droite{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}




.motion{
  display: flex;
  margin-top: 5%;

}


.motion img{
  height: 500px;
  width: 1500px;
  object-fit: cover;
}

.motion .infos{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
  background-color: var(--bg-color-main);
  gap: 50px;

}

.motion h2{
  font-size: 32px;
  font-weight: 700;
  text-align: left;
}

.motion p{
  font-size: 16px;
  max-width: 300px;
}

.motion button{
  width:150px;
  background-color: var(--color-orange-dark);
  color: var(--color-text);
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: ease 0.3s;

}

.motion button:hover{
  background-color: var(--color-orange-light);
  transition: ease 0.3s;
}

.itw{
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: var(--color-orange-light);
  position: relative;

}

.itw h2{
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color:white;
}


.itw .interview{
  display: flex;
  gap: 10px;
  justify-content: space-around;
  margin-top:5%;
}

.itw svg{
  position: absolute;
  top: 40px;
  left: 600px;
  z-index: 10;
  width: 5%;
  height: auto;
}

  



@media (max-width: 1200px) {

  .content{
      padding: 20% 0 0 0;
      display:flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-between;
      align-items: left;
      margin: 0 10%;

  }
  .content h1{
    font-size: 36px;
  }

  .content h3{
    font-size: 32px;
  }

  .bras{
    top: 200px;
    right: 0;
  }

  .nouveauxArticles{
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-top:-150px;
    gap:20px;

  }

  .itw .interview{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;
    margin-top:5%;
  }
}



@media (max-width: 800px) {

    .content{
      padding: 35% 0 0 0;
      display:flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-between;
      align-items: left;
      margin: 0 10%;

    }
    .content h1{
      font-size: 24px;
    }

    .content h3{
      font-size: 20px;
    }

    .bras{
      top: 200px;
      right: 0;
    }

    .nouveauxArticles{
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-top:-150px;
      gap:20px;

    }

    .itw svg{
      top: 10px;
      left: 550px;
      z-index: 10;
      width: 10%;
      height: auto;
    }



}
</style>
