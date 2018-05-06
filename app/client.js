import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import ui from '../src'
import store from './store'
import layout from './layout.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ui)

Vue.component('layout', layout)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h('layout'),
})

