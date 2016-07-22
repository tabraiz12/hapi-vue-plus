/* eslint-disable no-new */

import Vue from 'vue'
import App from './App.vue'

Vue.use(require('vue-resource')) // Web requests, Vue plugin

new Vue({
  el: 'body',
  components: {
    App
  }
})
