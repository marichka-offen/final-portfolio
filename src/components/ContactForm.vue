<template>
  <form class="form" action="https://formspree.io/marichka.offen@gmail.com" method="POST">
    <input
      class="form--input"
      type="text"
      placeholder="name"
      aria-label="name"
      id="name"
      required
      minlength="3"
      name="Name:"
    />
    <input
      class="form--input"
      type="email"
      placeholder="e-mail"
      aria-label="email"
      id="email"
      required
      name="From:"
    />
    <textarea
      class="form--message"
      type="text"
      placeholder="message"
      aria-label="message"
      minlength="10"
      id="message"
      required
      name="Message:"
    ></textarea>
    <input class="form--submit" type="submit" value="send!" />
  </form>
</template>

<style lang="scss" scoped>
$border: solid 2px rgba(#263238, 0.9);

@mixin background {
  font-size: 1.8rem;

  &:focus {
    background: rgba(#c0ca33, 0.7);
    font-size: 2rem;
  }

  &:focus:invalid {
    background: rgba(#ef5350, 0.7);
  }

  &::placeholder {
    font-size: 1.8rem;
  }
}

.form {
  margin: 2rem;
  max-width: 50rem;
  box-shadow: 10px 10px #c0ca33;
  height: max-content;

  &--input {
    width: 100%;
    height: 50px;
    padding: 0px 15px 0px 15px;
    border: $border;
    border-bottom: none;
    transition: all 0.3s ease-in-out;
    outline: none;

    @include background;
  }

  &--message {
    width: 100%;
    height: 110px;
    max-height: 110px;
    padding: 15px;
    outline: none;
    border: $border;
    transition: all 0.3s ease-in-out;

    @include background;
  }

  &--submit {
    width: 100%;
    margin: -5px 0px 0px 0px;
    height: 50px;
    cursor: pointer;
    border: $border;
    border-top: none;
    font-size: 1.8rem;
    transition: all 0.3s ease-in-out;

    &:focus {
      background: rgba(#c0ca33, 0.7);
    }
  }
}
</style>
