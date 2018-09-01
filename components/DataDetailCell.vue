<template>
  <div class="DataDetailCell">
    <div class="left-cell">
      <div class="title">{{title}}</div>
      <div class="label">{{label}}</div>
    </div>
    <div class="right-cell">
      <div class="value" v-html="value"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataDetailCell",
    props: {
      title: String,
      label: String,
      value: String
    }
  }
</script>

<style lang="less">
  .DataDetailCell {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    position: relative;
    height: 98px;
    .left-cell {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      height: 98px;
      padding: 0 138px 0 15px;
      flex-direction: column;
      justify-content: center;
      line-height: 28px;
      .title {
        font-size: 20px;
        color: #000A12;
      }
      .label {
        font-size: 14px;
        color: #c0c4cc;
      }
    }
    .right-cell {
      height: 98px;
      width: 138px;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      display: -webkit-flex; /* Safari */
      align-items: center;
      justify-content: flex-end;
      .value {
        font-size: 16px;
        color: #2d82be;
        padding-right: 15px;
      }
    }
  }
</style>
