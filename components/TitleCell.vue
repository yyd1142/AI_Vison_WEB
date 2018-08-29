<template>
  <div class="TitleCell">
    <div class="title" v-text="title"></div>
    <i class="title-icon el-icon-arrow-right" v-if="inLink"></i>
  </div>
</template>

<script>
  export default {
    name: "TitleCell",
    props: {
      title: String,
      inLink: Boolean
    }
  }
</script>

<style lang="less">
  .TitleCell {
    width: 100%;
    height: 44px;
    display: flex;
    display: -webkit-flex; /* Safari */
    align-items: center;
    .title {
      font-size: 20px;
      color: #000A12;
    }
    .title-icon {
      margin-left: 30px;
    }
  }
</style>
