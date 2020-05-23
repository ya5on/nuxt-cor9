<template>
  <div id="app">
    <Navbar/>
    <nuxt/>
    <Footer/>
    <ToTopBtn/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import ToTopBtn from "../components/ToTopBtn"

  export default {
    components: {
      Navbar,
      Footer,
      ToTopBtn
    },
  }
</script>
<style lang="sass">

</style>
