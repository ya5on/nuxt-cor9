<template>
  <div class="landing">
    <div class="row column text-center">
      <img class="c-white-80 mb-32 medium-mb-40" type="icon--watch">
      <h1 class="o-heading-1 c-white">title h1</h1>
      <p class="o-paragraph c-white-60 mt-16 medium-mt-4 max-w-560">text</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .landing
    position: relative
    padding-top: 128px
    padding-bottom: 184px
    background-position: center top
    background-image: url("/img/images/Estimate/landing__bg.svg")
    background-size: cover

    &::before
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 120px
      background-position: center bottom
      background-image: url("/img/images/Estimate/landing__wave.svg")
      background-size: 800px 100%
      background-repeat: no-repeat
      content: ""

</style>
