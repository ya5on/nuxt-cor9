<template>
  <div class="landing">
    <div class="container">
      <div class="landing__column">
        <div class="landing__content">
          <img src="/img/icons/icon--monitor.svg" alt="">
          <p class="tags">FRONT‑END · VUE.JS · JAVASCRIPT · HTML5 · CSS3 · RESPONSIVE</p>
          <h1 class="title">Vue.js front‑end development</h1>
          <p class="subtitle description">We are experts at creating beautiful and responsive front‑end applications using Vue.js.</p>
        </div>
        <div class="btn-group">
          <nuxt-link class="btn btn-dark" to="/order">Order project</nuxt-link>
          <button class="btn btn-contact" type="button" @click="openContactModal()">contact us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Landing"
  }
</script>

<style lang="sass" scoped>
  .landing
    position: relative
    z-index: 1

    &__column
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column

    &__content
      display: flex
      flex-direction: column
      align-items: center
      color: #9AD1C8

      img
        margin-bottom: 40px

      .tags
        margin-bottom: 18px
        line-height: 16px


      .title
        margin-bottom: 18px
        font-weight: 900
        color: #ffffff
        line-height: 56px

      .description
        margin-bottom: 40px
        max-width: 560px
        text-align: center
        color: #9AD1C8



</style>
