<template>
  <div class="main-wrap">
    <div class="menu-wrap">
      <div class="title-top">{{languageDatas.MenuList[language]}}</div>
      <el-menu :default-active="defaultActive" :default-openeds="defaultOpeneds" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <div class="menu-cell">
              <i class="iconfont icon-yibiaopan icon"></i>
              <span class="title">{{languageDatas.Overview[language]}}</span>
            </div>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="_onPress('overview')">{{languageDatas.AreaOverview[language]}}</el-menu-item>
            <el-menu-item index="1-2" @click="_onPress('overview/IndependentStore', 'regionsId')">{{languageDatas.IndependentStore[language]}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <div class="menu-cell">
              <i class="iconfont icon-tubiao1 icon-small"></i>
              <span class="title">{{languageDatas.BaseAnalysis[language]}}</span>
            </div>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="_onPress('baseAnalysis')">{{languageDatas.PassengerFlow[language]}}</el-menu-item>
            <el-menu-item index="2-2" @click="_onPress('baseAnalysis/Thermal')">{{languageDatas.ThermalMap[language]}}</el-menu-item>
            <el-menu-item index="2-3" @click="_onPress('baseAnalysis/Report', 'regionsId')">{{languageDatas.ReportAnalysis[language]}}</el-menu-item>
            <el-menu-item index="2-4" @click="_onPress('baseAnalysis/RemotePatrol')">{{languageDatas.RemotePatrol[language]}}</el-menu-item>
            <el-menu-item index="2-5" @click="_onPress('baseAnalysis/FittingAnalysis')">{{languageDatas.FittingAnalysis[language]}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <div class="menu-cell">
              <i class="iconfont icon-tubiao icon-small"></i>
              <span class="title">{{languageDatas.AdvancedAnalysis[language]}}</span>
            </div>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="_onPress('advancedAnalysis')">{{languageDatas.CycleComparison[language]}}</el-menu-item>
            <el-menu-item index="3-2" @click="_onPress('advancedAnalysis/StoreComparisonAnalysis')">{{languageDatas.StoreComparison[language]}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <div class="menu-cell">
              <i class="iconfont icon-peizhi icon-small"></i>
              <span class="title">{{languageDatas.Setting[language]}}</span>
            </div>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="_onPress('Setting')">{{languageDatas.UserManagement[language]}}</el-menu-item>
            <el-menu-item index="4-2" @click="_onPress('Setting/DataManagement')">{{languageDatas.DataManagement[language]}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    language: String,
    defaultActive: String,
    defaultOpeneds: Array
  },
  computed: {
    languageDatas() {
      return this.$store.getters.languageDatas;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    _onPress(path, type) {
      path = `/${path}?language=${this.language}`;
      if (type === "regionsId") {
        const regionsId = localStorage.getItem("regionsId");
        path = `${path}&regionsId=${regionsId}`;
      }
      window.location.href = path;
    }
  }
};
</script>

<style lang="less">
@import url("../style/config.less");

.main-wrap {
  .el-menu > .el-submenu {
    padding: 10px 0;
  }
  .menu-wrap {
    width: 100%;
    min-height: 100vh;
    -moz-box-shadow: 2px 0px 8px #f2f2f2; /* 老的 Firefox */
    box-shadow: 2px 0px 8px #f2f2f2;
    .title-top {
      width: 100%;
      background: @mainColor;
      height: 80px;
      line-height: 80px;
      color: #fff;
      font-size: 20px;
      padding-left: 20px;
      -moz-box-shadow: 0px 2px 8px #f2f2f2; /* 老的 Firefox */
      box-shadow: 0px 2px 8px #f2f2f2;
      box-sizing: border-box;
    }
  }
  .menu-cell {
    width: 100%;
    .icon {
      color: @mainColor;
      font-size: 24px;
    }
    .icon-small {
      color: @mainColor;
      font-size: 24px;
    }
    .title {
      font-size: 16px;
      padding-left: 15px;
    }
  }
}
</style>

