<template>
  <main-header />
  <slot />
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis:YEAR@2050&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}

:root {
  --color-orange-dark: #ff8800;
  --color-orange-light: #ffa750;
  --color-text: #353838;

  --background-color-main:#E5D1BD;
  --background-color-secondary:#F9EEE8;

  --padding-box:2rem;

  --fs-title:3rem;
  --fs-subtitle:2rem;
  --fs-subsubtitle:1.8rem;
  --fs-button:1.5rem;
  --fs-text:1rem;

  --ms-tablet:1200px;
  --ms-phone:800px;
}

@media screen and (max-width: var(--ms-tablet)) {
  :root {
    --fs-title:2.5rem;
  }
}

h1 {
  font-size: var(--fs-title);
}
</style>
