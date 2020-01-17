<template>
  <nav>
    <Title />
    <ul>
      <li>
        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'work' }" class="nav-link">Work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'illustration' }" class="nav-link">Illustrations</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'blog' }" class="nav-link">Blog</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link>
      </li>
    </ul>
    <SocialMedia />
    <p class="address">
      Tysons Corner, VA, USA | Kyiv, Ukraine
      <br />marichka.offen@gmail.com
    </p>
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
a {
  color: inherit;
}
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

.address {
  font-size: 1.2rem;
  opacity: 0.7;
  padding-left: 2.4rem;

  //   text-transform: uppercase;
}
</style>
