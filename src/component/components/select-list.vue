<template>
  <div :class="{'select-list': true, active: opened }" @click="opened = !opened" v-click-outside="close">
    <div class="chochosen">
      <span>{{value}}</span>
    </div>
    <ul class="list" v-if="opened">
      <li v-for="item of availableFields" @click="$emit('input', item.name)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true,
      },
      list: {
        type: Array,
        required: true,
      }
    },
    data () {
      return {
        opened: false
      }
    },
    computed: {
      availableFields () {
        return this.list.filter(it => !this.value.includes(it.name))
      },
    },
    methods: {
      close () {
        this.opened = false
      }
    }
  }
</script>

<style lang="scss">
  @import 'config';

  .select-list {
    .chochosen {
      width: 25px;
      height: 25px;
      box-sizing: border-box;

      font-size: 14px;
      line-height: 16px;
      text-align: center;
      padding: 3px;
      margin: 5px;

      color: $primary-text-color;
      border-radius: 5px;
      border: 1px solid $primary-border-color;
      cursor: pointer;

      &:hover, {
        box-shadow: $input-shadow;
      }
    }

    .list {
      margin: -6px 5px 0 5px;
      position: absolute;

      background-color: $primary-light-color;
      box-shadow: $dropdown-shadow;
      border-radius: 5px;
      transition: .3s;
      overflow: hidden;

      li {
        height: 24px;
        width: 25px;
        padding: 3px;

        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        font-size: 14px;
        line-height: 16px;
        cursor: pointer;

        &:hover {
          background-color: $primary-opacity-color;
          transition: .3s;
        }
      }
    }

    &.active {
      .chochosen {
        border: 1px solid transparent;
        box-shadow: $select-shadow;

        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      .list {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
      }
    }
  }
</style>