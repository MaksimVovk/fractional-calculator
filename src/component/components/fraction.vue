<template>
  <div class="fraction">
    <input type="text" v-model="value[0]" :style="{'width': value[0] > 0 ? `${value[0].length * 11}px` : '25px' }">
    <i class="split"></i>
    <input type="text" v-model="value[1]" :style="{'width': value[1] > 0 ? `${value[1].length * 11}px` : '25px' }">
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

  .fraction {
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

    input {
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

      &:hover, &:focus {
        box-shadow: $input-shadow;
      }

    }
  }
</style>