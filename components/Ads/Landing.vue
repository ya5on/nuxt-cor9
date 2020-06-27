<template>
  <div class="landing">
    <div class="container">
      <div class="landing__content">
          <img class="icon" src="/img/icons/icon--grid.svg" alt="">
          <p class="tags">WEB DESIGN · UI · UX · RESPONSIVE · PROTOTYPE · WIREFRAME</p>
          <h1 class="title">UI & UX design</h1>
          <p class="subtitle">We love to design responsive and pixel-perfect user interfaces with top-notch user
            experience.</p>
        <div class="btn-group">
          <nuxt-link class="btn btn-dark" to="/order">Order project</nuxt-link>
          <button class="btn btn-contact" type="button" @click="openContactModal()">contact us</button>
        </div>
      </div>
      <div class="landing__items">
        <article class="landing__card">
          <div class="">
            <img class="icon" src="/img/icons/icon--grid.svg" alt="">
          </div>
          <div class="card__content">
            <h3 class="card__title">UI design</h3>
            <p class="card__desc">Modern web application doesn't just display things, but also interact with user. We design user interfaces keeping in mind, that it's just a static representation of your dynamic product.</p>
          </div>
        </article>

        <article class="landing__card">
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
    padding-bottom: 32px

    .title
      margin-bottom: 18px
      font-weight: 900
      color: #ffffff
      line-height: 56px

    &__content
      text-align: center

      img
        margin-bottom: 40px

      .tags
        margin-bottom: 18px
        line-height: 16px
        color: $light-text

    .subtitle
      max-width: 560px
      margin: 0 auto 40px
      color: $light-text

    &__items
      margin-top: 148px
      +row-flex
      justify-content: center

    &__card
      +size(6)
      display: flex
      flex-direction: column
      align-items: center
      max-width: 370px
      margin-bottom: 40px
      margin-right: 15px
      margin-left: 15px
      padding: 48px 40px
      border-radius: 8px
      background-color: #fff
      box-shadow: 0 12px 25px 0 rgba(54,53,55,.05)
      text-align: center

  .card__content
    color: #B0B0B0

  .card__title
    margin-bottom: 15px


</style>
