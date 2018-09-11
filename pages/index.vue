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

<style lang="less" src="@style/index.less"></style>

<script>
  import {MenuBar, MyHeader} from "@components";

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
