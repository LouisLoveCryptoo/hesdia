<style scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between; 
    height: auto;
    background-color: var(--background-color-secondary);
    padding: 1rem 4rem 1rem 4rem;
}
    
.logo svg{

}

nav{
    display: flex;
    align-items: center;
    gap: 2rem;

}

nav a{
    color: var(--color-text);
    font-weight: 600;
    text-decoration: none;
}
</style>

<template>
<div class="header">
    <div class="logo">
        <img src="../assets/img/logo.svg" alt="">
    </div>
    
            <nav>
                <a href="">Besoin d'aide ?</a>
                <a href="">Médias</a>
                
                <button-header />

            </nav>
            
</div>

</template>