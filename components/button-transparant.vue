<style scoped>
a {
  background: transparent;
  padding: 18px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  border-radius: 50px;
  color: var(--color-orange-dark);
  font-weight: 400;
  cursor: pointer;
  border: 3px solid var(--color-orange-dark);
  width: min-content;
}


a p {
    white-space: nowrap;
  font-size: var(--fs-ptitext);

}
</style>

<template>
  <nuxt-link :to="props.path">

    <p>
      <slot />
    </p>
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  path: String
})
</script>