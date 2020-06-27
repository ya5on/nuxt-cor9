<template >
  <div class="survey-progress">
    <div class="survey-progress__step" :class="`survey-progress__step--${step}`"></div>
  </div>
</template>

<script>
  export default {
    props: {
      step: {
        type: Number,
        required: true,
        validator(step) {
          return [1, 2, 3, 4].indexOf(step) !== -1
        },
      },
    },
  }
</script>

<style lang="sass" scoped>
  .survey-progress
    position: relative
    width: 100%
    height: 5px
    background-color: rgba($main-color, 0.08)
    margin-bottom: 32px

  .survey-progress__step
    position: absolute
    top: 0
    bottom: 0
    left: 0
    z-index: 5
    width: 0
    background-color: rgba($main-color, 0.2)

  .survey-progress__step--1
    width: 25%

  .survey-progress__step--2
    width: 50%

  .survey-progress__step--3
    width: 75%

  .survey-progress__step--4
    width: 100%
</style>
