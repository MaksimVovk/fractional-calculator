<template>
  <div class="table-fraction">
    <div>{{value[0]}}</div>
    <i class="split"></i>
    <div>{{value[1]}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style lang="scss">
  @import 'config';

  .table-fraction {

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .split {
      height: 2px;
      width: 100%;

      background-color: $primary-border-color;
    }

    div {
      min-width: 25px;
      box-sizing: border-box;

      text-align: center;
      margin: 5px;

      color: $primary-text-color;
    }
  }
</style>