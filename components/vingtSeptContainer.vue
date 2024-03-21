<template>
<div class="vingtSept">
    <div class="textVingtSept">
        <h1>27%</h1>
        <p>Des lycéens sont confrontés au <br> cyber-harcèlement </p>
    </div>

    <div class="imgVingtSept">
        <img src="../assets/img/coeurToutChoupi.svg" alt="">
    </div>
</div>

</template>

<style scoped>
.vingtSept{
    height: 70vh;
    background-color: var(----bg-color-main);
    display: flex;
    align-items: center;
    justify-content: center;

}

.textVingtSept{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}


@media screen and (max-width: 1200px) {
    .vingtSept{
        flex-direction: column;

    }
    .imgVingtSept img{
        width: 40%;
    }
}
@media screen and (max-width: 800px) {
    .vingtSept{
        flex-direction: column;
    }
    .imgVingtSept img{
        width: 60%;
    }
}


</style>