<template>
  <div class="landing text-center">
    <div class="container">
      <div class="landing__content">
        <div class="landing__title">
          <img class="icon" src="/img/icons/icon--grid.svg" alt="">
          <p class="">WEB DESIGN · UI · UX · RESPONSIVE · PROTOTYPE · WIREFRAME</p>
          <h1 class="title">UI & UX design</h1>
          <p class="subtitle">We love to design responsive and pixel-perfect user interfaces with top-notch user
            experience.</p>
        </div>
        <div class="btn-group">
          <nuxt-link class="btn btn-dark" to="/">Estimate project</nuxt-link>
          <button class="btn btn-contact" type="button" @click="openContactModal()">contact us</button>
        </div>
      </div>
      <div class="landing__uiux">
        <article class="">
          <div class="">
            <img class="icon" src="/img/icons/icon--grid.svg" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">UI design</h3>
            <p class="card__desc">Modern web application doesn't just display things, but also interact with user. We design user interfaces keeping in mind, that it's just a static representation of your dynamic product.</p>
          </div>
        </article>

        <article class="">
          <div class="">
            <img class="icon" src="/img/icons/icon--grid.svg" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">UX design</h3>
            <p class="card__desc">User experience has much broader meaning than UI. It's sum of all occured events and displayed things that effect user's experience. We know that even subtle details count, so we care of them.</p>
          </div>
        </article>
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
    padding-top: 120px
    padding-bottom: 32px

    &__title
      text-align: center

  .subtitle
      max-width: 560px
      margin: 0 auto

  .landing__uiux
      margin-top: 148px

</style>
