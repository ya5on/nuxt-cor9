<template>
  <div>
    <div class="container">
      <div class="uk-container uk-container-large">
        <h1>{{ category.name }}</h1>

        <Articles :articles="category.articles"></Articles>

      </div>
    </div>
  </div>
</template>

<script>
import Articles from '~/components/Blog/Articles'
import axios, * as others from 'axios'

export default {
  components: {
    Articles
  },
  data() {
    return {
      category: []
    }
  },
  mounted() {
    axios.get('http://localhost:1337/categories/'+ this.$route.params.category)
      .then(response => (this.category = response.data))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },


}
</script>
