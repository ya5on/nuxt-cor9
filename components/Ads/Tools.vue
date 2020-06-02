<template>
  <section class="tools">
    <div class="container">
      <div class="tools__content">
        <div class="">
          <h2 class="">Tools</h2>
          <p class="subtitle">Take a look at the tools we use to make those beautiful user interfaces!</p>
        </div>
        <div class="tools__icons">
          <img src="/img/icons-technologies/sketch.svg" alt="" />
          <img src="/img/icons-technologies/photoshop.svg" alt="" />
          <img src="/img/icons-technologies/marvel.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Tools"
    }
</script>

<style lang="sass" scoped>
  .tools
    padding-top: 80px
    padding-bottom: 104px

    h2
      color: $dark-text
      text-align: center
      line-height: 36px

    p
      max-width: 560px
      margin: 25px auto 60px
      color: #B0B0B0
      text-align: center

    &__icons
      display: flex
      flex-wrap: wrap
      max-width: 800px
      justify-content: center
      margin: 0 auto

      img
        width: 84px
        height: 84px
        margin: 20px
        border-radius: 100%
        box-shadow: 0 12px 17px 0 rgba($dark-text, 0.1)

</style>
