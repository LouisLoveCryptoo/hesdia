<template>
  <div class="left-layer"></div>
  <div class="left-layer left-layer--2"></div>
  <div class="left-layer left-layer--3"></div>
  <div class="left-layer left-layer--4"></div>
  <div class="background-layer"></div>
</template>
<script setup>
onMounted(() => {
  const router = useRouter();
  const transitionEl = document.querySelectorAll(".left-layer");
  const backgroundEl = document.querySelector(".background-layer");

  router.beforeEach((to, from, next) => {
    transitionEl.forEach((el) => el.classList.add("active"));
    backgroundEl.classList.add("active");
    setTimeout(() => {
      transitionEl.forEach((el) => el.classList.remove("active"));
      backgroundEl.classList.remove("active");
      next();
    }, 900);
  });
});
</script>
<style>
:root {
  --animation-timing: 0.5s;
  --cubic-smooth-out: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.left-layer {
  z-index: 5000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: auto;
  left: -100%;
  bottom: auto;
  right: auto;
  background: #e5d1bd;
  transition: all var(--animation-timing) var(--cubic-smooth-out);
}

.left-layer.active {
  left: 100%;
}
.left-layer--2 {
  background: #ff8800;
  transition-delay: 0.1s;
}

.left-layer--3 {
  background: #ff9a36;
  transition-delay: 0.2s;
}

.left-layer--4 {
  background: #ffac6c;
  transition-delay: 0.3s;
}

.background-layer {
  z-index: 4000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: -200%;
  background: #f9eee8;
  transition: all var(--animation-timing) var(--cubic-smooth-out);
}

.background-layer.active {
  top: 0;
  left: 0;
}
</style>
