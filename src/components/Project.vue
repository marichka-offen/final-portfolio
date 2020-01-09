<template>
  <div>
    <article class="project" v-for="project in projectType" :key="project.id">
      <div class="project__info">
        <img
          class="project__img"
          :alt="project.title"
          :src="'/img/' + project.id + '.png'"
        />
      </div>
      <div class="project__description">
        <h3 class="heading-tertiary project__title">{{ project.title }}</h3>
        <div class="project__links">
          <a :href="project.weblink" target="_blank">link</a> –
          <a :href="project.codelink" target="_blank">code</a>
        </div>
        <p>{{ project.description }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["projectType"])
};
</script>

<style lang="scss" scoped>
.project {
  margin: 4rem 0;
  display: flex;

  &__title {
  }

  &__info {
    width: 45%;
    border-right: 1px solid rgba(#000, 0.1);
    font-weight: 300;

    & > * {
      font-size: 1.8rem;
    }
  }

  &__img {
    margin-top: 6rem;
    width: 450px;
    height: 300px;
    overflow: hidden;
  }

  &__stack {
    color: rgba(#000, 0.4);
    width: 100%;
  }

  &__links {
    color: #c0ca33;

    & > * {
      transition: all 0.5s;
      &:hover {
        color: #afb42b;
      }
    }
  }

  &__description {
    width: 55%;
    padding: 0 2rem;
  }
}
</style>
