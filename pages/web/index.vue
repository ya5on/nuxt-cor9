<template>
  <div class="web">
    <div class="web__landing wave--sinus">
      <Landing/>
      <div class="web__qualities">
        <Qualities/>
      </div>
    </div>
    <Chose/>
    <div class="web__portfolio">
      <Portfolio/>
    </div>
    <div class="web__technologies">
      <Technologies/>
    </div>
    <HireUs class="hire-us--dark"/>
  </div>
</template>

<script>
  import Landing from "../../components/Web/Landing";
  import Qualities from "../../components/Web/Qualities";
  import Chose from "../../components/Web/Chose";
  import Portfolio from "../../components/Web/Portfolio";
  import Technologies from "../../components/Web/Technologies";
  import HireUs from "../../components/HireUs/HireUs";

  export default {
    name: "web",
    components: {
      Landing, Qualities, Chose, Portfolio, Technologies, HireUs
    },
  };
</script>

<style lang="sass" scoped>
  .web

    &__landing
      padding-top: 170px
      position: relative
      background-position: center top
      background-image: linear-gradient(135deg, #47b784 0%, #009d90 26%, #00818e 50%, #25647b 74%, #36495d 100%)
      background-size: cover
      overflow: hidden

      &::before
        position: absolute
        top: 0
        left: 0
        width: 70%
        height: 100%
        background-position: left top
        background-image: url("/img/images/qualities__oval.svg")
        background-size: contain
        background-repeat: no-repeat
        content: ""


    &__qualities
      position: relative
      margin-top: 32px
      background-position: center top
      background-size: 100% 100%

      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 450px
        background-position: center top
        background-image: url("/img/images/wave--qualities.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

      &::after
        position: absolute
        top: 450px
        left: 0
        width: 100%
        height: 100%
        background-color: rgba(#000, 0.16)
        content: ""

    &__portfolio
      position: relative
      background-position: center bottom
      background-image: url("/img/images/Vue/inventi__bg.svg")
      background-size: cover

      &::before
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 220px
        background-position: center top
        background-image: url("/img/images/Vue/inventi__wave.svg")
        background-size: 100%
        background-repeat: no-repeat
        content: ""


      &::after
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 80px
        background-position: center bottom
        background-image: url("/img/images/wave--depressed.svg")
        background-size: 100% 100%
        background-repeat: no-repeat
        content: ""

    &__technologies
      position: relative
      background-color: #FAFAFA
      background-position: center bottom
      background-image: url("/img/images/wave--gray.svg")
      background-size: 100% 400px
      background-repeat: no-repeat

    .hire-us--dark
      position: relative
      background-position: top
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMTgxIiB2aWV3Qm94PSIwIDAgMTQ0MCAxMTgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGgxNDQwdjExODFIMHoiLz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iOTUuMDQ5JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNCNzNEQzciIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjQTc0MEM0IiBvZmZzZXQ9IjguNDYyJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM3MTRCQkIiIG9mZnNldD0iMzguMzEzJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM1MzU4Q0YiIG9mZnNldD0iNjYuNDUlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNGNjRENCIgb2Zmc2V0PSI4NC41NTglIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzJCNjlERCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwLjY0JSIgeTE9IjEwMCUiIHgyPSI5NS44ODIlIiB5Mj0iMjUuMDk2JSIgaWQ9ImQiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBpZD0iZSIgY3g9IjU3OS41IiBjeT0iNTc5LjUiIHI9IjU3OS41Ii8+PGxpbmVhckdyYWRpZW50IHgxPSI0NS40NjYlIiB5MT0iMTAzLjg2OSUiIHgyPSIxMTAuMzExJSIgeTI9IjI3LjY2OCUiIGlkPSJmIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxlbGxpcHNlIGlkPSJnIiBjeD0iNDEyIiBjeT0iNDcwLjUiIHJ4PSI0MTIiIHJ5PSIzMTAuNSIvPjxsaW5lYXJHcmFkaWVudCB4MT0iOTYuNzE5JSIgeTE9IjU2LjgzOSUiIHgyPSIyOS43NTMlIiB5Mj0iOTMuNTk4JSIgaWQ9ImgiPjxzdG9wIHN0b3AtY29sb3I9IiNGODE4OEUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjgxODhFIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMTAwJSIvPjxzdG9wIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48ZWxsaXBzZSBpZD0iaSIgY3g9IjE1ODIuNSIgY3k9IjMyLjUiIHJ4PSI1NzkuNSIgcnk9IjQyNi41Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PGcgbWFzaz0idXJsKCNiKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQzOCAtMjQzKSI+PHBhdGggZmlsbD0idXJsKCNjKSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjMxNiAwKSIgZD0iTTQzOCAyNDNoMTQ0MHYxMTgxSDQzOHoiLz48dXNlIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii4wOCIgeGxpbms6aHJlZj0iI2UiLz48dXNlIGZpbGw9InVybCgjZikiIG9wYWNpdHk9Ii4wNSIgeGxpbms6aHJlZj0iI2ciLz48dXNlIGZpbGw9InVybCgjaCkiIG9wYWNpdHk9Ii4xMiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmxpZ2h0ZW4iIHhsaW5rOmhyZWY9IiNpIi8+PC9nPjwvZz48L2c+PC9zdmc+)
      background-size: 150%
      background-repeat: no-repeat
      padding: 75px 0
      color: $light-text


</style>
