<template>
  <div class="ppc">
    <section class="ppc__inner">
      <div class="container">
        ppc
      </div>
    </section>
  <client-only>
      <BackToTop bottom="50px" right="50px" visibleoffset="700">
        <img class="btn-to-top" src="~assets/img/topBtn.png" alt="">
      </BackToTop>
    </client-only>
  </div>
</template>

<script>

    export default {
        name: "ppc",
      head () {
        return {
          title: 'PPC'
        }
      },
    }
</script>

<style lang="sass" scoped>

</style>
