<template>
  <div>
    <article class="project" v-for="project in projectType" :key="project.id">
      <div class="project__info">
        <img class="project__img" :alt="project.title" :src="'/img/' + project.id + '.png'" />
      </div>
      <div class="project__description">
        <h3 class="heading-tertiary project__title">{{ project.title }}</h3>
        <div class="project__links">
          <a :href="project.weblink" target="_blank" :aria-label="project.ariaLabelLink">link</a>
          –
          <a
            :href="project.codelink"
            target="_blank"
            :aria-label="project.ariaLabelCode"
          >code</a>
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
    text-transform: uppercase;
  }

  &__img {
    margin: 6rem 2rem;
    max-width: 450px;
    max-height: 300px;
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
    padding: 0 2rem;
    border-left: 1px solid rgba(#000, 0.1);
  }
}
@media screen and (max-width: 1400px) {
  .project {
    margin: 1 0;
    flex-direction: column;
    align-items: center;

    &__img {
      margin: 0;
      width: 700px;
    }
  }
}

@media screen and (max-width: 425px) {
  .project {
    &__img {
      width: 300px;
    }
  }
}
</style>
