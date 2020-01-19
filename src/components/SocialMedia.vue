<template>
  <footer>
    <a href="https://www.linkedin.com/in/marichka-offen" target="_blank">
      <svg class="footer__icon">
        <use xlink:href="../assets/img/social_media_logos.svg#linkedin" title="link to linkedin" />
      </svg>
    </a>
    <a href="https://twitter.com/MarichkaOffen" target="_blank">
      <svg class="footer__icon">
        <use xlink:href="../assets/img/social_media_logos.svg#twitter" title="link to twitter" />
      </svg>
    </a>
    <a href="https://github.com/marichka-offen" target="_blank">
      <svg class="footer__icon">
        <use xlink:href="../assets/img/social_media_logos.svg#github" title="link to github" />
      </svg>
    </a>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  padding-left: 2.4rem;
}
svg {
  width: 4.8rem;
  height: 2.4rem;
  transition: all 0.5s;

  &:hover {
    fill: #c0ca33;
    transform: scale(1.2);
  }
}

@media screen and (max-width: 924px) {
  footer {
    justify-content: center;
    padding: 0;
  }
  svg {
    height: 2rem;
  }
}
</style>
