import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router/router.js'
import ui from './component/components'
import store from './store/index.js'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ui)

Vue.component('App', App)

new Vue({
  el: '#root',
  router,
  store,
  render: h => h('App'),
})

