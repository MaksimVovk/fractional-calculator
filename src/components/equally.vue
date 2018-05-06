<template>
  <div class="equally">
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

  .equally {
    min-width: 35px;

    display: flex;
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
      height: 25px;
      box-sizing: border-box;

      font-size: 13px;
      text-align: center;
      padding: 3px;
      margin: 5px;

      color: $primary-text-color;
      outline: none;
      border-radius: 5px;
      border: 1px solid $primary-border-color;
    }
  }
</style>