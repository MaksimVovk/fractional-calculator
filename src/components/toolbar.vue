<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import 'config';

  .toolbar {
    min-height: 25px;
    padding: 0 10px 10px 10px;

    display: flex;
    border-bottom: $toolbar-border;
    background-color: $primary-light-color;
  }
</style>