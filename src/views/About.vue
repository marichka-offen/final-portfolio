<template>
  <div class="about">
    <h2>
      A Little About Me
    </h2>
    <p>
      I am a web development bootcamp graduate, programming aficionado and
      learning enthusiast. This website is a quintessence of my knowledge,
      library of the efforts made, and diary of personal growth. I am front-end
      devotee and enjoy all things React and Vue, but do not limit myself. I am
      constantly learning new ways of creating and improving websites and web
      apps. Currently I am working as a freelancer, occasionaly volunteer and
      contribute to open source. My most recent contribution was to help with
      translation of ReactJS documentation to Ukrainian and Russian to share the
      knowledge all across the world.
    </p>
    <h3>Skills:</h3>
    <ul>
      <li>
        Highly skilled in creating perfomant
        <span class="highlight">HTML</span> and
        <span class="highlight">CSS</span>
      </li>
      <li>
        Passionate about <span class="highlight">CSS Methodologies</span>,
        <span class="highlight">CSS Preprocessors</span>,
        <span class="highlight">Animation</span> and
        <span class="highlight">SVGs</span>
      </li>
      <li>
        Experienced with <span class="highlight">JavaScript</span>,
        <span class="highlight">React</span> and
        <span class="highlight">Vue</span>,
        <span class="highlight">Node</span> and
        <span class="highlight">Express</span>,
        <span class="highlight">State Management</span>
      </li>
      <li>
        Proficient with <span class="highlight">Task Runners</span>,
        <span class="highlight">Package Managers</span> and
        <span class="highlight">Version Control Systems</span>
      </li>
      <li>
        Knowledgeable about <span class="highlight">User Experience</span>,
        <span class="highlight">Accessibility</span>,
        <span class="highlight">Technical Writing</span>,
        <span class="highlight">Performance</span> and
        <span class="highlight">Responsive Web Development</span>
      </li>
      <li>
        Worked with <span class="highlight">Python</span>,
        <span class="highlight">Django</span>,
        <span class="highlight">MongoDB</span> and
        <span class="highlight">PostgreSQL</span>
      </li>
    </ul>

    <h3>Education:</h3>
    <ul class="education">
      <li class="education__wrap">
        <p>
          In 2016 I obtained BA in linguistics and communication, major English,
          Literature and Translation. Learnt to analyse language form, language
          meaning, and language in context. Analyse human language by observing
          an interplay between sound and meaning. Had opportunity to deal with
          how languages encode relations between entities, properties, and other
          aspects of the world to convey, process, and assign meaning, as well
          as manage and resolve ambiguity.
        </p>
      </li>
      <li class="education__wrap">
        <p>
          I am an avid learner, and spent more then 200 hours on Udemy teaching
          myself new technologies and perfecting existing knowledge. That being
          said, I do not give up easily when facing a problem or a subject that
          I am not familiar with, and I am strongly determined to find the right
          solution.
        </p>
      </li>
      <li class="education__wrap">
        <p>
          I have successfuly completed a 3-month, 500-hour full-time and
          full-stack web development program in General Assembly DC. That being
          said I consider myself a determined and highly motivated full-stack
          web developer.
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
ul {
  line-height: 2;
}
.highlight {
  display: inline-block;
  color: #c0ca33;
  font-weight: 600; //   padding: 0 5px;
}

.education {
  list-style-type: none;
  width: 90%;
  margin: 0 auto;
  &__wrap {
    padding: 0.4rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    background-image: linear-gradient(
      to bottom right,
      rgba(#dce775, 0.8),
      rgba(#c0ca33, 0.8),
      rgba(#9e9d24, 0.8)
    );

    & > p {
      padding: 1rem;
      background-color: #fff;
      margin: 0;
    }
  }
}
</style>
