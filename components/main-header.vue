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

.hbg {
  display: none;
  flex-direction: column;
  width: 50px;
  height: 50px;
  gap: 6px;
  justify-content: center;
  background-color: var(--color-orange-light);
  border-radius: 50%;
  padding: 10px;
}

.hbg span {
  display: block;
  width: 68%;
  height: 2px;
  border-radius: 10px;
  background-color: var(--bg-color-secondary);
  transition: width 0.3s ease, transform 0.3s ease 0.4s, opacity 0.3s ease 0.4s;
}

.hbg span:nth-child(2) {
  align-self: flex-end;
}

header.active .hbg span {
  width: 100%;
}

header.active .hbg span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

header.active .hbg span:nth-child(2) {
  opacity: 0;
}

header.active .hbg span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

header.active nav {
  transform: translateY(0);
}

header.active nav a {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 800px) {
  .hbg {
    display: flex;
    z-index: 1;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-orange-dark);
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
  }
  nav a {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s ease-out 0.4s, transform 0.3s ease 0.4s;
  }
  nav a:first-child {
    transition-delay: 200ms;
  }
  nav a:nth-child(2) {
    transition-delay: 400ms;
  }
  nav a:nth-child(3) {
    transition-delay: 600ms;
  }
}
</style>

<template>
  <header :class="active ? 'active' : ''">
    <div class="logo">
      <img src="../assets/img/logo.svg" alt="" />
    </div>

    <nav>
      <nuxt-link to="/besoin-aide">Besoin d'aide ?</nuxt-link>
      <nuxt-link to="/">Médias</nuxt-link>

      <button-phone path="/play"> Jouer </button-phone>
    </nav>
    <button class="hbg" @click="active = !active">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>
<script setup>
const active = ref(false);
</script>
