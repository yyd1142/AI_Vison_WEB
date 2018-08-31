<template>
  <div class="MyFormCell">
    <div class="lable-name">{{lable}}</div>
    <div class="select-cell">
      <slot name="cell"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyFormCell",
    data() {
      return { }
    },
    props: {
      lable: String,
    },
    methods: { }
  }
</script>

<style lang="less">
  .MyFormCell {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    .lable-name {
      height: 40px;
      align-items: center;
      text-align: left;
      display: flex;
      display: -webkit-flex; /* Safari */
      margin-right: 15px;
    }
    .select-cell {
      height: 40px;
    }
  }
</style>
