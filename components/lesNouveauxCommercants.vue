<template>
    <div class="lesNouveauxCommercants">
        <div class="left">
            <h2>VID2O DE LOLO</h2>
        </div>

        <div class="right">
            <h2>C’est quoi le cyber-harcèlement</h2>
            <p>Découvre en 2 minutes c’est quoi le cyber-harcèlement et comment lutter contre.</p>
            <button-phone path="/#" :phone="false">
                Voir plus
              </button-phone>

            
        </div>
    </div>
</template>

<style scoped>
.lesNouveauxCommercants{
    display: flex;
    flex-direction: row;
    height: 75vh;
    overflow: hidden;
}

.left{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-color-secondary);
    width: 60vw;
    background-color: var(--color-text);
}

.right{
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 40vw;
    padding: var(--sides-padding);
    background-color: var(--bg-color-main);

}

@media screen and (max-width: 1200px) {
    .lesNouveauxCommercants{
        width: 100%;
        height:auto;
        flex-direction: column;
    }
}

@media screen and (max-width: 800px) {
    .lesNouveauxCommercants{
        height:auto;
        flex-direction: column;
    }
    .left{
        width: 100%;
    }
    .right{
        align-items: center;
        width: 100%;
    }
}
</style>