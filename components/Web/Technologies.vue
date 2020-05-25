<template>
  <section class="technologies">
    <div class="container">
      <div class="technologies__content">
        <div class="">
          <h2 class="">We use cutting-edge technologies</h2>
          <p class="subtitle">Take a look at the front‑end tools we use on daily basis.</p>
        </div>
        <div class="technologies__icons">
          <img src="/img/icons-technologies/html5.svg"/>
          <img src="/img/icons-technologies/css3.svg"/>
          <img src="/img/icons-technologies/js.svg"/>
          <img src="/img/icons-technologies/vue.svg"/>
          <img src="/img/icons-technologies/sass.png"/>
          <img src="/img/icons-technologies/webpack.svg"/>
          <img src="/img/icons-technologies/bootstrap.png"/>
          <img src="/img/icons-technologies/babel.png"/>
          <img src="/img/icons-technologies/node.png"/>
          <img src="/img/icons-technologies/npm.png"/>
          <img src="/img/icons-technologies/yarn.png"/>
          <img src="/img/icons-technologies/karma.png"/>
          <img src="/img/icons-technologies/docker.png"/>
          <img src="/img/icons-technologies/ramda.png"/>
          <img src="/img/icons-technologies/pug.png"/>
          <img src="/img/icons-technologies/ngnix.png"/>
          <img src="/img/icons-technologies/eslint.png"/>
          <img src="/img/icons-technologies/bulma.png"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Technologies"
  }
</script>

<style lang="sass" scoped>
  .technologies
    padding-top: 80px
    padding-bottom: 104px

    h2
      color: $dark-text
      text-align: center
      line-height: 36px

    p
      max-width: 560px
      margin: 25px auto 60px
      color: #B0B0B0
      text-align: center

    &__icons
      display: flex
      flex-wrap: wrap
      max-width: 800px
      justify-content: center
      margin: 0 auto

      img
        width: 84px
        height: 84px
        margin: 20px
        border-radius: 100%
        box-shadow: 0 12px 17px 0 rgba($dark-text, 0.1)

</style>
