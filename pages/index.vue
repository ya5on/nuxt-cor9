<template>
  <main>
    <header class="head">
      <div class="container">
        <h1>Main page</h1>
        <p>lorem100</p>
      </div>
    </header>
    <section class="services">
      <div class="container">
        <h2>Feautured services</h2>
        <div class="services__items">
          <nuxt-link class="services__item" to="/web">
            WEB
          </nuxt-link>
          <nuxt-link class="services__item" to="/ppc">
            PPC
          </nuxt-link>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
  export default {
    components: {}
  };
</script>

<style lang="sass" scoped>
  .head
    background-color: #0E0F13
    width: 100%
    height: 100vh

  h1
    padding-top: 100px

  .services
    padding-top: 75px
    padding-bottom: 100px

    h2
      padding-bottom: 50px

    &__items
      +row-flex
      justify-content: space-between

    &__item
      +col
      +size(6)
      border: 1px solid red


</style>
