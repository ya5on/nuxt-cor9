<template>
  <section class="nav">
    <div class="container">
      <ul class="nav__navbar">
        <li class="nav__item">
          <nuxt-link exact no-prefetch active-class="active" to="/">
            Main
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link active-class="active" to="/web">
            WEB
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link active-class="active" to="/ppc">
            PPC
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link active-class="active" to="/blog">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    components: {

    }
  }
</script>
<style lang="sass">
  .nav
    position: absolute
    top: 0
    z-index: 2
    display: flex
    align-items: center
    justify-content: flex-end
    width: 100%
    height: 70px
    background-color: #091921
    border-bottom: 1px solid #4B367C
    transition: width 1s

    .navB
      width: 50%

    &__navbar
      display: flex
      justify-content: center

    &__item
      a
        display: block
        width: 70px
        position: relative
        background: #091921
        line-height: 40px
        text-align: center
        margin: 0 4px
        color: #fff
        font-size: 16px
        cursor: pointer
        box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1), 2px 2px 6px rgba(0, 0, 0, 0.8)
        appearance: none

    .nuxt-link-exact-active
      color: #E62B4A
      box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 1)
      text-shadow: 0 0 5px #E62B4A, 0 0 25px #E62B4A

</style>
