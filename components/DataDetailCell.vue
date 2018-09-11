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
    min-height: 98px;
    justify-content: space-between;
    .left-cell {
      display: flex;
      display: -webkit-flex; /* Safari */
      min-height: 98px;
      padding: 0 0 0 15px;
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
      min-height: 98px;
      display: flex;
      display: -webkit-flex; /* Safari */
      align-items: center;
      justify-content: flex-end;
      padding: 15px 0;
      .value {
        font-size: 16px;
        color: #2d82be;
        padding-right: 15px;
        line-height: 24px;
      }
    }
  }
</style>
