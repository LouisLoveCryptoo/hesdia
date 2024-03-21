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

              <nuxt-link to=""><img class="validation" src="../assets/img/validation.svg" alt=""></nuxt-link>
            
        </div>

            <div class="trucChiant">
                <nuxt-link to="">Tous droits réservés</nuxt-link> |
                <nuxt-link to="">Mentions légales</nuxt-link> |
                <nuxt-link to="">Politique de confidentialité</nuxt-link> |
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
    height: 400px;
    background-color: var(--bg-color-secondary);
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
    width: 50%;
    padding: 10px;
    border-radius: 5px;
  }
  
  .logo-mail {
    border-right: 1px solid black; /* couleur de la bordure adaptée à l'image */
    padding-right: 10px; /* espace entre l'icône et la bordure */
  }

  .logo-mail{
    display: flex;
    align-items: center;
  }
  
  .input-mail {
    border: none; /* retirer la bordure de l'input */
    outline: none; /* retirer l'outline pour ne pas avoir de bordure lors du focus */
    margin-left: 10px; /* espace entre l'icône et l'input */
    font-size: 16px; /* ajuster la taille de la police au besoin */
    width: 100%; /* l'input prend tout l'espace restant */
    background-color: transparent;
  }
  .logo-mail img.validation{

  }

</style>