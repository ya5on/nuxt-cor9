<template>
  <div>
    <div class="container">
        <h1>blog</h1>
        <Categories/>
        <Articles/>

    </div>
  </div>
</template>

<script>
import Articles from '~/components/Blog/Articles'
import Categories from "~/components/Blog/Categories";

export default {
  data() {
    return {

    }
  },
  components: {
    Articles, Categories
  },

}
</script>

<style lang="sass">

</style>
