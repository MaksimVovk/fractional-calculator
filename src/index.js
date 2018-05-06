import ClickOutside from 'vue-click-outside'

export default {
  install (Vue) {

    const components = require.context('./components', true, /\.vue$/)
    components.keys().forEach(k => Vue.component(getModuleName(k), components(k).default))

    const filters = require.context('./filters', true, /\.js$/)
    filters.keys().forEach(k => Vue.filter(getModuleName(k), filters(k).default))

    Vue.directive('click-outside', ClickOutside)
  },
}

function getModuleName (path) {
  return path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
}