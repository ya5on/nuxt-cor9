<template>
  <section class="survey">
    <form class="container">
      <fieldset class="survey__field">
        <header class="survey__header">
          <h2 class="">Where do we start?</h2>
          <span class="">1/4</span>
        </header>
        <OrderProgress :step="1"></OrderProgress>
        <div class="survey__items">
          <div class="survey__item">
            <CardInput type="radio"  v-model="questionStart" name="questionStart" value="answerNew">
              <img class="icon" src="/img/icons/icon--play.svg" alt="">
              Start a new project
            </CardInput>
          </div>
          <div class="survey__item">
            <CardInput type="radio" v-model="questionStart" name="questionStart"
                       value="answerContinue">
              <img class="icon" src="/img/icons/icon--fast-forward.svg" alt="">
              Continue a project
            </CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="survey__field">
        <header class="survey__header">
          <h2 class="">
            What is the scope of your project?
          </h2>
          <span class="">2/4</span>
        </header>
        <OrderProgress :step="2"></OrderProgress>
        <div class="survey__items">
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionScope.answerFrontEnd">
              <img class="icon" src="/img/icons/icon--monitor.svg" alt="">Front‑end</CardInput>
          </div>
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionScope.answerBackEnd">
              <img class="icon" src="/img/icons/icon--server.svg" alt="">Back‑end</CardInput>
          </div>
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionScope.answerDesign">
              <img class="icon" src="/img/icons/icon--grid.svg" alt="">Google Ads</CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="survey__field">
        <header class="survey__header">
          <h2 class="">What is the platform of your project?</h2>
          <span class="">3/4</span>
        </header>
        <OrderProgress :step="3"></OrderProgress>
        <div class="survey__items">
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionPlatform.answerDesktop">
              <img class="icon" src="/img/icons/icon--monitor.svg" alt="">Desktop</CardInput>
          </div>
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionPlatform.answerMobile">
              <img class="icon" src="/img/icons/icon--smartphone.svg" alt="">Mobile
            </CardInput>
          </div>
          <div class="survey__item">
            <CardInput type="checkbox" v-model="questionPlatform.answerOther">
              <img class="icon" src="/img/icons/icon--file.svg" alt="">Other</CardInput>
          </div>
        </div>
      </fieldset>
      <fieldset class="survey__field">
        <header class="survey__header">
          <h2 class="">Any more details about the project?</h2>
          <span class="">4/4</span>
        </header>
        <OrderProgress :step="4"></OrderProgress>
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
    background-color: #FAFAFA
    background-position: center bottom
    background-image: url("/img/images/wave--gray.svg")
    background-size: 300% 500px
    background-repeat: no-repeat

    &__field
      margin-bottom: 80px

      h2, span
        color: $dark-text
        line-height: 56px
        font-size: 36px

    &__header
      display: flex
      justify-content: space-between

    &__items
      +row-flex
      justify-content: flex-start

    &__item
      +col
      +size(4)
      +size-md(12)
      margin-bottom: 20px

    &__btn
      width: 100%
      max-width: 320px
      background-image: linear-gradient(-45deg, $gradient)

      &:hover

  .icon
    width: 100%
    height: 48px

</style>
