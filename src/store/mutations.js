export default {
  addRow (state, payload) {
    state.rows.push({
      id: state.rows.length + 1,
      first: payload.firstNumber,
      second: payload.secondNumber,
      operation: payload.operation,
      result: payload.result
    })
  },

  clear (state) {
    state.rows = []
  }
}