<template>
  <transition name="modal">
    <div class="modal__mask small-12 columns" @mousedown.stop="closeModal()" @touchstart.stop="closeModal()">
      <div class="row expanded align-center">
        <div class="modal__container small-12 medium-8 large-6 columns max-w-560" @mousedown.stop=""
             @touchstart.stop="">
          <img class="modal__icon" type="icon--x" :is-pointer="true" @click="closeModal()">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {closeModal} from '../../services/events'

  export default {
    methods: {
      closeModal,
      closeModalOnEscKey(e) {
        if (this.isModalOpen && e.keyCode === 27) this.closeModal()
      },
    },
    mounted() {
      window.addEventListener('keydown', this.closeModalOnEscKey)
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.closeModalOnEscKey)
    },
  }
</script>

<style lang="sass" scoped>
  .modal__mask
    position: fixed
    top: 0
    left: 0
    z-index: 950
    width: 100%
    height: 100%
    background-color: rgba(#000, 0.6)
    transition: opacity 1s
    cursor: pointer
    overflow-y: scroll

  .modal__container
    position: relative
    margin-top: 64px
    margin-bottom: 64px
    padding: 0
    border-radius: 8px
    background-color: #fff
    transition: transform 1s
    box-shadow: 0 3px 12px 0 rgba(#000, 0.1)
    cursor: default

  svg.modal__icon
    position: absolute
    top: 16px
    right: 16px
    color: #000
    transition: transform 1s

    &:hover
      transform: scale(1.2)

  .modal-enter,
  .modal-leave-active
    opacity: 0

    .modal__container
      transform: scale(1.1)
</style>
