<template>
  <section class="chose">
    <div class="container">
      <div class="chose__content">
        <h2 class="">Why we chose Vue.js</h2>
        <p class="subtitle">Vue.js is the most lightweight and flexible JavaScript framework there is. Take a look at why it should be the main technology for your next front‑end app!</p>
      </div>
      <div class="chose__list">
        <div class="chose__element">
          <img class="icon" src="/img/icons/icon--box.svg" alt="">
          <h3 class="">Component based</h3>
          <p class="">In Vue.js everything is a component. Component-oriented pattern allows to easily reuse already created elements, so that development process takes much less time.</p>
        </div>
        <div class="chose__element">
          <img class="icon" src="/img/icons/icon--feather.svg" alt="">
          <h3 class="">Fast & Small</h3>
          <p class="">Vue.js weights only ~30KB and it'll make your app work faster then ever!</p>
        </div>
        <div class="chose__element">
          <img class="icon" src="/img/icons/icon--maximize-2.svg" alt="">
          <h3 class="">Progressive & Flexible</h3>
          <p class="">Vue.js itself is focused on the view layer, but you can easily add libraries like Vuex or Vue-router when your app's complexity scales up.</p>
        </div>
        <div class="chose__element">
          <img class="icon" src="/img/icons/icon--globe.svg" alt="">
          <h3 class="">Stable ecosystem</h3>
          <p class="">Vue.js and its related libraries are developed and maintained by the same Vue.js core team.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "WhyWeChose"
    }
</script>

<style lang="sass" scoped>
  .chose
    position: relative
    z-index: 1
    padding-top: 60px
    padding-bottom: 15px
    background-color: #fafafa

    &__content
      text-align: center

      h2
        color: $dark-text

      p
        max-width: 560px
        margin: 25px auto 60px
        color: #B0B0B0

    &__list
      +row-flex
      justify-content: center

    &__element
      +col
      +size(3)
      text-align: center

      h3
        color: $dark-text
        margin-top: 24px
        margin-bottom: 5px
        font-size: 18px
        font-weight: 500
        line-height: 24px

      img
        margin-bottom: 0

      p
        color: #B0B0B0
        margin-top: 5px
        font-size: 16px
        font-weight: 400
        line-height: 24px

</style>
