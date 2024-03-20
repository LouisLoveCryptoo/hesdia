<style scoped>
a {
  background: var(--color-orange-light);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  border-radius: 50px;
  color: var(--bg-color-secondary);
  cursor: pointer;
  width: fit-content;
}

a .phone {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-orange-dark);
}


</style>

<template>
  <nuxt-link :to="props.path">
    <h4>
      <slot />
    </h4>

    <div class="phone" v-if="phone">
      <img src="../assets/img/phone.svg" alt="" />
    </div>
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true
  },
  phone: {
    type: Boolean,
    default: false
  }
});
</script>