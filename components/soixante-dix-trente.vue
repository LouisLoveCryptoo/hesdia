<template>
<div class="soixante-dix-trenteContainer">
    <div class="soixante-dix-trenteLeft">
        <h2>Découvres nos médias</h2>
        <p>Interviews, blog et plein encore !</p>

        <button-phone path="/#" :phone="false">
            Voir plus
          </button-phone>
    </div>

    <div class="soixante-dix-trenteRight">
        <h2>Viens jouer !</h2>
        <p>Plus ou moins ? Tentes ta chance</p>

        <button-phone path="/#" :phone="false" :dark="true">
            Voir plus
          </button-phone>
    </div>
</div>

</template>

<style scoped>
.soixante-dix-trenteContainer{
    display: flex;  
    width: 100vw;
    height: 50vh;

}

.soixante-dix-trenteContainer .soixante-dix-trenteLeft{
    width: 65vw;
    background-color: var(--color-text);
    display: flex;
    flex-direction: column;
    padding: var(--sides-padding);
    gap: 25px;
}

.soixante-dix-trenteLeft h2{
    color: var(--bg-color-secondary);
}

.soixante-dix-trenteLeft p{
    color: var(--bg-color-secondary);
}

.soixante-dix-trenteRight{
    width: 35vw;
    background-color: var(--color-orange-light);
    display: flex;
    flex-direction: column;
    padding: var(--sides-padding);
    gap: 25px;
}

@media screen and (max-width: 1200px) {
 .soixante-dix-trenteContainer{
    flex-direction: column;
 }
 .soixante-dix-trenteContainer .soixante-dix-trenteLeft{
    align-items: center;    
    width: 100%;
 }
 .soixante-dix-trenteContainer .soixante-dix-trenteRight{
    align-items: center;
    width: 100%;
 }
}
@media screen and (max-width: 800px) {

}

</style>