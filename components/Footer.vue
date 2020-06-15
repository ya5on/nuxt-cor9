<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__items">
        <div class="footer__column item--1">
          <nuxt-link class="footer__logo" to="/"><img src="" alt=""/>Logo</nuxt-link>
          <div class="footer__social">
            <a href="">
              <img src="/img/icons/icon--facebook.svg" alt="">
            </a>
            <a href="">
              <img src="/img/icons/icon--instagram.svg" alt="">
            </a>
            <a href="">
              <img src="/img/icons/icon--dribble.svg" alt="">
            </a>
            <a href="">
              <img src="/img/icons/icon--github.svg" alt="">
            </a>
            <a href="">
              <img src="/img/icons/icon--linkedin.svg" alt="">
            </a>
          </div>
        </div>
        <nav class="footer__column item--2">
          <h2 class="footer__title">
            <nuxt-link class="footer__title" to="/">Home</nuxt-link>
          </h2>
          <nuxt-link class="footer__link" :to="{path: '/', hash: 'services'}">Services</nuxt-link>
          <nuxt-link class="footer__link" :to="{path: '/', hash: 'coop'}">Coop</nuxt-link>
          <nuxt-link class="footer__link" :to="{path: '/', hash: 'blog'}">Recent blog posts</nuxt-link>
        </nav>
        <nav class="footer__column item--3">
          <h2 class="footer__title">Services</h2>
          <nuxt-link class="footer__link" to="/web">Web</nuxt-link>
          <nuxt-link class="footer__link" to="/ads">ads</nuxt-link>
          <nuxt-link class="footer__link" to="/order">order</nuxt-link>
        </nav>
        <nav class="footer__column item--4">
          <h2 class="footer__title">Contacts</h2>
          <a class="footer__contact" href="">Email</a>
          <a class="footer__contact" href="">phone1</a>
          <a class="footer__contact" href="">phone1</a>
          <div class="footer__link">Kyiv, Ukraine</div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="sass" scoped>
  .footer
    padding-top: 48px
    padding-bottom: 64px
    background-color: #363537

    &__social
      display: flex
      margin-top: 15px

      a
        width: 32px
        height: 32px
        margin-right: 10px

    &__items
      +row-flex
      justify-content: space-between

    &__column
      display: flex
      flex-direction: column

    &__logo
      font-size: 35px
      color: $main-color

    &__title
      font-size: 18px
      margin-bottom: 8px
      color: #fff

    &__contact
      color: #fff

    &__link
      color: #8DA6AD
      line-height: 24px


    .item--1
      +size(6)

    .item--2
      +size(2)

    .item--3
      +size(2)

    .item--4
      +size(2)

</style>
