<template>
  <main>
    <div class="ads__landing">
      <Landing></Landing>
    </div>
    <div class="ads__tools">
      <Tools></Tools>
    </div>
    <HireUs class="hire-us--dark"></HireUs>
  </main>
</template>

<script>
  import HireUs from "../../components/HireUs/HireUs";
  import Landing from "../../components/Ads/Landing";
  import Tools from "../../components/Ads/Tools";

  export default {
    name: "ads",
    components: {
      Landing, Tools, HireUs,
    },
    // head () {
    //   return {
    //     title: 'PPC'
    //   }
    // },
  }
</script>

<style lang="sass" scoped>
  .ads__landing
    position: relative
    background-position: center top
    background-image: url("/img/images/Design/landing__bg.svg")
    background-size: cover
    padding-top: 170px

    &::before
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 100%
      background-position: left bottom
      background-image: url("/img/images/Design/landing__path.svg")
      background-size: 100%
      background-repeat: no-repeat
      content: ""
      transform: scaleX(-1)


    &::after
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 300px
      background-position: center bottom
      background-image: url("/img/images/Design/landing__wave.svg")
      background-size: 100%
      background-repeat: no-repeat
      content: ""
      transform: scaleX(-1)


  .ads__responsiveness
    padding-top: 40px
    padding-bottom: 48px
    background-color: #fafafa


  .ads__typography
    position: relative
    padding-top: 240px
    padding-bottom: 120px
    background-position: center top
    background-image: url("/img/images/Design/landing__bg.svg")
    background-size: cover

    &::before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 200px
      background-position: center top
      background-image: url("/img/images/Design/typography__top-wave.svg")
      background-size: 800px 100%
      background-repeat: no-repeat
      content: ""


    &::after
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 60px
      background-position: center bottom
      background-image: url("/img/images/wave--depressed.svg")
      background-size: 100% 100%
      background-repeat: no-repeat
      content: ""


  .ads__semantics
    padding-top: 120px
    padding-bottom: 80px
    background-color: #fafafa

  .ads__rhythm
    position: relative
    padding-top: 180px
    padding-bottom: 120px
    background-position: center top
    background-image: url("/img/images/Design/landing__bg.svg")
    background-size: cover


    &::before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100px
      background-position: center top
      background-image: url("/img/images/Design/rhythm__top-wave.svg")
      background-size: 100% 100%
      background-repeat: no-repeat
      content: ""


    &::after
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 60px
      background-position: center bottom
      background-image: url("/img/images/wave--depressed.svg")
      background-size: 100% 100%
      background-repeat: no-repeat
      content: ""


  .ads__tools
    position: relative
    background-color: #fafafa
    background-position: center bottom
    background-image: url("/img/images/wave--gray.svg")
    background-size: 100% 350px
    background-repeat: no-repeat


  .design__image
    width: 100px


</style>
