<template>
  <section class="hire-us">
    <div class="container">
      <div class="hire-us__items">
        <div class="hire-us__item">
          <h2 class="hire-us__title">Want to work with us?</h2>
        </div>
        <div class="hire-us__item right">
          <nuxt-link class="hire-us__btn btn" to="/">Estimate project</nuxt-link>
          <button class="btn-contact btn" type="button" @click="openContactModal()">contact us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HireUs"
  }
</script>

<style lang="sass">
  .hire-us
    padding: 130px 0
    background-color: #FAFAFA

    &__items
      +row-flex
      justify-content: center
      align-items: center

    &__item
      +col
      +size(6)

    .right
      display: flex
      justify-content: flex-end
    .btn
      display: inline-block

      &:hover
        transform: translateY(-4px)
        opacity: .8

    &__title
      color: rgba(54,53,55,.8)
      font-size: 36px
      font-weight: bold

    &__btn
      width: 100%
      max-width: 190px
      margin: 8px
      border: 1px solid transparent
      background-image: linear-gradient(-226deg, #b73dc7 0%, #a740c4 8%, #714bbb 38%, #5358cf 66%, #3f64d4 84%, #2b69dd 100%)
      color: #fff


</style>
