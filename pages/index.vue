<template>
  <div>
    <div v-if="loginPage">
      <slot name="page"></slot>
    </div>
    <div class="page-wrap main-wrap" v-else>
      <div class="menu-wrap_">
        <MenuBar
          :language="language || `en`"
          :default-active="defaultActive"
          :default-openeds="defaultOpeneds"
        ></MenuBar>
      </div>
      <div class="header-wrap_">
        <MyHeader :language="language || `en`" :default-active="defaultActive"></MyHeader>
      </div>
      <div class="content-wrap">
        <slot name="page"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" src="@style/index.less"></style>

<script>
import { MenuBar, MyHeader } from "@components";

export default {
  components: {
    MenuBar,
    MyHeader
  },
  props: {
    language: String,
    defaultActive: String,
    defaultOpeneds: Array,
    loginPage: Boolean,
  },
  async asyncData(ctx) {
    ctx.redirect("/login");
    return {};
  }
};
</script>
