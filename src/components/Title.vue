<template>
  <h1 class="title">
    <span class="title__first">Marichka</span>
    <span class="title__last">Offen</span>
    <span class="title__sub">Front End Developer</span>
  </h1>
</template>

<style lang="scss" scoped>
span {
  display: block;
  text-transform: uppercase;
}

.title {
  @mixin stroke-width($property) {
    -webkit-text-stroke-width: $property;
    -moz-text-stroke-width: $property;
  }

  @mixin stroke-color($property) {
    -webkit-text-stroke-color: $property;
    -moz-text-stroke-color: $property;
  }

  &__first {
    font-size: 5rem;
  }

  &__last {
    font-size: 9.5rem;
    margin-top: -2.4rem;
    letter-spacing: 6px;
    @include stroke-width(2px);
    @include stroke-color(#0d1b1e);
    color: transparent;
    text-shadow: 6px 6px #c0ca33;
  }

  &__sub {
    font-size: 2.8rem;
    font-weight: 200;
  }
}
@media screen and (max-width: 320px) {
  .title {
    transform: scale(0.8);
  }
}
</style>
