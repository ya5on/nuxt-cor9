<template>
  <div class="web">
    <div class="container">
      <header class="header">
        <h1 class="header__title">TITLE H1</h1>
        <p
          class="header__description"
        >Профессиональная разработка современных, красивых и качественных веб-сайтов, создание мощных интернет-решений и
          продвижение в сети</p>
      </header>
      <main class="main">
        <div class="box">
          <div class="box__left">
            <div class="section-head sticky">
              <div>
                <h3>Кратко</h3>
                <span>Вопрос/Ответ:</span>
              </div>
              <i></i>
            </div>
          </div>
          <div class="box__right">
            <p class="main__content">
              <br/>Я веб-разработчик, создаю технологические и крутые веб-сайты.
            </p>
            <p
              class="main__content"
            >Работал как в соло, так и в командах - больших и маленьких. Общаюсь на английском, русском и украинских
              языках.</p>
          </div>
        </div>

        <div class="box">
          <div class="box__left">
            <div class="section-head sticky">
              <div>
                <h3>Стэк</h3>
                <span>Вопрос/Ответ:</span>
              </div>
              <i></i>
            </div>
          </div>
          <div class="box__right">
            <p class="main__content">Я использую такие технологии:</p>
            <ul class="main__list">
              <li>HTML, HTML5</li>
              <li>CSS, CSS3, SASS</li>
              <li>Javascript, jQuery</li>
              <li>Vue (+ Vuex, Router и тп)</li>
              <li>AJAX, JSON, REST</li>
              <li>SQL</li>
              <li>PHP, node.js</li>
              <li>Wordpress, Laravel</li>
              <li>GULP, Webpack</li>
              <li>Git</li>
              <li>Jira, Trello</li>
            </ul>
            <p class="main__content">Но вместе с командой мы можем также:</p>
            <ul class="main__list">
              <li>Создание дизайна</li>
              <li>Продвижение</li>
              <li>чтото там ещо</li>
            </ul>
          </div>
        </div>

        <div class="box">
          <div class="box__left">
            <div class="section-head sticky">
              <div>
                <h3>Почему я</h3>
                <span>Вопрос/Ответ:</span>
              </div>
              <i></i>
            </div>
          </div>
          <div class="box__right">
            <p class="main__content">И все же, почему я, а не кто-то другой?</p>
            <dl>
              <dt>Профессиональность</dt>
              <dd>Учитывая более 5 лет веб-разработки соло и в команде — я сделаю то, что Вам нужно!</dd>
              <dt>Интуитивность</dt>
              <dd>В результате разработки проекта Вы получаете интуитивно понятный интерфейс с красочным дизайном,
                учитывая Ваши пожелания.
              </dd>
              <dt>Коммуникативность</dt>
              <dd>В процессе разработки все действия прозрачны, каждый их шагов разработки обсуждается с заказчиком,
                чтобы создать идеальный продукт.
              </dd>
              <dt>Экономия</dt>
              <dd>Работая с веб-студиями или огромными компаниями Вы переплачиваете в несколько раз за аренду офиса,
                оплату зарплат десятков работников. Работая со мной — Вы экономите бюджет, получая качественный продукт.
              </dd>
            </dl>
          </div>
        </div>

        <div class="box">
          <div class="box__left">
            <div class="section-head sticky">
              <div>
                <h3>Контакты</h3>
                <span>Вопрос/Ответ:</span>
              </div>
              <i></i>
            </div>
          </div>
          <div class="box__right">
            <p class="main__content">
              Мы сможем связаться и найти общее решение Вашей задачи. Адекватная консультация бесплатна, составим все на
              высшем уровне!
              <br/>Стучитесь:
            </p>
            <ul class="main__list">
              <li>
                <a href="mailto:spaunfrom@gmail.com">Электропочта</a>
              </li>
              <li>
                <a href="https://t.me/AlexGuy" target="_blank">Telegram</a>
              </li>
              <li>
                <a href="#" target="_blank">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="box">
          <div class="box__left">
            <div class="section-head sticky">
              <div>
                <h3>Проекты</h3>
                <span>Вопрос/Ответ:</span>
              </div>
              <i></i>
            </div>
          </div>
          <div class="box__right">
            <p
              class="main__content"
            >Ниже Вы сможете оценить ленту из последних и супер-крутецких проектов, без проектов под NDA (Соглашение о
              неразглашении конфиденциальной информации): от лендингов и корпоративных сайтов до огромных платформ,
              приложений и интернет-магазинов</p>
          </div>
        </div>
      </main>
    </div>
    <client-only>
      <BackToTop bottom="50px" right="50px" visibleoffset="700">
        <img class="btn-to-top" src="~assets/img/topBtn.png" alt="">
      </BackToTop>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: "web"
  };
</script>

<style lang="sass" scoped>
  .box
    +row-flex
    margin-top: 50px
    min-height: 300px

    &__left
      +col
      +size(3)
    &__right
      +col
      +size(9)

    .sticky
      position: -webkit-sticky
      position: sticky
      top: 0

    //section head
    .section-head
      position: relative
      height: 140px
      text-align: left
      margin-bottom: 30px !important
      display: flex
      align-items: center
      +md(margin-left, 30px)

      span
        font-size: 16px
        text-transform: capitalize
        letter-spacing: 4px
        color: #4B367C
        margin-bottom: 20px

      h3
        font-family: Ubuntu, sans-serif
        text-transform: uppercase
        font-weight: 800
        font-size: 28px
        margin-bottom: 0
        color: #B0ABBF

      i
        position: absolute
        height: 140px
        width: 100px
        left: -20px
        top: 0
        border: 8px solid rgba(255, 255, 255, 0.05)
        border-right: 0

        &:after, &:before
          content: ''
          width: 8px
          height: 20px
          background: rgba(255, 255, 255, 0.05)
          position: absolute
          right: 0

        &:after
          bottom: 0

        &:before
          top: 0

</style>
