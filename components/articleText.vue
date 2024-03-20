<template>

        
    
    <div class="article">
        
        <div class="text">
            <h3>Titre de l’article</h3>
            <p>Brève description de l’article en mode blabla je sais pas trop</p>
        </div>

        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#FF8800"/>
            <path d="M19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929L13.3431 7.92893C12.9526 7.53841 12.3195 7.53841 11.9289 7.92893C11.5384 8.31946 11.5384 8.95262 11.9289 9.34315L17.5858 15L11.9289 20.6569C11.5384 21.0474 11.5384 21.6805 11.9289 22.0711C12.3195 22.4616 12.9526 22.4616 13.3431 22.0711L19.7071 15.7071ZM18 16H19V14H18V16Z" fill="#F9EEE8"/>
        </svg>
            
    </div>







</template>

<style scoped>

.article{
background-color: var(--bg-color-main);
position: relative;
height: 250px;
width: 450px;
}

.article .text{
display: flex;
flex-direction: column;
position:absolute;
left:5%;
top:30%;
padding:20px;
gap : 10px;
}

.article .text h3{
font-weight: 700;
font-size: 20px;
}

.article .text p{
font-size: 16px;
}

.article svg{
position: absolute;
right: 15px;
bottom: 15px;
z-index: 10;
}




</style>