<template>
  <nav>
    <Title />
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'work' }">Work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
    <SocialMedia />
  </nav>
</template>

<script>
import Title from "./Title";
import SocialMedia from "./SocialMedia";

export default {
  components: {
    Title,
    SocialMedia
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  text-transform: lowercase;
  line-height: 2.4;
  transition: all 0.7s;
}

.router-link-exact-active {
  color: #c0ca33;
  padding-left: 2rem;
  transition: all 0.7s;
}
</style>
