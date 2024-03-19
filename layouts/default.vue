<template>
  <main-header />
  <slot />

  <!-- slot = router view -->
</template>
<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

:root {
  --color-orange-dark:#FF8800;
  --color-orange-light:#FFA750;
  --color-text:#353838;

  --background-color-main:#E5D1BD;
  --background-color-secondary:#F9EEE8;
}
</style>
