<template>
  <main>
    <div class="background wave--sinus">
      <Landing/>
      <Services/>
    </div>
    <HireUs/>
    <Cooperation/>
  </main>
</template>

<script>
  import Landing from "../components/Home/Landing";
  import Services from "../components/Home/Services";
  import Cooperation from "../components/Home/Cooperation";
  import HireUs from "../components/HireUs/HireUs";

  export default {
    components: {
      Landing, Services, Cooperation, HireUs,
    },
    data () {
      return {

      }
    },
  }

</script>

<style lang="sass" scoped>
  .background
    padding-top: 150px
    position: relative
    background-color: #0E0F13
    background-position: top
    background-image: url("/img/Home/landing__bg.svg")
    background-size: cover
    background-repeat: no-repeat

    &:before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-position: top
      background-image: url("/img/confetti--white.svg")
      background-size: 200px
      content: ""
      opacity: 0.06

</style>
