<template>
  <div id="app" class="grid">
    <img id="switch" @click="themeSwitch" src="/img/light-on.svg" alt="light-bulb" width="50px" />
    <Navbar class="grid__nav" />
    <!-- <button @click="darkThemeSwitch">Switch Theme</button> -->

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
  },
  methods: {
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement("link");
      darkThemeLinkEl.setAttribute("rel", "stylesheet");
      darkThemeLinkEl.setAttribute("href", "/css/darktheme.css");
      darkThemeLinkEl.setAttribute("id", "dark-theme-style");

      let docHead = document.querySelector("head");
      docHead.append(darkThemeLinkEl);
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      let parentNode = darkThemeLinkEl.parentNode;
      parentNode.removeChild(darkThemeLinkEl);
    },
    themeSwitch() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (!darkThemeLinkEl) {
        document
          .querySelector("#switch")
          .setAttribute("src", "/img/light-off.svg");
        this._addDarkTheme();
      } else {
        document
          .querySelector("#switch")
          .setAttribute("src", "/img/light-on.svg");
        this._removeDarkTheme();
      }
    }
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
  color: #c0ca33;
  cursor: pointer;
}

@mixin stroke-width($property) {
  -webkit-text-stroke-width: $property;
  -moz-text-stroke-width: $property;
}

@mixin stroke-color($property) {
  -webkit-text-stroke-color: $property;
  -moz-text-stroke-color: $property;
}

h2 {
  font-size: 4.4rem;
  width: max-content;
  letter-spacing: 2px;
  margin: 2rem auto;
  text-transform: uppercase;
  @include stroke-width(1px);
  @include stroke-color(#0d1b1e);
  color: transparent;
  text-shadow: 5px 3px #c0ca33;
}

p {
  text-align: justify;
  line-height: 1.8;
  margin: 1.8rem;
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
  transition: opacity 0.25s 0.1s ease-out;
}
.fade-leave-to {
  opacity: 0;
}

#switch {
  position: fixed;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
}
</style>
