<template>
  <div class="empty-block">
    <p class="empty-text">Empty</p>
  </div>
</template>

<style lang="scss">
  @import 'config';

  .empty-block {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background-color: $primary-light-color;
    box-shadow: $block-shadow;

    .empty-text {
      font-size: 20px;
      color: $primary-text-color;
    }
  }
</style>