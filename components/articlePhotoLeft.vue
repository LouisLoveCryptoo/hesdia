<template>



    <div class="article transition-x">
        <div class="image">
            <img src="http://localhost:3000/api/files/article-2.png" alt="">
        </div>
        <div class="text">
            <h3>Une connexion plus sûre</h3>
            <p>Se protéger contre le cyberharcèlement</p>
        </div>

        <nuxt-link to="/blog/2">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#FF8800"/>
                <path d="M19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929L13.3431 7.92893C12.9526 7.53841 12.3195 7.53841 11.9289 7.92893C11.5384 8.31946 11.5384 8.95262 11.9289 9.34315L17.5858 15L11.9289 20.6569C11.5384 21.0474 11.5384 21.6805 11.9289 22.0711C12.3195 22.4616 12.9526 22.4616 13.3431 22.0711L19.7071 15.7071ZM18 16H19V14H18V16Z" fill="#F9EEE8"/>
            </svg>
        </nuxt-link>

    </div>







</template>

<style scoped>

.article{
background-color: var(--bg-color-main);
position: relative;
height: 250px;
width: clamp(400px, 100%, 450px);
overflow: hidden;

}

.article .image img{
display: flex;
height: 100%;
width: 35%;
object-fit: cover;
left:0;
position:absolute
}

.article .text{
display: flex;
flex-direction: column;
position:absolute;
left:40%;
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


@media screen and (max-width: 1200px) {
    .article .text{
        top: 0%;
    }
}
@media screen and (max-width: 800px) {
}


</style>