<template>
  <section>
    <h2>Let's talk!</h2>
    <div class="contact">
      <p class="contact__text">
        Tell me what's going on! Do you have a question? Need help? Want to talk
        about job oportunities? Or just simply chat? Feel free to reach out, and
        we can grab a coffee and discuss all the matters! I'll be more than glad
        to read each and every message, get to know you, and help however I can!
        <br />
        <br />McLean, VA, USA | Kyiv, Ukraine <br />marichka.offen@gmail.com
      </p>
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactForm from "../components/ContactForm";
export default {
  components: { ContactForm }
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;

  & > * {
    padding: 20px;
  }

  &__text {
    width: 500px;
  }
}
</style>
