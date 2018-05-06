import VueRouter from 'vue-router'
import main from './pages/main/main.vue'
import fractionDetails from './pages/fraction-details/fraction-details.vue'


const routes = [
  { path: '/main', component: main },
  { path: '/fraction-details/:id', component: fractionDetails, props: true },
  { path: '*', redirect: '/main' },
]

export default new VueRouter({ mode: 'history', routes })