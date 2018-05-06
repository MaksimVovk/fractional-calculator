<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .toolbar {
    min-height: 25px;
    padding: 0 10px 10px 10px;

    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
</style>