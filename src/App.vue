<template>
  <div id="app" class="grid">
    <Navbar class="grid__nav" />
    <main class="grid__main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
// IMPORTS
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700&display=swap&subset=cyrillic-ext,latin-ext");

// RESET STYLE SETTINGS
*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

body {
  margin: 5rem;
  color: #263238;
  font-size: 2rem;
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  box-sizing: border-box;
  height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

h2 {
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 2rem auto;
  font-weight: 400;
  //   color: #fff;
  //   text-shadow: -2px 0 rgba(37, 49, 55, 0.8), 0 -2px rgba(37, 49, 55, 0.8),
  //     2px 0 rgba(37, 49, 55, 0.8), 0 2px rgba(37, 49, 55, 0.8),
  //     2px 2px rgba(37, 49, 55, 0.8), -2px -2px rgba(37, 49, 55, 0.8),
  //     -2px 2px rgba(37, 49, 55, 0.8), 2px -2px rgba(37, 49, 55, 0.8),
  //     5px 5px #c0ca33;
}

p {
  text-align: justify;
  line-height: 1.8;
}

// GRID
.grid {
  display: grid;
  grid-template-columns: max-content auto;
  position: relative;
  overflow: visible;

  &__nav {
    position: sticky;
    width: 350px;
    top: 0;
    height: min-content;
  }

  &__main {
    padding: 5rem;
  }
}

// TRANSITION
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
