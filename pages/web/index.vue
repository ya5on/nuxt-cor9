<template>
  <div class="web">
    <div class="web__landing wave--sinus">
      <Landing/>
      <div class="web__qualities">
        <Qualities/>
      </div>
    </div>
    <Chose/>
    <div class="web__portfolio">
      <Portfolio/>
    </div>
    <div class="web__technologies">
      <Technologies/>
    </div>
    <HireUs class="hire-us--dark"/>
  </div>
</template>

<script>
  import Landing from "../../components/Web/Landing";
  import Qualities from "../../components/Web/Qualities";
  import Chose from "../../components/Web/Chose";
  import Portfolio from "../../components/Web/Portfolio";
  import Technologies from "../../components/Web/Technologies";
  import HireUs from "../../components/HireUs/HireUs";

  export default {
    name: "web",
    components: {
      Landing, Qualities, Chose, Portfolio, Technologies, HireUs
    },
  };
</script>

<style lang="sass" scoped>
  .web

    &__landing
      padding-top: 170px
      position: relative
      background-position: center top
      background-image: linear-gradient(135deg, #47b784 0%, #009d90 26%, #00818e 50%, #25647b 74%, #36495d 100%)
      background-size: cover
      overflow: hidden

      &::before
        position: absolute
        top: 0
        left: 0
        width: 70%
        height: 100%
        background-position: left top
        background-image: url("/img/images/qualities__oval.svg")
        background-size: contain
        background-repeat: no-repeat
        content: ""


    &__qualities
      position: relative
      margin-top: 32px
      background-position: center top
      background-size: 100% 100%

      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 450px
        background-position: center top
        background-image: url("/img/images/wave--qualities.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

      &::after
        position: absolute
        top: 450px
        left: 0
        width: 100%
        height: 100%
        background-color: rgba(#000, 0.16)
        content: ""

    &__portfolio
      position: relative
      background-position: center bottom
      background-image: url("/img/images/Vue/inventi__bg.svg")
      background-size: cover

      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 220px
        background-position: center top
        background-image: url("/img/images/Vue/inventi__wave.svg")
        background-size: 100%
        background-repeat: no-repeat
        content: ""
        +md(height, 120px)


      &::after
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 80px
        background-position: center bottom
        background-image: url("/img/images/wave--depressed.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

    &__technologies
      position: relative
      background-color: #FAFAFA
      background-position: center bottom
      background-image: url("/img/images/wave--gray.svg")
      background-size: 100% 400px
      background-repeat: no-repeat



</style>
