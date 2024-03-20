<template>
<div class="doubleTrukContainer">
    <div class="left">
        <img src="" alt="">
        <h2>Vidéo Lorine</h2>
    </div>

    <div class="right">
        <img src="" alt="">
        <h2>Blog</h2>
    </div>
</div>
</template>


<style scoped>
.doubleTrukContainer{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
}

.doubleTrukContainer .left{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-text);
    width: 50vw;

}

.doubleTrukContainer .right{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-orange-dark);
    width: 50vw;

}
</style>