<template>
  <client-only>
    <BackToTop bottom="50px" right="50px" visibleoffset="600">
      <img class="btn-to-top" src="~assets/img/topBtn.png" alt="">
    </BackToTop>
  </client-only>
</template>

<script>
    export default {
        name: "ToTopBtn"
    }
</script>

<style lang="sass" scoped>
  .btn-to-top
    width: 45px
    height: 45px
    display: block
    opacity: .6
    transition: all .3s ease-in
    cursor: pointer
    outline: none
    +md(display, none)

    &:hover
      opacity: 1
      border-color: $main-color
      color: $main-color
</style>
