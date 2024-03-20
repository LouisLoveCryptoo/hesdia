<template>
<div class="articlesContainer">
    <div class="title">
        <h2>On a beaucoup de chose à dire</h2>
        <p>Articles tout fraîchement sortis</p>
    </div>

    <div class="articles">
        <div class="left">
            <div class="top">
                <img src="" alt="">
            </div>
            <div class="bottom">
                <h3>Titre de l’article</h3>
                <p>Brève description de l’article en mode blabla je sais pas trop</p>
                <div class="icon">
                    <img src="../assets/img/rondfleche.svg" alt="">
                </div>
            </div>
        </div>

        <div class="center">
            <div class="content">
                <h3>Titre de l’article</h3>
                <p>Brève description de l’article en mode blabla je sais pas trop</p>
                <div class="icon">
                    <img src="../assets/img/rondfleche.svg" alt="">
                </div>
            </div>
        </div>

        <div class="right">
            <div class="left">
                <img src="" alt="">
            </div>
            <div class="right">
                <h3>Titre de l’article</h3>
                <p>Brève description de l’article en mode blabla je sais pas trop</p>
                <div class="icon">
                    <img src="../assets/img/rondfleche.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="buttonDeMort"> 
        <button-phone path="/#" :phone="false">
            Voir plus
          </button-phone>
    </div>


</div>


</template>

<style scoped>

.articlesContainer{
    height: 90vh;
    padding: 6rem var(--sides-padding);
    background-color: var(--color-orange-dark);
}

h2{
    color: var(--bg-color-secondary);
}

p{
    margin-top: 1rem;
    color: var(--bg-color-secondary);
}

.articles{
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 50px;
    margin-top: 2rem;
}

.articles p{
    font-size: var(--fs-ptitext);
    color: var(--color-text);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.articles h3{
    font-weight: 700;
}


.articles .left{
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: clamp(300px, 50vh, 500px);
}

.articles .left .top{
    background-color: var(--color-text);
    min-height: 50%;
}

.articles .left .bottom{
    display: flex;
    flex-direction: column;
    min-height: 50%;
    background-color: var(--bg-color-secondary);
    padding: 2rem;

}

.articles .left .bottom .icon {
    display: flex;
    justify-content: flex-end; 
    width: 100%; 
}

.articles .left .bottom .icon img {
    width: 35px; 
}

.articles .center{
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: clamp(300px, 50vh, 500px);
}

.articles .center .content{
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: var(--bg-color-secondary);
    padding: 2rem;

}

.articles .center .content .icon {
    display: flex;
    justify-content: flex-end; 
    width: 100%; 
}

.articles .center .content .icon img {
    width: 35px; 
}


.articles .right{
        display: flex;
        flex-direction: row;
        width: 30vw;
        height: clamp(300px, 50vh, 500px);
    }

.articles .right .left{
        background-color: var(--color-text);
        min-height: 30%;
    }

.articles .right .right{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 70%;
        background-color: var(--bg-color-secondary);
        padding: 2rem;

    }

.articles .right .right .icon {
        display: flex;
        justify-content: flex-end; 
        width: 100%; 
    }

.articles .right .right .icon img {
        width: 35px; 
    }

.buttonDeMort {
    margin-top: -90px; /* Marge supérieure pour séparer du contenu précédent */
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>