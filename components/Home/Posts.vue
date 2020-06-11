<template>
  <div class="container">
    <div class="blog__posts">
      23
    </div>
  </div>
</template>

<script>
  import Articles from '~/components/Blog/Articles'
    export default {
        name: "Posts",
      components: {
        Articles
      },
      methods: {
        limitArray(arr, length = 3) {
          if (arr && arr.length) {
            if (length == -1) {
              return arr;
            }
            if (length > arr.length) {
              return arr;
            }
            return arr.slice(0, length);
          }
          return null
        }
      },
    }
</script>

<style lang="sass" scoped>
section
  text-align: center
  color: #0E0F13
  height: 200px
  display: flex
  justify-content: center
  align-items: center
  background-color: #FAFAFA
</style>
