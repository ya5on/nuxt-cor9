<template>
  <section class="portfolio">
    <div class="container">
      <h2>Us + Vue.js = 🚀</h2>
      <p class="subtitle">We know how to make great stuff with Vue.js. Take a look at these sources to see what we can do!</p>
      <div class="portfolio__items">
        <div class="portfolio__item">
          <img class="icon" src="/img/icons/icon--github-2.svg" alt="">
          <h3>Our Vue.js libraries</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
          <nuxt-link class="portfolio__link btn btn-green" to="/">Read more</nuxt-link>
        </div>
        <div class="portfolio__item">
          <img class="icon" src="/img/icons/icon--unlock.svg" alt="">
          <h3>Our website</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
          <nuxt-link class="portfolio__link btn btn-blue" to="/">Read more</nuxt-link>
        </div>
        <div class="portfolio__item">
          <img class="icon" src="/img/icons/icon--message-circle.svg" alt="">
          <h3>Our publications</h3>
          <p class="text">From time to time, we write about the problems we have experienced and the solutions we’ve found. We share our knowladge on the blog.</p>
          <nuxt-link class="portfolio__link btn btn-red" to="/">See our blog</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style lang="sass" scoped>
  .portfolio
    padding-top: 250px
    padding-bottom: 140px
    position: relative
    z-index: 1
    +md(padding-top, 130px)
    +md(padding-bottom, 60px)

    h2
      padding-bottom: 25px
      text-align: center

    .subtitle
      text-align: center
      margin: 0 auto 60px

    h3
      margin-bottom: 25px

    &__items
      +row-flex
      justify-content: center

    &__item
      +col
      +size(4)
      +size-md(12)
      border-radius: 15px
      background-color: #fff
      color: #0E0F13
      max-width: 500px
      padding: 45px 35px
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      box-shadow: 0 0 50px rgba(75,54,124,.5)
      +md(margin-bottom, 35px)


      .text
        color: $light-text
        font-size: 16px
        margin-bottom: 35px

    &__link
      display: block
      margin: auto 5px 0




</style>
