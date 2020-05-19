<template>
  <footer class="footer">
    <div class="container-min">
      <div class="footer__content">
        <div class="footer__navigation">
          <ul>
            <li>
              <nuxt-link to="/">
                <span>Главная</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/web">
                <span>Веб разработка</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/ppc">
                <span>Контекстная реклама</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contacts">
                <span>Контакты</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog">
                <span>Блог</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__contacts">
          <a href="tel:+380995452740">+38-099-545-27-40</a>
          <a href="tel:+380633837133">+38-063-383-71-33</a>
        </div>
        <div class="footer__social">
          <a target="_blank" href="https://t.me/alex_guy" title="telegram">
            <img src="~assets/img/footer/telegram.svg" alt="">
          </a>
          <a class="viber-desktop" target="_blank" href="viber://chat?number=+380995452740" title="viber">
            <img src="~assets/img/footer/viber.svg" alt="">
          </a>
          <a class="viber-mobile" target="_blank" href="viber://add?number=+380995452740" title="viber">
            <img src="~assets/img/footer/viber.svg" alt="">
          </a>
          <a href="skype:ya5on_?chat" title="skype">
            <img src="~assets/img/footer/skype.svg" alt="">
          </a>
          <a href="mailto:info@cor9.pro" title="email">
            <img src="~assets/img/footer/email.svg" alt="">
          </a>
        </div>
        <div class="footer__copyright">
          <div class="logo-img-box">
            <nuxt-link to="/" class="logo">
              <img src="~assets/img/test-logo.png" alt="">
            </nuxt-link>
          </div>
          <p>©{{ new Date().getFullYear() }} Создание, продвижение и поддержка сайтов.</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="sass" scoped>
  .footer
    font-family: Ubuntu, sans-serif
    background: #07070B
    padding: 4% 0

    &__title
      color: #FF5D5D
      font-size: 18px
      text-transform: uppercase
      margin-top: 20px
      margin-bottom: 20px
      +md(margin-top, 20px)
      +md(text-align, center)

    &__content
      +row-flex
      justify-content: center
      +md(flex-direction, column)
      +md(align-items, center)

    &__navigation
      +col
      +size(3)
      +size-md(12)
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      ul
        display: flex
        flex-direction: column
        justify-content: center
        +md(align-items, center)
      li
        color: #fff
        font-size: 14px
        line-height: 26px
        margin-right: 35px
        +md(margin-right, 0)
        +md(line-height, 36px)
        a
          color: #fff
          transition: color .5s ease
          span
            text-transform: uppercase
          &:hover
            color: #FF5D5D

    &__submenu
      display: flex
      flex-direction: column
      margin-left: 15px
      +md(margin-left, 0)
      li
        list-style: square outside

    &__contacts
      +col
      +size(3)
      +size-md(12)
      display: flex
      align-items: center
      flex-direction: column
      +md(margin-top, 15px)

      a
        padding: 0 20px 20px
        color: #fff
        transition: color .5s ease
        &:hover
          color: #FF5D5D

    &__social
      +col
      +size(3)
      +size-md(12)
      display: flex
      justify-content: center
      a
        display: block
        color: #fff
        width: 35px
        height: 35px
        margin-right: 15px
        transform: scale(1)
        &:hover
          transform: scale(1.1)


      .viber-desktop
        +sm(display, none)

      .viber-mobile
        display: none
        +sm(display, block)

    &__copyright
      +col
      +size(3)
      display: flex
      flex-direction: column
      justify-content: space-between
      +size-md(12)
      text-align: center
      +md(margin-top, 15px)


</style>
