<template>
  <section class="about">
    <img src="../assets/img/illustrations/me.svg" alt />
    <p>
      Hello there! I am Marichka, front end developer and designer, programming
      aficionado and learning enthusiast. The website you're currently on is a
      product of skills I acquired during my journey as a self-taught web
      developer, it is a quintessence of my knowledge, personal growth and hard
      work.
      <br />
      <br />Here you can find not only the
      <router-link :to="{ name: 'work' }">examples of work</router-link>&#32; I
      have done during my explorations, but also some
      <router-link :to="{ name: 'blog' }">thoughts and useful articles</router-link>&#32; about web and what it is like change careers and learn to be a
      developer. You can also
      <router-link :to="{ name: 'about' }">check my background</router-link>&#32; to get to know me better or
      <router-link :to="{ name: 'contact' }">shoot me a message</router-link>&#32; if you have questions or offers.
      <br />
      <br />I am very excited to have you here, so let's get started!
    </p>
  </section>
</template>

<style lang="scss" scoped>
img {
  max-width: 600px;
  margin: 1rem 3rem;
  float: right;
}
</style>
