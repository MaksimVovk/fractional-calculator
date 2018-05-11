export default {
  setResult ({ commit }, payload) {
    commit('addRow', payload)
  },

  clearStore ({ commit }) {
    commit('clear')
  }
}