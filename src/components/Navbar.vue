<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'work' }">Work</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
