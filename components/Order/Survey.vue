<template>
  <section class="survey">
    <form class="row align-center">
      <fieldset class="column small-12 large-9 mb-64 medium-mb-80">
        <header class="survey__header mb-16">
          <h2 class="o-heading-1 c-ship-gray-80 pr-8">h2</h2><span class="o-heading-1 c-ship-gray-20">1/4</span>
        </header>
        <OrderProgress class="mb-32" :step="1"></OrderProgress>
        <div class="row">
          <div class="column small-12 medium-4">
            <CardInput type="radio" icon="icon--play" v-model="questionStart" name="questionStart" value="answerNew">
              answer
            </CardInput>
          </div>
          <div class="column small-12 medium-4">
            <CardInput type="radio" icon="icon--fast-forward" v-model="questionStart" name="questionStart"
                       value="answerContinue">answer
            </CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="column small-12 large-9 mb-64 medium-mb-80">
        <header class="survey__header mb-16">
          <h2 class="o-heading-1 c-ship-gray-80 pr-8">answer</h2><span class="o-heading-1 c-ship-gray-20">2/4</span>
        </header>
        <OrderProgress class="mb-32" :step="2"></OrderProgress>
        <div class="row">
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--monitor" v-model="questionScope.answerFrontEnd">answer</CardInput>
          </div>
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--server" v-model="questionScope.answerBackEnd">answer</CardInput>
          </div>
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--grid" v-model="questionScope.answerDesign">answer</CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="column small-12 large-9 mb-64 medium-mb-80">
        <header class="survey__header mb-16">
          <h2 class="o-heading-1 c-ship-gray-80 pr-8">h2</h2><span class="o-heading-1 c-ship-gray-20">3/4</span>
        </header>
        <OrderProgress class="mb-32" :step="3"></OrderProgress>
        <div class="row">
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--monitor" v-model="questionPlatform.answerDesktop">answer</CardInput>
          </div>
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--smartphone" v-model="questionPlatform.answerMobile">answer
            </CardInput>
          </div>
          <div class="column small-12 medium-4">
            <CardInput type="checkbox" icon="icon--file" v-model="questionPlatform.answerOther">answer</CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="column small-12 large-9">
        <header class="survey__header mb-16">
          <h2 class="o-heading-1 c-ship-gray-80 pr-8">h2</h2><span class="o-heading-1 c-ship-gray-20">4/4</span>
        </header>
        <OrderProgress class="mb-32" :step="4"></OrderProgress>
<!--        <div class="row">-->
<!--          <div class="column small-12 medium-4">-->
<!--            <input class="o-input" type="text" v-model="name"-->
<!--                                                       :class="{ 'o-input&#45;&#45;error': !isNameValid }"/><small-->
<!--            class="o-form-error"><span v-show="!isEmailValid">error</span></small></div>-->
<!--          <div-->
<!--            class="column small-12 medium-4"><input class="o-input" type="text" v-model="email"-->

<!--                                                    :class="{ 'o-input&#45;&#45;error': !isEmailValid }"/><small-->
<!--            class="o-form-error"><span v-show="!isEmailValid">error</span></small></div>-->
<!--          <div-->
<!--            class="column small-12 medium-4 mb-16">-->
<!--            <input class="o-input" type="text" v-model="phone"-->
<!--                                                          />-->
<!--          </div>-->
<!--          <div class="column small-12 mt-4">-->
<!--            <textarea class="o-textarea" v-model="message"-->

<!--                                                      :class="{ 'o-input&#45;&#45;error': !isMessageValid }"></textarea><small-->
<!--            class="o-form-error"><span v-show="!isMessageValid">error</span></small></div>-->
<!--          <div-->
<!--            class="column small-12 mt-24 large-mt-48 mb-24 text-center">-->
<!--            <button class="survey__btn o-btn" type="button" :disabled="!isFormValid || isSending" @click="submit()">-->
<!--              <span class="fs-16 c-white" v-if="!isSending">error</span>-->
<!--              <img class="survey__icon c-white a-spin"-->
<!--                                                                             v-else="" type="icon&#45;&#45;spinner">-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
      </fieldset>
    </form>
  </section>
</template>

<script>
  import {required, email} from 'vuelidate/lib/validators'
  import OrderProgress from '../../components/OrderProgress/OrderProgress'
  import CardInput from '../../components/CardInput/CardInput'
  import {openSuccessModal} from '../../services/events'
  import sendMail from '../../services/mailer'

  export default {
    components: {
      CardInput,
      OrderProgress,
    },
    data() {
      return {
        questionStart: '',
        questionScope: {
          answerFrontEnd: false,
          answerBackEnd: false,
          answerDesign: false,
        },
        questionPlatform: {
          answerDesktop: false,
          answerMobile: false,
          answerOther: false,
        },
        name: '',
        email: '',
        phone: '',
        message: '',
        // ui
        isSending: false,
      }
    },
    computed: {
      isNameValid() { return !this.$v.name.$error },
      isEmailValid() { return !this.$v.email.$error },
      isMessageValid() { return !this.$v.message.$error },
      isFormValid() { return this.isNameValid && this.isEmailValid && this.isMessageValid },
      estimationScope() { return this.$root.$children[0].estimationScope },
    },
    methods: {
      openSuccessModal,
      async submit() {
        try {
          if (this.$v.surveyForm.$touch() || this.$v.surveyForm.$error) return null
          const {questionStart, name, email, phone, message} = this
          const {answerFrontEnd, answerBackEnd, answerDesign} = this.questionScope
          const {answerDesktop, answerMobile, answerOther} = this.questionPlatform
          const survey = {
            questionStart,
            // TODO: Temporary solution
            questionScope: `${answerFrontEnd}, ${answerBackEnd}, ${answerDesign}`,
            questionPlatform: `${answerDesktop}, ${answerMobile}, ${answerOther}`,
          }
          this.isSending = true
          await sendMail({
            template_id: 'estimate-from-client',
            email: 'hello@inventi.studio',
            // just 'email' does not work in substitution_data, as it gets email field from above
            substitution_data: {name, email_address: email, phone, message, survey},
          })
          await sendMail({
            template_id: `estimate-to-client-${this.locale}`,
            email,
            name,
            substitution_data: {name, email, message, survey},
          })
          this.openSuccessModal()
          this.isSending = false
        } catch (err) {
          this.isSending = false
          console.warn({err})
        }
      },
    },
    validations: {
      name: {required},
      email: {required, email},
      message: {required},
      surveyForm: [
        'name',
        'email',
        'message',
      ],
    },
    watch: {
      estimationScope(estimationScope) {
        if (estimationScope === 'front-end') this.questionScope.answerFrontEnd = true
        if (estimationScope === 'back-end') this.questionScope.answerBackEnd = true
        if (estimationScope === 'design') this.questionScope.answerDesign = true
      },
    },
  }
</script>

<style lang="sass" scoped>
  $gradient: #8f2edd 0%, #b03ad1 25%, #c841c0 50%, #da4daa 75%, #eb4b9f 100%

  .survey
    padding-top: 40px
    padding-bottom: 64px
    background-color: $dark-text
    background-position: center bottom
    background-image: url("/img/images/wave--gray.svg")
    background-size: 300% 500px
    background-repeat: no-repeat

  .survey__header
    display: flex
    justify-content: space-between

  .survey__btn
    width: 100%
    max-width: 320px
    background-image: linear-gradient(-45deg, $gradient)

    &:hover

  svg.survey__icon
    width: 24px
    height: 24px

</style>
