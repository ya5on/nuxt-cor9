<template>
  <section class="hire-us">
    <div class="container">
      <div class="hire-us__items">
        <div class="hire-us__item">
          <h2 class="hire-us__title">Want to work with us?</h2>
        </div>
        <div class="hire-us__item right">
          <nuxt-link class="hire-us__btn btn" to="/order">Order project</nuxt-link>
          <button class="btn-contact btn" type="button" @click="openContactModal()">contact us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HireUs"
  }
</script>

<style lang="sass">
  .hire-us
    padding: 130px 0
    background-color: #FAFAFA

    &__items
      +row-flex
      justify-content: center
      align-items: center

    &__item
      +col
      +size(6)

    .right
      display: flex
      justify-content: flex-end

    .btn
      display: inline-block

      &:hover
        transform: translateY(-4px)
        opacity: .8

    &__title
      color: rgba(54,53,55,.8)
      font-weight: bold

    &__btn
      width: 100%
      max-width: 190px
      margin: 8px
      border: 1px solid transparent
      background-image: linear-gradient(-226deg, #b73dc7 0%, #a740c4 8%, #714bbb 38%, #5358cf 66%, #3f64d4 84%, #2b69dd 100%)
      color: #fff

    .btn-contact
      border: 1px solid #000
      color: #000

  .hire-us--dark
      position: relative
      background-position: top
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMTgxIiB2aWV3Qm94PSIwIDAgMTQ0MCAxMTgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGgxNDQwdjExODFIMHoiLz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iOTUuMDQ5JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNCNzNEQzciIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjQTc0MEM0IiBvZmZzZXQ9IjguNDYyJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM3MTRCQkIiIG9mZnNldD0iMzguMzEzJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM1MzU4Q0YiIG9mZnNldD0iNjYuNDUlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNGNjRENCIgb2Zmc2V0PSI4NC41NTglIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzJCNjlERCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwLjY0JSIgeTE9IjEwMCUiIHgyPSI5NS44ODIlIiB5Mj0iMjUuMDk2JSIgaWQ9ImQiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBpZD0iZSIgY3g9IjU3OS41IiBjeT0iNTc5LjUiIHI9IjU3OS41Ii8+PGxpbmVhckdyYWRpZW50IHgxPSI0NS40NjYlIiB5MT0iMTAzLjg2OSUiIHgyPSIxMTAuMzExJSIgeTI9IjI3LjY2OCUiIGlkPSJmIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxlbGxpcHNlIGlkPSJnIiBjeD0iNDEyIiBjeT0iNDcwLjUiIHJ4PSI0MTIiIHJ5PSIzMTAuNSIvPjxsaW5lYXJHcmFkaWVudCB4MT0iOTYuNzE5JSIgeTE9IjU2LjgzOSUiIHgyPSIyOS43NTMlIiB5Mj0iOTMuNTk4JSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiNGODE4OEUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjgxODhFIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48ZWxsaXBzZSBpZD0iaSIgY3g9IjE1ODIuNSIgY3k9IjMyLjUiIHJ4PSI1NzkuNSIgcnk9IjQyNi41Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PGcgbWFzaz0idXJsKCNiKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzOCAtMjQzKSI+PHBhdGggZmlsbD0idXJsKCNjKSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjMxNiAwKSIgZD0iTTQzOCAyNDNoMTQ0MHYxMTgxSDQzOHoiLz48dXNlIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii4wOCIgeGxpbms6aHJlZj0iI2UiLz48dXNlIGZpbGw9InVybCgjZikiIG9wYWNpdHk9Ii4wNSIgeGxpbms6aHJlZj0iI2ciLz48dXNlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmxpZ2h0ZW4iIHhsaW5rOmhyZWY9IiNpIi8+PC9nPjwvZz48L2c+PC9zdmc+)
      background-size: 150%
      background-repeat: no-repeat
      padding: 75px 0
      color: $light-text

      .hire-us__title
        color: #fff

      .hire-us__btn
        background-color: #fff
        box-shadow: 0 2px 12px 0 hsla(0,0%,100%,.3)
        background-image: none
        border-color: #fff
        color: #684bc6

        &:hover
          box-shadow: 0 12px 15px 0 rgba(#fff, 0.2)

      .btn-contact
        border: 1px solid #fff
        color: #fff


</style>
