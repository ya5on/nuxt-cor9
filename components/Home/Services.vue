<template>
  <section class="services" id="services">
    <div class="container">
      <h2>Feautured services</h2>
      <p class="subtitle">Ween revolutionises programming your heating based your daily routine and location.
        It detects when you leave and anticipates your return to adjust the temperature perfectly.
        All without any input from you. Magic!</p>
      <div class="services__items">
        <div class="services__item">
          <img src="/img/icons/icon--monitor.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
          <nuxt-link class="services__link btn btn-green" to="/web">Read more</nuxt-link>
        </div>
        <div class="services__item">
          <img src="/img/icons/icon--server.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
          <nuxt-link class="services__link btn btn-blue" to="/ppc">Read more</nuxt-link>
        </div>
        <div class="services__item">
          <img src="/img/icons/icon--grid.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
          <nuxt-link class="services__link btn btn-red" to="/else">Read more</nuxt-link>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Services",
    components: {}
  }
</script>

<style lang="sass" scoped>
  .services
    padding-top: 75px
    padding-bottom: 100px
    position: relative
    z-index: 1

    h2
      padding-bottom: 25px

    h3
      margin-bottom: 25px

    &__items
      +row-flex
      justify-content: center

    &__item
      +col
      +size(4)
      border-radius: 15px
      background-color: #fff
      color: #0E0F13
      max-width: 500px
      padding: 28px 22px
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      box-shadow: 0 0 50px rgba(75,54,124,.5)

      img
        width: 35px
        color: $main-color
        margin-bottom: 25px

      .text
        color: $light-text
        font-size: 16px

    &__link
      display: block
      margin: 25px 5px 0



</style>
