<template>
  <section class="navbar">
    <div class="container">
      <nav class="nav">
        <div class="nav__logo">
          <nuxt-link class="logo" to="/">Logo</nuxt-link>
        </div>
        <ul class="nav__navbar">
          <li class="nav__item">
            <nuxt-link exact no-prefetch active-class="active" to="/">
              Home
            </nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link active-class="active" to="/web">
              Web
            </nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link active-class="active" to="/ads">
              ppc
            </nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link active-class="active" to="/blog">
              Blog
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    components: {

    }
  }
</script>
<style lang="sass" scoped>
  .navbar
    position: absolute
    top: 0
    z-index: 2
    width: 100%
    border-bottom: 1px solid $main-color
    transition: width 1s

  .nav
    display: flex
    align-items: center
    justify-content: space-between
    margin: 25px 0

    &__logo
      font-size: 35px
      font-weight: bold

      .logo
        color: $main-color


    &__navbar
      display: flex
      justify-content: center

    &__item
      a
        display: block
        position: relative
        text-align: center
        margin: 0 4px
        padding: 0 10px
        color: #fff
        font-size: 16px
        cursor: pointer
        transition: all .5s

        &:hover
          transform: translateY(-3px)
          color: $main-color

    .nuxt-link-exact-active
      color: $main-color

</style>
