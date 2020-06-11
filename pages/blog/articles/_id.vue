<template>
  <main class="blog-id">
    <!--    <LoadingBar class="blog-post__progress"></LoadingBar>-->
    <div class="blog-post wave--sinus" v-if="article.img"
         :style="{ 'background-image': `url(${api_url + article.img.url})` }">
      <div class="container">
        <div class="blog-post__titles">
          <nuxt-link active-class="active" to="/blog">
            <--- back
          </nuxt-link>
          <p v-if="article.published_at">
            {{ moment(article.published_at).format("LL") }}
          </p>

          <h1>{{ article.title }}</h1>
          <!--          <p class="fs-11 fw-medium c-white-90 mt-8 mb-40 letter-3">{{ post.data.tags }}</p>-->
        </div>
      </div>
    </div>
      <div class="blog-post__content">
          <div class="column">
            <div v-if="article.content" v-html="$md.render(article.content)"></div>

            <!--          <DynamicHTML class="blog-post__article" :template="post.html"></DynamicHTML>-->
            <!--          <ShareButtons :title="$t(this.post.data.title)" :description="$t(this.post.data.description)"></ShareButtons>-->
          </div>
      </div>
  </main>
</template>

<script>
  let moment = require("moment");
  import axios, * as others from 'axios'

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
    props: {},
    mounted() {
      axios.get('http://localhost:1337/articles/' + this.$route.params.id)
        .then(response => (this.article = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },

    methods: {}
  };
</script>

<style lang="sass">
  .blog-id
    background-color: #F7F7F7

  .blog-post
    position: relative
    padding-top: 220px
    padding-bottom: 200px
    background-color: rgba($light-text, 0.3)
    background-position: center center
    background-size: cover
    background-blend-mode: overlay
    text-align: center
    z-index: 2

    &::before
      position: absolute
      z-index: 1
      top: 0
      left: 0
      width: 100%
      height: 250px
      background: linear-gradient(to bottom, rgba(#000, 0.4) 0%, rgba(#000, 0) 100%)
      content: ""

    &__titles
      position: relative
      z-index: 10

      a
        margin: 10px 0
        text-align: left
        display: block
        color: $main-color

      p, h1
        margin: 10px 0


    &__content
      max-width: 960px
      margin: 0 auto
      padding-left: 30px
      padding-right: 30px
      position: relative
      width: 100%

      h1, h2, h3, h4, h5, h6
        color: #363537
        font-weight: bold
        margin-top: 36px
        margin-bottom: 12px

      h2
          margin-top: 36px
          margin-bottom: 12px
          font-size: 28px
          line-height: 28px

      h3
          margin-top: 36px
          margin-bottom: 8px
          font-size: 24px
          line-height: 24px

      h4
          font-size: 18px
          line-height: 18px
          margin-top: 36px
          margin-bottom: 12px

      p, li
          color: #363537
          font-size: 18px
          line-height: 32px
          margin-top: 26px
          margin-bottom: 12px

          &:last-of-type
            margin-bottom: 0
            padding-bottom: 12px

      code
        padding: 2px 4px
        border-radius: 4px
        background-color: #f9f2f4
        color: #c7254e
        font-family: Menlo,Monaco,Consolas,Courier New,monospace
        font-size: 90%

</style>
