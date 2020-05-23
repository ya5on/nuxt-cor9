<template>
  <div>
    <div class="container">
      <div>atricles count: {{articles.length}}</div>
      <div v-if="errored">
        <p>NO DATA</p>
      </div>

      <div v-else class="main-art">
        <div v-if="loading">Loading...</div>

        <div v-else v-for="article in articles" class="article">


          <nuxt-link :to="{ name: 'blog-articles-id', params: {id: article.id} }" :key="article.id">
            <p class="title">{{ article.title }}</p>
            <div v-if="article.image">
              <img :src="api_url + article.image[0].url" alt="">
            </div>
            <div v-if="article.category">{{ article.category.name }}</div>
            <div v-if="article.published_at">{{ moment(article.published_at).format("LL") }}</div>
          </nuxt-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios, * as others from 'axios'

  let moment = require("moment");
  export default {
    name: "Articles",

    data() {
      return {
        articles: [],
        api_url: process.env.strapiBaseUri,
        loading: true,
        errored: false,
        moment: moment

      }
    },
    // props: {
    //   articles: Array
    // },
    // computed: {
    //   leftArticlesCount() {
    //     return Math.ceil(this.articles.length / 5)
    //   },
    //   leftArticles() {
    //     return this.articles.slice(0, this.leftArticlesCount)
    //   },
    //   rightArticles() {
    //     return this.articles.slice(this.leftArticlesCount, this.articles.length)
    //   }
    // },

    mounted() {
      axios
        .get('http://cor9.pro/articles')
        .then(response => {
          this.articles = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  }
</script>

<style lang="sass">
  .main-art
    display: flex
    justify-content: center

    .article
      width: 250px
      min-height: 350px
      margin: 10px

      img
        height: 350px


</style>
