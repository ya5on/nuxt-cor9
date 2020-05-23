<template>
  <div class="web">
    <div class="web__background wave--sinus">
      <Landing/>
      <div class="web__qualities">
        <Qualities></Qualities>
      </div>
    </div>
    <div style="height: 400px; background: grey;"></div>
  </div>
</template>

<script>
  import Landing from "../../components/Web/Landing";
  import Qualities from "../../components/Web/Qualities";
  export default {
    name: "web",
    components: {
      Landing, Qualities
    },
  };
</script>

<style lang="sass" scoped>
  .web

    &__background
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

</style>
