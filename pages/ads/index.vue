<template>
  <main>
    <div class="ads__landing">
      <Landing></Landing>
    </div>
    <section class="ads__responsiveness">
      <div class="container">
        <div class="responsiveness">
          <div class="responsiveness__item--1">
            <h2 class="">Responsiveness</h2>
            <p class="tools__desc">We know that your app will be displayed on variety of different devices, that's why
              it
              is crucial to design having responsiveness in mind. Mobile, tablet, desktop and all the ones in between -
              we've got that all covered! The rules of Responsive Web Design (RWD) are fundamental for the interfaces we
              create.</p>
          </div>
          <div class="responsiveness__item--2">
            <img class="design__image" src="/img/Design/responsiveness__image.svg"/>
          </div>
        </div>
      </div>
    </section>
    <section class="ads__typography">
      <div class="container">
        <div class="typography">
          <div class="typography__item--1">
            <img class="design__image" src="/img/Design/typography__image.svg"/></div>
          <div class="typography__item--2">
            <h2 class="">Refined typography</h2>
            <p class="tools__desc">In most cases, content defines value of your product. Even most beautiful design is worthless without substance. Design lives for the content, not vice versa. However, just putting text somewhere on your page doesn't make it valuable. It's important to take care about typography, i.e. give more focus to headlines, set proper line heights, choose best fonts for one-line labels, multi-line paragraphs and much much more. We put our effort and experience to make your content enjoyable to read.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="ads__semantics">
      <div class="container">
        <div class="semantics">
          <div class="semantics__item--1">
            <h2 class="">Caring for semantics</h2>
            <p class="tools__desc">Every subtle detail can carry information. That's why it's important to use these details carefully and reasonably. For example, green color is associated with successful operation. Considering this, green notification about invalid data can be misleading. We know about all these subtle meanings and so that all possible semantic ambiguities - we turn into our strength.</p>
          </div>
          <div class="semantics__item--2">
            <img class="design__image" src="/img/Design/semantics__image.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="ads__rhythm">
      <div class="container">
        <div class="rhythm">
          <div class="rhythm__item--1">
            <img class="design__image" src="/img/Design/rhythm__image.svg"/>
          </div>
          <div class="rhythm__item--2">
            <h2 class="">Horizontal and vertical rhythm</h2>
            <p class="tools__desc">Human eye likes consistency, that's why it is really important to maintain both horizontal and vertical rythms across elements. Grids and well defined typography help us achieve that in the apps we craft.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="ads__tools">
      <Tools></Tools>
    </div>
    <HireUs class="hire-us--dark"></HireUs>
  </main>
</template>

<script>
  import HireUs from "../../components/HireUs/HireUs";
  import Landing from "../../components/Ads/Landing";
  import Tools from "../../components/Ads/Tools";

  export default {
    name: "ads",
    components: {
      Landing, Tools, HireUs,
    },
    // head () {
    //   return {
    //     title: 'PPC'
    //   }
    // },
  }
</script>

<style lang="sass" scoped>
  .ads__landing
    position: relative
    background-position: center top
    background-image: url("/img/Design/landing__bg.svg")
    background-size: cover
    padding-top: 170px

    &::before
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 100%
      background-position: left bottom
      background-image: url("/img/Design/landing__path.svg")
      background-size: 100%
      background-repeat: no-repeat
      content: ""
      transform: scaleX(-1)


    &::after
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 300px
      background-position: center bottom
      background-image: url("/img/Design/landing__wave.svg")
      background-size: 100%
      background-repeat: no-repeat
      content: ""
      transform: scaleX(-1)


  .ads__responsiveness
      padding-top: 140px
      padding-bottom: 48px
      background-color: #fafafa
      color: $dark-text
      text-align: justify

      .responsiveness
        +row-flex
        justify-content: space-around

        &__item--1
          +size(6)

        &__item--2
          +size(3)
          display: flex
          justify-content: flex-end


  .ads__typography
      position: relative
      padding-top: 300px
      padding-bottom: 150px
      background-position: center top
      background-image: url("/img/Design/landing__bg.svg")
      background-size: cover
      text-align: justify

      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 250px
        background-position: center top
        background-image: url("/img/Design/typography__top-wave.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""


      &::after
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 100px
        background-position: center bottom
        background-image: url("/img/images/wave--depressed.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

      .typography
        +row-flex
        justify-content: space-around

        h2
          text-align: right

        &__item--1
          +size(3)

        &__item--2
          +size(6)


  .ads__semantics
    padding-top: 120px
    padding-bottom: 80px
    background-color: #fafafa
    color: $dark-text
    text-align: justify

    .semantics
      +row-flex
      justify-content: space-around

      &__item--1
        +size(6)

      &__item--2
        +size(3)
        display: flex
        justify-content: flex-end



  .ads__rhythm
      position: relative
      padding-top: 240px
      padding-bottom: 110px
      background-position: center top
      background-image: url("/img/Design/landing__bg.svg")
      background-size: cover
      text-align: justify


      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 200px
        background-position: center top
        background-image: url("/img/Design/rhythm__top-wave.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""


      &::after
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 100px
        background-position: center bottom
        background-image: url("/img/images/wave--depressed.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

      .rhythm
        +row-flex
        justify-content: space-around

        h2
          text-align: right

        &__item--1
          +size(3)

        &__item--2
          +size(6)

  .ads__tools
      position: relative
      background-color: #fafafa
      background-position: center bottom
      background-image: url("/img/images/wave--gray.svg")
      background-size: 100% 350px
      background-repeat: no-repeat


</style>
