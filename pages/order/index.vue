<template>
  <main>
    <Landing></Landing>
    <Survey></Survey>
  </main>
</template>

<script>
  import { resetEstimationScope } from '../../services/events'
  import Landing from '../../components/Order/Landing'
  import Survey from '../../components/Order/Survey'
    export default {
        name: "index",
      components: {Landing, Survey},
      beforeDestroy() {
        resetEstimationScope()
      },
    }
</script>

<style scoped>

</style>
