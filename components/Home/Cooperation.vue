<template>
  <section class="coop" id="coop">
    <div class="container">
      <div class="">
        <h2 class="">Lorem ipsum dolor sit amet, consectetur.</h2>
        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, nobis ut. Minus numquam perferendis quaerat.</p>
      </div>
      <div class="coop__items">
        <div class="coop__item">
          <img class="icon" src="/img/icons/icon--briefcase.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
        </div>
        <div class="coop__item">
          <img class="icon" src="/img/icons/icon--settings.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
        </div>
        <div class="coop__item">
          <img class="icon" src="/img/icons/icon--fast-forward.svg" alt="">
          <h3>Vue.js front‑end</h3>
          <p class="text">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

    export default {
        name: "Cooperation",
      components: {

      }
    }
</script>

<style lang="sass" scoped>
  .coop
    position: relative
    padding-top: 250px
    padding-bottom: 80px
    background-position: center top
    background-image: url("/img/Services/flexible__bg.svg")
    background-size: cover


    &::after
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 180px
      background-position: center top
      background-image: url("/img/wave--triple.svg")
      background-size: 100%
      background-repeat: no-repeat
      content: ""

    h2
      padding-bottom: 15px

    h3
      margin-bottom: 15px
      color: #ECE9F7
      font-weight: bold

    &__items
      +row-flex
      justify-content: center
      margin-top: 40px

    &__item
      +col
      +size(4)
      color: #0E0F13
      max-width: 500px
      padding: 28px 22px
      display: flex
      flex-direction: column
      align-items: center
      text-align: center

      img
        filter: invert(100%)

      .text
        color: #C2B7E3
        font-size: 16px
</style>
