<template>
<div>
  <article class="article">
    <div class="article__content">
      <div>
        <div v-if="published_at">{{ moment(published_at).format("LL") }}</div>
        <h2 class="">{{ title }}</h2>
      </div>
      <div class="crop-text" v-if="content" v-html="$md.render(content)"></div>
      <nuxt-link class="article__btn btn btn-green" :to="{ name: 'blog-articles-id', params: {id: id} }" :key="id">
        Read more
      </nuxt-link>
    </div>
    <div class="article__cover">
      <nuxt-link class="article__img"
                 :to="{ name: 'blog-articles-id', params: {id: id} }"
                 :style="{ backgroundImage: `url(${api_url + img})` }"
                 :class="`article__triangle--${triangleDirection}`">

      </nuxt-link>

    </div>
  </article>
</div>
</template>

<script>

  let moment = require("moment");
  export default {
    name: "Articles",

    data() {
      return {
        api_url: process.env.strapiBaseUri,
        moment: moment,
      }
    },
    props: {
      id: {
        type: Number
      },
      published_at: {
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      triangleDirection: {
        type: String,
        required: true,
      },
    },


  }
</script>

<style lang="sass">
    .article
      display: flex
      justify-content: space-between
      border-radius: 8px
      background-color: #292929
      box-shadow: 0 12px 25px 0 rgba(54,53,55,.05)
      box-sizing: border-box
      margin-bottom: 50px
      overflow: hidden
      min-height: 350px
      max-height: 380px
      +md(flex-direction, column)
      +md(max-height, auto)


      &__content
        +size(6)
        +size-md(12)
        color: #0E0F13
        padding: 48px 40px
        display: flex
        flex-direction: column
        justify-content: space-between

      h2
        line-height: 1

      .crop-text
        display: -webkit-box
        -webkit-line-clamp: 4
        -webkit-box-orient: vertical
        overflow-y: hidden

        p
          display: none

          &:first-of-type
            display: block
            max-height: 70px

        h1, h2, h3, h4, img, code
          display: none

      &__btn
        margin: 5px 0

      &__cover
        +size(6)
        +size-md(12)
        height: auto
        background-size: cover
        background-repeat: no-repeat
        position: relative


      &__img
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 100%
        background-position: 50%
        background-size: cover
        background-repeat: no-repeat
        transition-duration: .4s
        transition-property: transform
        transition-timing-function: ease
        overflow: hidden

        /*&:hover*/
        /*  filter: blur(10px)*/


      &__triangle--right,
      &__triangle--left
          &::after
            position: absolute
            bottom: 0
            left: 0
            width: 100px
            height: 100%
            content: ""

      &__triangle--right
          &::after
            background: linear-gradient(to right bottom, #292929 50%, transparent 50%) no-repeat

      &__triangle--left
          &::after
            background: linear-gradient(to left bottom, transparent 50%, #292929 50%) no-repeat

</style>
