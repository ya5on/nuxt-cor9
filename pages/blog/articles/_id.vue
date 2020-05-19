<template>
  <div>
    <div class="container">
      <nuxt-link active-class="active" to="/blog">
        <--- back
      </nuxt-link>
      <div v-if="errored">
        <p>NO DATA</p>
      </div>

      <div v-else>
        <div v-if="loading">Loading...</div>

        <div v-if="article">
          <div v-if="article.image" :src="api_url + article.image[0].url">
            <h1>{{ article.title }}</h1>
          </div>

          <div class="uk-section">
            <div class="uk-container uk-container-small">
              <div class="cont" v-if="article.content" v-html="$md.render(article.content)"></div>
              <p v-if="article.published_at">
                {{ moment(article.published_at).format("LL") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios, * as others from 'axios'
  let moment = require("moment");

  export default {
    name: 'blog-articles-id',
    data() {
      return {
        article: {},
        api_url: process.env.strapiBaseUri,
        loading: true,
        errored: false,
        moment: moment
      }
    },
    mounted() {
      axios.get('http://cor9.pro/articles/'+ this.$route.params.id)
        .then(response => (this.article = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },


  };
</script>

<style lang="sass">

</style>
