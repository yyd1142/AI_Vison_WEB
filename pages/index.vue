<template>
  <div class="page-wrap main-wrap">
    <div class="menu-wrap_">
      <MenuBar :language="language || `en`" :default-active="defaultActive" :default-openeds="defaultOpeneds"></MenuBar>
    </div>
    <div class="header-wrap_">
      <MyHeader :language="language || `en`" :default-active="defaultActive"></MyHeader>
    </div>
    <div class="content-wrap">
      <slot name="page"></slot>
    </div>
  </div>
</template>

<style lang="less">
  @import url("../static/style/config.less");

  .page-wrap {
    width: 100%;
    position: relative;
    .menu-wrap_ {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 330px;
      z-index: 20;
    }
    .header-wrap_ {
      position: fixed;
      width: 100%;
      height: 80px;
      left: 0;
      top: 0;
      margin: auto;
      padding-left: 330px;
      box-sizing: border-box;
      display: flex;
      display: -webkit-flex; /* Safari */
      z-index: 20;
    }
    .content-wrap {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      flex: 1;
      padding: 80px 0 0 330px;
      box-sizing: border-box;
      min-height: 100vh;
    }
  }
</style>

<script>
  import {MenuBar, MyHeader} from "../components/index.js";

  export default {
    components: {
      MenuBar,
      MyHeader
    },
    props: {
      language: String,
      defaultActive: String,
      defaultOpeneds: Array
    },
    async asyncData(ctx) {
      ctx.redirect("/overview");
      return {};
    },
  };
</script>
