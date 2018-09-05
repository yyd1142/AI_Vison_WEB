<template>
  <div class="page-wrap main-wrap">
    <el-row>
      <el-col :span="4">
        <MenuBar :language="language || `cn`" :default-active="defaultActive" :default-openeds="defaultOpeneds"></MenuBar>
      </el-col>
      <el-col :span="20">
        <div class="content-wrap">
          <MyHeader :language="language || `cn`" :default-active="defaultActive"></MyHeader>
          <div class="content">
            <slot name="page"></slot>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
  @import url("../static/style/config.less");

  .page-wrap {
    .content-wrap {
      .content {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex: 1;
      }
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
