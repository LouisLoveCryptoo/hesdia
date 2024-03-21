<template>

  
<div class="container">
  <div class="text">
    <h1>Contacte</h1>
    <h3>la team Hesdia</h3>

    <p>Tu n’as pas trouvé de réponse dans <br> notre FAQ ? Contacte nous par email <br>via le formulaire ci dessous !</p>

  </div>
  <div class="etoiles">
    <img src="../assets/img/etoiles.svg" alt="">
  </div>
      

  <div class="coeur">
    <svg width="341" height="273" viewBox="0 0 341 273" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M188.454 32.7042C193.659 26.2037 207.796 9.02139 231.468 2.94635C261.912 -4.86639 287.938 11.0354 292.546 13.5682C329.676 33.9151 345.035 81.1397 340.066 121.321C335.187 160.742 312.621 198.133 283.768 224.88C269.088 238.487 252.252 249.786 233.93 257.871C180.708 281.358 115.269 276.56 67.5997 243.207C19.931 209.862 -7.17223 148.309 3.11653 91.0455C6.31657 73.2519 13.2241 55.4901 26.3372 43.0317C44.3786 25.8922 74.0022 20.9037 97.0854 29.1214C136.238 43.0619 144.555 92.0124 160.282 88.5558C171.71 86.0474 166.255 60.4456 188.454 32.697L188.454 32.7042Z" fill="#FF8800"/>
      <path d="M139.63 141.589C144.882 141.111 148.751 136.467 148.274 131.216C147.796 125.964 143.152 122.095 137.9 122.572C132.649 123.05 128.779 127.694 129.257 132.946C129.735 138.197 134.379 142.066 139.63 141.589Z" fill="#F9EEE8"/>
      <path d="M183.268 137.619C188.519 137.141 192.389 132.497 191.911 127.246C191.433 121.994 186.789 118.125 181.538 118.602C176.286 119.08 172.417 123.724 172.894 128.976C173.372 134.227 178.016 138.097 183.268 137.619Z" fill="#F9EEE8"/>
      <path d="M152.096 173.795C157.511 176.371 163.881 176.876 169.639 175.195C175.398 173.513 180.489 169.664 183.672 164.577" stroke="#F9EEE8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M175.927 160.318C179.47 159.743 183.289 160.683 186.038 162.821C188.786 164.951 190.416 168.233 190.344 171.502" stroke="#F9EEE8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
  </div>
</div>

<!-- Formulaire de contact -->
<form >
  <select>
    <option value="vousEtes"> Vous êtes </option>
    <option value="eleve">Élève</option>
    <option value="parent">Parent</option>
    <option value="professeur">Professeur</option>
  </select>
  <div class="name-group">
    <input type="prenom" id="prenom"  placeholder="Prénom" required>
    <input type="nom" id="nom" placeholder="Nom" required>
  </div>
  <div class="contact-group">
    <input type="telephone" id="telephone" placeholder="Téléphone" required>
    <input type="email" id="email" placeholder="Email" required>
  </div>
  <div class="form-group">
    <textarea id="message" required></textarea>
  </div>
</form>
<div class="valid">
<div class="check-group">
  <input type="checkbox" id="cgu" required>
  <label for="cgu">J’accepte d’être contacté par email et téléphone par Hesdia</label>
</div>
<button type="submit">Envoyer</button>
</div>

<div class="box">
  <div class="faq">
    <div class="question">
      <h1>Tu as une question ?</h1>
      <p>Nous avons des réponses</p>
      <div v-for="(faq, index) in faqs" :key="`faq-${index}`" class="faq-item">
          <h4 @click="toggleFaq(index)">
            <span>{{ faq.question }}</span>
            <span class="arrow" :class="{ 'is-open': activeFaqIndex === index }"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fill-rule="nonzero"/></svg></span>
          </h4>
          <p v-if="activeFaqIndex === index" class="faq-answer">{{ faq.answer }}</p>
        </div>
    </div>
    <div class="svg">
      <svg width="237" height="263" viewBox="0 0 237 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 155.88C20.2206 142.706 24.5601 128.9 34.5766 119.166C48.7022 104.698 76.1659 104.891 84.4808 124.813C90.5442 142.171 77.1616 158.444 67.1822 172.035C54.4535 187.921 43.9764 205.116 36.1965 223.96" stroke="#FF8800" stroke-width="19.94" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46.7925 252.025C46.7479 260.028 36.8801 264.279 30.1702 261.024C22.16 257.599 21.7141 247.054 29.6203 243.153C36.3748 239.438 46.7777 243.681 46.7925 251.884V252.025Z" fill="#FF8800"/>
        <path d="M130 76.0907C135.68 58.3607 141.52 39.7806 155 26.6806C174.01 7.21063 210.97 7.47073 222.16 34.2807C230.32 57.6407 212.31 79.5407 198.88 97.8307C181.75 119.211 167.65 142.351 157.18 167.711" stroke="#FFA750" stroke-width="24.94" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M171.44 205.491C171.38 216.261 158.1 221.981 149.07 217.601C138.29 212.991 137.69 198.801 148.33 193.551C157.42 188.551 171.42 194.261 171.44 205.301V205.491Z" fill="#FFA750"/>
        <path d="M21.1939 29.3885C18.9904 37.1239 22.1724 45.206 23.7904 53.0877C24.8613 58.3114 25.2465 63.6738 24.9229 68.9899" stroke="#FFA750" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47.2428 64.6369C46.2027 50.422 45.1627 36.2072 44.1226 22" stroke="#FFA750" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M60.88 29.8663C42.5355 34.7048 23.6748 37.5939 4.72937 38.4722" stroke="#FFA750" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56.0955 55.1062C41.9423 57.6949 27.4654 58.5424 13.0964 57.6102" stroke="#FFA750" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </div> 
      
</div>

<div class="numPhone">
  <button-phone path="/#" :phone="true">
    Numéro prévention
  </button-phone> 
</div>

</div>


  
    


  
</template>

<script>

export default {
  data() {
    return {
      activeFaqIndex: null, // Indice de la FAQ actuellement active
      faqs: [
        { question: "Quel est le numéro d'urgence ?", answer: "Le numéro à composer en cas de cyber-harcèlement varie selon les pays. En France, par exemple, vous pouvez contacter le 3018. Ce numéro, gratuit et confidentiel, est destiné à l'écoute, au conseil, et à l'orientation des personnes victimes de cyber-harcèlement, ainsi qu'à leurs proches. Il est accessible du lundi au samedi." },
        { question: "Quels sont les différents types de cyber-harcèlement ?", answer: "Le cyber-harcèlement peut prendre plusieurs formes, dont : Messages haineux ou menaçants : Envoyés par e-mail, SMS, ou sur les réseaux sociaux. Diffamation : Propagation de rumeurs ou d'informations fausses pour nuire à la réputation d'une personne. Usurpation d'identité : Utilisation des données personnelles de quelqu'un pour créer de faux profils ou pour commettre des actes malveillants. Publication de contenus embarrassants ou intimes : Sans le consentement de la personne concernée. Cyberstalking : Surveillance en ligne excessive et obsessionnelle qui s'accompagne souvent de menaces. Exclusion sociale en ligne : Isolement intentionnel d'une personne sur les plateformes numériques." },
        { question: "Que faire si je suis victime ou témoin de cyber-harcèlement ?", answer: "Si vous êtes victime ou témoin de cyber-harcèlement, voici quelques étapes à suivre : Ne répondez pas aux provocations. Cela pourrait aggraver la situation. Conservez les preuves. Capturez des écrans des messages ou contenus nuisibles. Bloquez l'agresseur sur les plateformes où le harcèlement a lieu. Parlez-en à une personne de confiance (un parent, un ami, un enseignant, etc.) pour obtenir du soutien. Signalez les contenus abusifs aux plateformes et réseaux sociaux utilisés pour le harcèlement. Contactez le numéro d'urgence spécifique à votre pays pour le cyber-harcèlement. Portez plainte auprès des autorités compétentes si le harcèlement persiste ou est particulièrement grave." },
        { question: "Quels signes peuvent vous alerter d'une situation de cyber-harcèlement ?", answer: "Les signes pouvant indiquer que quelqu'un est victime de cyber-harcèlement incluent : Changements soudains dans l'utilisation des appareils électroniques, comme les éviter ou les utiliser excessivement. Émotions fortes (colère, tristesse, anxiété) après l'utilisation des appareils électroniques. Reluctance à participer à des activités sociales ou scolaires. Changements dans les performances scolaires. Signes de stress, d'anxiété, ou de dépression. Évitement des discussions sur ce qu'ils font en ligne." },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
    },
  },
}




</script>

<style scoped>

.container h1, h3, p{
  color: var(--color-text);
}

.container{
  padding: 10% 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  position: relative;
}

.container svg{
  width: 90%;
}


.container .etoiles{
  position: absolute;
  top: 70px;
  right: 400px;
  z-index: -1;
}

.container .coeur{
  position: absolute;
  bottom: -50px;
  right: 0px;
  z-index: -1;
}

.container .text {
  display:flex;
  flex-direction: column;
  gap: 10px;
}

.container .text h1{
  font-size: 64px;
  font-weight: 700;
}

.container .text h3{
  font-size: 62px;
  font-weight: 400;
  padding-left:50px;
}

.container .text p{
  font-size: 23px;
  font-weight: 300;
  padding-top: 50px;
  padding-left:50px;

}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10% 10% 0 10%;
}

form select {
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  color:black;
  border: 0;
  background-color: #E3E1E1;
  border-radius:5px;
  width:100%;
}




form .form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width:100%;
}


form .contact-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width:100%;
  
}

form .name-group {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width:100%;
}

form input, form textarea {
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  background-color: var(--bg-color-secondary);
  border: 2px solid #949595;
  border-radius:5px;
  width:100%;
}

form input:focus, form textarea:focus{
  outline: none;
  border: 2px solid var(--color-orange-dark);
}

form textarea{
  height: 200px;
}



.valid{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 5% 10%;

}

.valid button {
  width: 15%;
  padding: 10px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: var(--color-orange-dark);
  border: 0;
  border-radius:5px;
  cursor: pointer;
  transition: all 0.3s;
}

.valid button:hover {
  background-color: var(--color-orange-light);
  transition: all 0.3s;
}

.valid button:active {
  transform: scale(0.95);
}

.valid .check-group{
  display: flex;
  justify-content:center;
  cursor: pointer;
}


.box{
  background-color: var(--color-text);
}

.box h1, .box p, .box h4{
  color: #fff;
}

.box .faq{
  display: flex;
  padding: var(--sides-padding);
  justify-content: center;
  gap: 20px;
}

.box .faq h1{
  font-size: 40px;
  font-weight: 500;
}

.box .faq p{
  font-size: 24px;
  font-weight: 300;
}

.box .faq h4{
  font-size: 24px;
  font-weight: 500;
}

.box .faq .question{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.box .faq .question div{
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top:50px;
}

.box .faq .question div h4{
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}


.box .faq .question div .arrow svg{
  fill:#fff;
  width: 50px;
  cursor:pointer;
  transition: all 0.5s;
}

.box .faq .question div .arrow.is-open svg{
  transform: rotate(90deg);
  transition: all 0.5s;
}

.box .faq .question div p{
  max-width:950px;
}



.box .faq .svg svg{
  width:70%;
}

.box .numPhone{
  display: flex;
  justify-content: right;
  padding: 0 5% 5% 0;

}









/* Responsive */
@media (max-width: 700px) {

  .container{
    margin-bottom: 35%;
  }

.container .text{
  margin-top: 35%;
}

  .container svg{
    width: 40%;
  }

  .container .etoiles{
    top: 75px;
    right: 50px;
  }
  
  .container .coeur{
  
    bottom: -200px;
    right: -150px;
  
  }
  .container .text h1 {
    font-size: 24px;
  }

  .container .text h3 {
    font-size: 24px;

  }

  .container .text p {
    font-size: 9px;
    padding-top: 30px;

  }

  form select {
    padding: 10px;
    font-size: 8px;
    font-weight: 300;
    color:black;
    border: 0;
    background-color: #E3E1E1;
    border-radius:5px;
    width:100%;
  }

  form input, form textarea {
    padding: 10px;
    font-size: 8px;
    font-weight: 300;
    border: 1px solid #949595;
    border-radius:5px;
    width:100%;
  }

  form textarea {
    height: 100px;
  }

  .valid .check-group label{
    font-size: 8px;
  }



  .valid button {
    font-size: 8px;
  }

  .box .faq {
    position:relative;
  }

  .box .faq h1 {
    font-size: 14px;
  }

  .box .faq p {
    font-size: 9px;
  }

  .box .faq h4 {
    font-size: 9px;
  }

  .box .faq .question div {
    margin-top: 30px;
  }

  .box .faq .svg svg {
    width: 10%;
    top: -50px;
    right: 50px;
    position: absolute;
  }

  .box .faq .question div .arrow svg{
    width: 20px;

  }
}







</style>
