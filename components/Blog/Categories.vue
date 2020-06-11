<template>
  <div>
    <li v-for="category in categories" :key="category.id" :category_data="category">
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
        categories: [],
        loading: true,
        errored: false,
      }
    },
    mounted() {
      axios.get('http://localhost:1337/categories')
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
