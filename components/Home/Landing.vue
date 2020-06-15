<template>
  <section class="landing">
    <div class="container">
      <div class="landing__items">
        <div class="landing__text">
          <h1>We are Vue.js & Node.js web development agency based in Kyiv</h1>
          <p>We excel at building modern web applications, providing full-stack JavaScript and Google Ads services for
            websites, companies and startups.</p>
          <div>
            <nuxt-link class="btn btn-red" to="/order">Order project</nuxt-link>
            <button class="btn-contact btn" type="button" @click="openContactModal()">contact us</button>
          </div>
        </div>
        <div class="landing__slider">
          <img
            :src="`img/examples/1-${productImageIndex}.jpg`"
            class="landing__img"
            @click="updateImage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Landing",
    components: {},
    data() {
      return {
        carouselImages: null,
        productImageIndex: 0,
      };
    },
    created() {
      this.carouselImages = setInterval(() => {
        this.updateImage();
      }, 500);
    },
    destroyed() {
      clearInterval(this.carouselImages);
    },
    methods: {
      updateImage() {
        this.productImageIndex = (this.productImageIndex + 1) % 6;
      },
    },
  }
</script>

<style lang="sass" scoped>
  .landing
    width: 100%

    &__items
      +row-flex
      margin: 0 auto

    &__text
      +size(7)

    &__slider
      +size(5)
      display: flex
      justify-content: flex-end

    &__img
        display: block
        height: 450px
        width: 360px
        object-fit: cover

</style>
