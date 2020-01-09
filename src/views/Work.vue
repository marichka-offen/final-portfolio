<template>
  <section id="work">
    <h2>My Projects</h2>
    <p>
      This part of my website is devoted to the projects I had an oportunity to
      work on. I share a little bit of a history behind each of them and also
      specify the technologies used. I am currently working on expanding this
      section as lots of my projects either need to be re-uploaded from the
      private GitHub Enterprise account or refactored to conform to my own
      standarts (: Anybody and everybody is welcome to contribute to existing
      projects, identify bugs, propose improvements or just ask questions about
      any of them. I will be glad to hear feedbacks and constructive criticism,
      as well as share tools, technics and knowledges that I learnt and obtained
      while working on them. Each project presented in my gallery has links to
      GitHub repos and specific issues. Also, if you have any questions, feel
      free to contact me through contact form down below.
    </p>
    <div class="tab-container">
      <!-- GAMES -->
      <div v-on:click="onGames" class="tab tab--game">
        <a>Games</a>
      </div>

      <!-- APPS -->
      <div v-on:click="onApps" class="tab tab--app">
        <a>Apps</a>
      </div>

      <!-- WEBSITES -->
      <div v-on:click="onWebsites" class="tab tab--website">
        <a>Websites</a>
      </div>

      <!-- MISC -->
      <div v-on:click="onMisc" class="tab tab--misc">
        <a>Misc</a>
      </div>
    </div>

    <div class="content">
      <Project />
    </div>
  </section>
</template>

<script>
import Project from "../components/Project";
import { mapState } from "vuex";
export default {
  components: { Project },
  computed: mapState(["type"]),
  methods: {
    onGames() {
      this.$store.state.type = "game";
    },
    onApps() {
      this.$store.state.type = "app";
    },
    onWebsites() {
      this.$store.state.type = "website";
    },
    onMisc() {
      this.$store.state.type = "misc";
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.5rem;
  //   margin: 3em 0;

  & > * {
    width: 250px;
    height: 250px;
    font-weight: 300;
    position: relative;

    & > * {
      outline: 1px solid #fff;
      outline-offset: 15px;
      background-color: rgba(#fff, 0.85);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.5em 1em;
    }
  }
}

.tab {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &--game {
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../assets/img/games.jpg);
  }

  &--app {
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../assets/img/apps.jpg);
  }

  &--website {
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../assets/img/websites.jpg);
  }

  &--misc {
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../assets/img/misc.jpg);
  }
}
</style>
