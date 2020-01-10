<template>
  <form
    class="form"
    action="https://formspree.io/marichka.offen@gmail.com"
    method="POST"
  >
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
.form {
  width: 500px;
  margin-top: 20px;

  &--input {
    width: 470px;
    height: 50px;
    padding: 0px 15px 0px 15px;
    border: solid 2px black;
    border-bottom: none;
    transition: all 0.3s ease-in-out;
    outline: none;

    &:focus {
      background: rgba(#c0ca33, 0.7);
    }

    &:focus:invalid {
      background: rgba(#ef5350, 0.7);
    }

    &::placeholder {
      font-size: 1.6rem;
    }
  }

  &--message {
    width: 470px;
    max-width: 470px;
    height: 110px;
    max-height: 110px;
    padding: 15px;
    outline: none;
    border: solid 2px black;
    transition: all 0.3s ease-in-out;

    &:focus {
      background: rgba(#c0ca33, 0.7);
    }

    &:focus:invalid {
      background: rgba(#ef5350, 0.7);
    }

    &::placeholder {
      font-size: 1.6rem;
    }
  }

  &--submit {
    width: 502px;
    margin: -5px 0px 0px 0px;
    height: 50px;
    cursor: pointer;
    border: solid 2px black;
    border-top: none;
    font-size: 2.4rem;
    transition: all 0.3s ease-in-out;

    &:focus {
      background: rgba(#c0ca33, 0.7);
    }
  }
}
</style>
