<template> 
<footer>
    <div class="left">
        <img src="../assets/img/logo.svg" alt="">
    </div>

    <div class="center">
        <div class="top">
            <nuxt-link to="">Besoin d’aide ?</nuxt-link>
            <nuxt-link to="">Média</nuxt-link>
            <nuxt-link to="">Play</nuxt-link>
        </div>

        <div class="bottom">
            <nuxt-link to=""><img src="../assets/img/insta.svg" alt=""></nuxt-link>
            <nuxt-link to=""><img src="../assets/img/tiktok.svg" alt=""></nuxt-link>
            <nuxt-link to=""><img src="../assets/img/spotify.svg" alt=""></nuxt-link>
            <nuxt-link to=""><img src="../assets/img/antene.svg" alt=""></nuxt-link>
            <nuxt-link to=""><img src="../assets/img/dixheurespremium.svg" alt=""></nuxt-link>
        </div>
    </div>

    <div class="right">
        <div class="mail">
            <div class="logo-mail">
                <img src="../assets/img/mail.svg" alt="Icône de mail">
            </div>
          
              <input type="email" class="input-mail" placeholder="Adresse mail">

              <nuxt-link to="#">
                <img class="validation" src="../assets/img/validation.svg" alt="Icône de validation">
              </nuxt-link>
              
            
        </div>

            <div class="trucChiant">
                <nuxt-link to="">Tous droits réservés</nuxt-link> |
                <nuxt-link to="">Mentions légales</nuxt-link> |
                <nuxt-link to="">Politique de confidentialité</nuxt-link> 
            </div>
    </div>

</footer>
</template>

<style scoped>
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: var(--bg-color-secondary);
    padding: var(--sides-padding);
    overflow: hidden;
}

.center{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

}

.center .top{
    display: flex;
    gap: 20px;
    font-weight: bold;

}

.center .top a{
    cursor: pointer;
}

.center .bottom{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.mail {
    display: flex;
    align-items: center;
    border: 1px solid black;
    width: 70%;
    padding: 10px;
    border-radius: 5px;
  }
  
  .logo-mail {
    border-right: 1px solid black;
    padding-right: 10px; 
  }

  .logo-mail{
    display: flex;
    align-items: center;
  }
  
  .input-mail {
    border: none; 
    outline: none;
    margin-left: 10px; 
    font-size: 16px;
    width: 100%; 
    background-color: transparent;
  }

  .validation{
    display: flex;
    align-items: center;
  }
  img.validation{
    min-width: 20px;
    min-height: 20px;
    border-left: 1px solid black;
    padding-left: 10px;
    cursor: pointer; 
  }

  .trucChiant{
    padding-top: 20px;
    opacity: 0.6;
  }

  .trucChiant a{
    font-size: 12px;
    cursor: pointer;
  }

    @media screen and (max-width: 1200px) {
        footer{
            flex-direction: column;
            align-items: center; 
            gap: 25px;
        }

        .right .mail{
            width: 100%;
            display: flex;
            align-items: center;
        }

        .right .trucChiant{
            width: 100%;
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (max-width: 800px) {
        footer{
            flex-direction: column;
            align-items: center; 
            gap: 25px;
        }

        .right .mail{
            width: 100%;
            display: flex;
            align-items: center;
        }

        .right .trucChiant{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    
</style>