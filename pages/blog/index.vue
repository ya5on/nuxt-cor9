<template>
  <main class="blog blog__bg">

    <section class="blog__content">
      <div class="container">
        <div class="row">
          <h1 class="">Blog</h1>
          <p class="">We blog about web development, Vue.js, Node.js and UI & UX design. Read some of the blog posts to get to know our expertise!</p>
        </div>
        <div class="blog__posts">
          <!--      <div v-if="article.category">{{ article.category.name }}</div>-->
            <Articles v-for="(article, index) in ARTICLES"
                      :key="article.id"
                      :triangle-direction="index % 2 === 0 ? 'right' : 'left'"
                      :title="article.title"
                      :content="article.content"
                      :published_at="article.published_at"
                      :id="article.id"
                      :img="article.img.url" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Articles from '~/components/Blog/Articles'
import Categories from "~/components/Blog/Categories"

import {mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {

    }
  },
  components: {
    Articles, Categories
  },
  computed: {
    ...mapGetters([
        'ARTICLES'
      ]
    ),
  },
  methods: {
    ...mapActions([
      'GET_ARTICLES_FROM_API'
    ]),
  },
  mounted() {
    this.GET_ARTICLES_FROM_API()
  }


}
</script>

<style lang="sass">
  .blog
    padding-top: 50px
    position: relative
    background-color: #EFEFEF

    &__bg
      width: 100%
      background-position: center center
      background-image: linear-gradient(128deg, #606060 0%, #292929 100%)

      &::after,
      &::before
        position: absolute
        left: 0
        width: 100%
        content: ""

      /*&::after*/
      /*  bottom: 0*/
      /*  z-index: 4*/
      /*  height: 500px*/
      /*  background-position: bottom*/
      /*  background-image: url("/img/images/wave--blog.svg")*/
      /*  background-size: cover*/
      /*  background-repeat: no-repeat*/

      &::before
        top: 0
        z-index: 3
        height: 100%
        background-position: top
        background-image: url("/img/confetti--white.svg")
        background-size: 200px
        opacity: 0.06

    &__content
      position: relative
      z-index: 5
      padding-top: 112px

    &__posts
      position: relative
      z-index: 5
      padding-top: 48px
      padding-bottom: 64px

</style>
