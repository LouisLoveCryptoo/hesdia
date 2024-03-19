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

  --background-color-main: #e5d1bd;
  --background-color-secondary: #f9eee8;
}

.box__padding {
  padding: var(--padding-box);
}
</style>
