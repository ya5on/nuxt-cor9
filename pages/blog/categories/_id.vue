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
import Articles from '~/components/Articles'
import axios from "axios";

export default {
  components: {
    Articles
  },
  data() {
    return {
      category: []
    }

  },
  props: {

  },

  mounted() {
    axios.get('http://cor9.pro/categories/'+ this.$route.params.id)
      .then(response => (this.category = response.data))
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

}
</script>
