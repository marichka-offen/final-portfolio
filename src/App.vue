<template>
  <div id="app" class="grid">
    <Navbar class="grid__nav" />
    <main class="grid__main">
      <router-view />
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
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

body {
  margin: 0;
  font-size: 2.4rem;
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  box-sizing: border-box;
  height: 100vh;
}

// GRID
.grid {
  display: grid;
  grid-template-columns: max-content auto;

  &__nav {
    position: sticky;
    width: 350px;
    border: 2px solid red;
  }

  &__main {
    border: 2px solid blue;
  }
}
</style>
