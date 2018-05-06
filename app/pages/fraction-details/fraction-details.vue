<template>
  <article>
    <div class="body fraction-details">
      <toolbar>
        <router-link to="/main" tag="button" class="action-btn">Return</router-link>
      </toolbar>
      <div class="view">
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
              <tr v-for="row of rowList">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      id: {
        type: [Number, String],
        required: true
      },
    },
    mounted () {
      if (this.isEmptyState) {
        this.$router.push('/main')
      }
    },
    computed: {
      ...mapGetters({
        rows: 'getRows',
      }),
      rowList () {
        return this.rows.filter(row => row.id == this.id)
      },
      isEmptyState () {
        return !this.rows.length
      }
    },
  }
</script>

<style lang="scss">
  @import 'config';

  .fraction-details {
    &.body {
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
  }
</style>
