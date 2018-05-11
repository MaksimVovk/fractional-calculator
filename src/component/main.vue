<template>
  <article>
    <div class="board">
      <fraction v-model="firstNumber" />
      <select-list v-model="operation" :list="operationList" />
      <fraction v-model="secondNumber" />
      <button @click="getResult">=</button>
      <equally v-model="result" />
    </div>
    <empty v-if="isEmpty"/>
    <div v-else class="body">
      <toolbar>
        <button class="action-btn" @click="clear">Clear</button>
        <button class="action-btn" @click="clearTable">Clear table</button>
      </toolbar>
      <div class="table custom-scroll">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>The first fraction</th>
              <th>Procedure / Operation</th>
              <th>Second fraction</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <router-link v-for="(row, i) of rows" tag="tr" :to="`fraction-details/${row.id}`" :id="row.id" :key="i">
              <td>{{row.id}}</td>
              <td>
                <table-fraction :value="row.first"/>
              </td>
              <td>{{row.operation}}</td>
              <td>
                <table-fraction :value="row.second"/>
              </td>
              <td>
                <table-fraction :value="row.result"/>
              </td>
            </router-link>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { fraction } from 'mathjs'

  export default {
    data () {
      return {
        firstNumber: [],
        secondNumber: [],
        result: [],
        operation: '+',
        operationList: [
          { id: 1, name: '+' },
          { id: 2, name: '-' },
          { id: 3, name: 'x' },
          { id: 4, name: '/' },
        ],
      }
    },
    methods: {
      getResult () {
        const firstNum = [...this.firstNumber]
        const secondNum = [...this.secondNumber]
        const calculation = this.equally(this.firstNumber, this.secondNumber, this.operation)

        this.result = [fraction(calculation).n, fraction(calculation).d]
        this.$store.dispatch('setResult', {
          firstNumber: firstNum,
          secondNumber: secondNum,
          operation: this.operation,
          result: this.result
        })
      },
      clear () {
        this.firstNumber = []
        this.secondNumber = []
        this.result = []
        this.operation = '+'
      },
      clearTable () {
        this.$store.dispatch('clearStore')
      },
      equally (first, second, operation) {
        switch (operation) {
          case '+': return getNumber(first) + getNumber(second)
            break;
          case '-': return getNumber(first) - getNumber(second)
            break;
          case 'x': return getNumber(first) * getNumber(second)
            break;
          case '/': return getNumber(first) / getNumber(second)
            break;
        }

        function getNumber (number) {
          return fraction(number[0], number[1])
        }
      }
    },
    computed: {
      ...mapGetters({
        rows: 'getRows',
      }),
      isEmpty () {
        return !this.rows || !this.rows.length
      },
    }
  }
</script>

<style lang="scss">
  @import 'config';

  .board {
    padding: 10px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-color: $primary-light-color;
    box-shadow: $block-shadow;

    button {
      width: 25px;
      height: 25px;
      margin: 0 5px;
    }
  }

  .body {
    height: 100%;
    padding: 10px 0;

    border-radius: 5px;
    background: $primary-light-color;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;

    .table {
      overflow-y: auto;
    }
  }
</style>