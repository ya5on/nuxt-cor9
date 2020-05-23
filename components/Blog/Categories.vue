<template>
  <div>
    <li v-for="category in categories">
      <nuxt-link :to="{ name: 'blog-categories-id', params: { id: category.id }}">{{ category.name }}
      </nuxt-link>
    </li>
  </div>
</template>

<script>
  import axios, * as others from 'axios'

  export default {
    name: "Categories",
    data () {
      return {
        categories: []
      }
    },
    mounted() {
      axios.get('http://cor9.pro/categories')
        .then(response =>
          (this.categories = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  }

</script>

<style scoped>

</style>
