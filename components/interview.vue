<template>

        
    
    <div class="article">
        <div class="image">
            <img src="https://picsum.photos/200/300" alt="">
        </div> 
        <div class="text">
            <h3>Titre de l’interview</h3>
            <p>Brève description de l’interview en mode blabla je sais pas trop et blaliblop ahahah</p>
        </div>
            
    </div>







</template>

<style scoped>

.article{
    display:flex;
    flex-direction:column;   
    align-items: center;
}

.article .image img{
    display: flex;
    height: 400px;
    width: 300px;
    object-fit: cover;
}

.article .text{
    display: flex;
    flex-direction: column;
    align-items: left;
    padding:20px;
    padding-top:20px;
    gap : 30px;
}

.article .text h3{
    font-weight: 700;
    font-size: 20px;
    color:var(--color-text);
}

.article .text p{
    font-size: 16px;
    max-width: 300px;
    color:var(--color-text);
}


</style>