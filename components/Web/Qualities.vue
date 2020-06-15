<template>
  <section class="qualities">
    <div class="container">
      <div class="qualities__content">
          <h2 class="">Qualities of our front‑end apps</h2>
          <p class="subtitle">We know how to make great HTML5 applications. These are the highlight features that help us achieve so.</p>
      </div>
      <div class="qualities__list">
        <div class="qualities__element">
          <img class="icon" src="/img/icons/icon--trending-up.svg" alt="">
          <h3 class="">Modern code</h3>
          <p class="">Because of our care about code quality, we stick to the newest ECMAScript standards. We also try to keep our code as consistent with functional paradigm as possible, which makes our code modular and maintainable.</p>
        </div>
        <div class="qualities__element">
          <img class="icon" src="/img/icons/icon--shield.svg" alt="">
          <h3 class="">Tests</h3>
          <p class="">We know that proofs are stronger that hunches. That's why the code we deliver is battle tested.</p>
        </div>
        <div class="qualities__element">
          <img class="icon" src="/img/icons/icon--smartphone.svg" alt="">
          <h3 class="">Responsiveness</h3>
          <p class="">These days, people use mobile devices more often than desktops. We know that, so our products are prepared for all kinds of screens.</p>
        </div>
        <div class="qualities__element">
          <img class="icon" src="/img/icons/icon--cpu.svg" alt="">
          <h3 class="">Best technologies</h3>
          <p class="">To deliver best solutions, we use top-notch front‑end technologies. Major part of our tech stack is Vue.js framework descripted below. Besides that we use Sass, Webpack, Yarn, Docker, Bootstrap and many more!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Qualities"
    }
</script>

<style lang="sass" scoped>
  .qualities
    position: relative
    z-index: 1
    padding-top: 160px
    padding-bottom: 230px

    &__content
      text-align: center

      p
        max-width: 560px
        margin: 25px auto 60px
        color: #9AD1C8

    &__list
      +row-flex
      justify-content: center

    &__element
      +col
      +size(3)
      text-align: center

      h3
        color: #ffffff
        margin-top: 24px
        margin-bottom: 5px
        font-weight: 500
        line-height: 24px

      img
        margin-bottom: 0
        filter: invert(100%)

      p
        color: #9AD1C8
        margin-top: 5px
        font-weight: 400
        line-height: 24px

</style>
