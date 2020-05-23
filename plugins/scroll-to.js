import Vue from 'vue'
import scrollTo from 'vue-scrollto'

Vue.use(scrollTo)

// You can also pass in the default options
Vue.use(scrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


