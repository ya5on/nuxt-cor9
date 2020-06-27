<template>
  <div class="card-input">
    <input class="card-input__input"
           v-if="type === 'radio'"
           type="radio" :value="innerValue"
           :id="id" @change="update" v-bind="$attrs"/>
    <input class="card-input__input"
           v-if="type === 'checkbox'"
           type="checkbox" v-model="innerValue"
           :checked="innerValue"
           :id="id" @change="update"
           v-bind="$attrs"/>
    <label class="card-input__label o-card mb-24 medium-mb-0"
           :for="id">
    <div class="row">
        <h3 class="card-input__heading-3">
          <slot></slot>
        </h3>
    </div>
  </label></div>
</template>

<script>
  export default {
    props: {
      type: String,
      value: [Boolean, String, Number, Object, Array],
      icon: String,
    },
    data() {
      return {
        innerValue: this.value,
      }
    },
    computed: {
      id() {
        return `input-${this._uid}`
      },
    },
    methods: {
      update() {
        this.$emit('input', this.$attrs.value || this.innerValue)
      },
    },
    watch: {
      value(value) {
        this.innerValue = value
      },
    },
  }
</script>

<style lang="sass" scoped>
  $gradient: #8f2edd 0%, #b03ad1 25%, #c841c0 50%, #da4daa 75%, #eb4b9f 100%

  .card-input__input
    display: none

  .card-input__input:checked + .card-input__label
    background-image: linear-gradient(-135deg, $gradient)

    .card-input__icon,
    .card-input__heading-3
      color: #fff

  .card-input__label
    display: block
    transition-duration: .5s
    transition-property: transform
    padding: 48px 36px
    border-radius: 8px
    background-color: #fff
    box-shadow: 0 12px 25px 0 rgba($main-color, 0.2)
    cursor: pointer
    border: 1px solid rgba($main-color, 0.2)

    &:hover
      transform: translateY(-3px)

  .card-input__heading-3
    margin-top: 0
    margin-bottom: 0
    text-align: center

</style>

