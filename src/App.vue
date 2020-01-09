<template>
  <div id="app" class="grid">
    <nav class="grid__nav">
      <Navbar />
    </nav>
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
    background-color: bisque;
  }

  &__main {
    background-color: aquamarine;
  }
}
</style>
