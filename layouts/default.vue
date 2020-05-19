<template>
  <div id="app">
    <navbar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import navbar from '@/components/navbar'
  import Footer from '@/components/Footer'

  export default {
    components: {
      navbar,
      Footer
    },
  }
</script>
<style lang="sass">

</style>
