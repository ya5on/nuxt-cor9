<template>
  <div class="landing">
    <div class="container">
      <div class="landing__content">
        <img class="icon" src="/img/icons/icon--watch.svg" alt="">
        <h1 class="title">Order project</h1>
        <p class="subtitle">Fill in this form to get a free project estimation. We’ll contact you within 1 week to discuss next steps.</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .landing
    position: relative
    padding-top: 170px
    padding-bottom: 184px
    background-position: center top
    background-image: url("/img/images/Estimate/landing__bg.svg")
    background-size: cover

    &::before
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 190px
      background-position: center bottom
      background-image: url("/img/images/Estimate/landing__wave.svg")
      background-size: 100% 100%
      background-repeat: no-repeat
      content: ""

    .title
      margin-bottom: 18px
      font-weight: 900
      color: #ffffff
      line-height: 56px

    &__content
      text-align: center

      img
        margin-bottom: 40px

    .subtitle
      max-width: 560px
      margin: 0 auto 40px
      color: $light-text
</style>
