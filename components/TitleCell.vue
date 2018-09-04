<template>
  <div class="TitleCell">
    <div class="title-item">
      <div class="title" v-text="title"></div>
      <i class="title-icon el-icon-arrow-right" v-if="inLink"></i>
    </div>
    <div class="title-item right" v-if="buttonText">
      <el-button style="width: 240px;" type="primary" @click="handleOnpress()">{{buttonText}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleCell",
    props: {
      title: String,
      inLink: Boolean,
      buttonText: String
    },
    methods: {
      handleOnpress() {

      }
    }
  }
</script>

<style lang="less">
  .TitleCell {
    width: 100%;
    height: 44px;
    display: flex;
    display: -webkit-flex; /* Safari */
    .title-item {
      width: 50%;
      height: 44px;
      display: flex;
      display: -webkit-flex; /* Safari */
      align-items: center;
      &.right {
        justify-content: flex-end;
      }
      .title {
        font-size: 20px;
        color: #000A12;
      }
      .title-icon {
        margin-left: 30px;
      }
    }
  }
</style>
