<template>
  <section id="work">
    <h2>My Projects</h2>
    <p>
      This part of my website is devoted to the projects I had an oportunity to
      work on. I share a little bit of story behind each of them, specify
      technologies used and provide links to webpages and GitHub repos. I am
      constantly working on expanding this section as lots of my projects either
      need to be re-uploaded from the private GitHub Enterprise account or
      refactored to conform to my own standarts. If you have any questions,
      please
      <router-link :to="{ name: 'contact' }">don't hesitate to ask</router-link>.
    </p>
    <div class="tab-container">
      <!-- GAMES -->
      <div
        v-on:click="onGames"
        class="tab tab--game"
        @click="selected = 1"
        :class="{ enlarge: selected == 1 }"
      >
        <button>Games</button>
      </div>

      <!-- APPS -->
      <div
        v-on:click="onApps"
        class="tab tab--app"
        @click="selected = 2"
        :class="{ enlarge: selected == 2 }"
      >
        <button>Apps</button>
      </div>

      <!-- WEBSITES -->
      <div
        v-on:click="onWebsites"
        class="tab tab--website"
        @click="selected = 3"
        :class="{ enlarge: selected == 3 }"
      >
        <button>Websites</button>
      </div>

      <!-- MISC -->
      <div
        v-on:click="onMisc"
        class="tab tab--misc"
        @click="selected = 4"
        :class="{ enlarge: selected == 4 }"
      >
        <button>Misc</button>
      </div>
    </div>
    <div class="content">
      <Project />
    </div>

    <p>
      P.S. Anybody and everybody is welcome to contribute to existing projects,
      identify bugs, propose improvements or just ask questions about any of
      them. I will be glad to hear feedbacks and constructive criticism, as well
      as share tools, technics and knowledge I obtained while working on them.
    </p>
  </section>
</template>

<script>
import Project from "../components/Project";
import { mapState } from "vuex";
export default {
  components: { Project },
  data: function() {
    return {
      selected: undefined
    };
  },
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
$outline: 2px solid #c0ca33;

.enlarge {
  transform: scale(1.2);
  outline: $outline;
  outline-offset: 15px;
}
.tab-container {
  display: flex;
  //   flex-wrap: wrap;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 5.6rem 0;
}

.tab {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 13vw;
  height: 12vw;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
    outline: $outline;
    animation: outlineBlink 0.7s infinite ease-in-out;

    @keyframes outlineBlink {
      0% {
        outline: 2px solid #fff;
        outline-offset: 3px;
      }
      75% {
        outline: $outline;
        outline-offset: 3px;
      }
    }
  }

  & > * {
    outline: $outline;
    outline-offset: 10px;
    background-color: rgba(#fff, 0.85);
    border: none;
    padding: 1.5rem 3rem;
    font-size: 2.4rem;
    text-transform: lowercase;
    font-weight: 300;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &--game {
    background-image: url(../assets/img/games.jpg);
  }

  &--app {
    background-image: url(../assets/img/apps.jpg);
  }

  &--website {
    background-image: url(../assets/img/websites.jpg);
  }

  &--misc {
    background-image: url(../assets/img/misc.jpg);
  }
}
</style>
