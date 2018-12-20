<template>
  <div class="LoginHeader">
    <!--<img src="/logo.png" class="logo"/>-->
    <!--<div class="name">{{languageDatas.name[language]}}</div>-->
    <div class="dropdown-link">
      <el-dropdown @command="chooseLang">
      <span class="el-dropdown-link">
        {{items[language]}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="cn">简体中文</el-dropdown-item>
          <el-dropdown-item command="hk">繁体中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginHeader",
    props: {
      languageDatas: Object,
      language: String,
    },
    data() {
      return {
        items: {
          en: "English",
          cn: "简体中文",
          hk: "繁体中文"
        },
      }
    },
    methods: {
      chooseLang(command) {
        window.location.href = `?language=${command}`;
      }
    }
  }
</script>

<style lang="less">
  .LoginHeader {
    width: 100%;
    height: 100px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    .logo {
      width: 90px;
      height: 90px;
      cursor: pointer;
    }
    .name {
      font-size: 30px;
      color: #333;
      padding-left: 40px;
      cursor: pointer;
    }
    .dropdown-link {
      position: absolute;
      right: 30px;
    }
  }
</style>
