<template>
  <main-header />
  <chatbot-assistant />
  <slot />
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@2050&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

/*  SCROLLBAR  */
/* scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: var(--bg-color-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-orange-dark);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-orange-light);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: var(--color-orange-dark);
}

/*  RESETS  */
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
  background-color: var(--background-color-secondary);
}

hr {
  outline: none;
  border: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

:root {
  --color-orange-dark: #ff8800;
  --color-orange-light: #ffa750;
  --color-text: #353838;

  --bg-color-main: #e5d1bd;
  --bg-color-secondary: #f9eee8;

  --padding-box: 2rem;

  --fs-title: 3rem;
  --fs-subtitle: 2rem;
  --fs-subsubtitle: 1.8rem;
  --fs-button: 1.5rem;
  --fs-text: 1rem;

  --ms-tablet: 1200px;
  --ms-phone: 800px;

  --sides-padding: clamp(1rem, 5vw, 4rem);
}

@media screen and (max-width: var(--ms-tablet)) {
  :root {
    --fs-title: 2.5rem;
  }
}

h1 {
  font-size: var(--fs-title);
}
</style>
