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
    <div class="row align-middle">
      <div class="column small-4 medium-12 medium-mb-24">
        <img class="card-input__icon" :type="icon">
      </div>
      <div class="column small-8 medium-12 text-left medium-text-center">
        <h3 class="card-input__heading-3 o-heading-3">
          <slot></slot>
        </h3>
      </div>
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
    transition-duration: 1s
    transition-property: transform

    cursor: pointer

    &:hover


  .card-input__icon
    width: 100%
    height: 48px

  .card-input__heading-3
    margin-top: 0
    margin-bottom: 0

</style>

