<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--sides-padding);
  z-index: 1000;
  position: fixed;
  width: 100vw;
}


nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav a {
  color: var(--color-text);
  font-weight: 600;
  text-decoration: none;
  font-size: var(--fs-ptitext);
}

nav a:last-child {
  color: var(--bg-color-secondary);
}

</style>

<template>
  <header>
    <div class="logo">
      <img src="../assets/img/logo.svg" alt="" />
    </div>

    <nav>
      <nuxt-link to="/besoinAide">Besoin d'aide ?</nuxt-link>
      <nuxt-link to="/">Médias</nuxt-link>

      <button-arrow path="/play">
        Jouer
      </button-arrow>
    </nav>
  </header>
</template>
