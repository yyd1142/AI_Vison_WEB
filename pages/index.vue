<template>
<div class="page-wrap main-wrap">
  <el-row>
    <el-col :span="4">
      <div class="menu-wrap">
        <div class="title-top">{{language.MenuList[lang]}}</div>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <div class="menu-cell">
                <i class="iconfont icon-yibiaopan icon"></i>
                <span class="title">{{language.Overview[lang]}}</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">地区概况</el-menu-item>
              <el-menu-item index="1-2">独立门店</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <div class="menu-cell">
              <i class="iconfont icon-tubiao1 icon-small"></i>
              <span class="title">基础分析</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">店铺客流</el-menu-item>
              <el-menu-item index="2-2">热力分布</el-menu-item>
              <el-menu-item index="2-3">报表分析</el-menu-item>
              <el-menu-item index="2-4">远程巡店</el-menu-item>
              <el-menu-item index="2-5">店铺试衣分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <div class="menu-cell">
              <i class="iconfont icon-tubiao icon-small"></i>
              <span class="title">高级分析</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">周期对比分析</el-menu-item>
              <el-menu-item index="3-2">门店对比分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <div class="menu-cell">
              <i class="iconfont icon-peizhi icon-small"></i>
              <span class="title">配置管理</span>
              </div>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">用户管理</el-menu-item>
              <el-menu-item index="4-2">数据管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="content-wrap">
          <header class="header-wrap">
            <div class="logo-wrap">
              <div class="logo"></div>
            </div>
            <div class="title">
              <div class="title-big">智能零售分析系统</div>
              <div class="title-sub">整体概况 | 地区概况</div>
            </div>
            <div class="right-wrap">
              <div class="location-wrap" style="margin-right: 25px;">
                <el-dropdown @command="chooseLang">
                  <span class="el-dropdown-link">
                    <i class="iconfont icon-location location-icon"></i>{{items[lang]}}
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="hk">繁体中文</el-dropdown-item>
                    <el-dropdown-item command="cn">简体中文</el-dropdown-item>
                    <el-dropdown-item command="en">English</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="location-wrap">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    Admin<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item>退出账号</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </header>
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
.main-wrap {
  .el-menu > .el-submenu {
    padding: 10px 0;
  }
  .menu-wrap,
  .content-wrap {
    width: 100%;
    min-height: 100vh;
  }
  .menu-wrap {
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
    }
  }
  .content-wrap {
    background-color: #f2f2f2;
    .header-wrap {
      width: 100%;
      height: 80px;
      background-color: #fff;
      -moz-box-shadow: 0px 2px 10px #ccc; /* 老的 Firefox */
      box-shadow: 0px 2px 10px #ccc;
      display: flex;
      display: -webkit-flex; /* Safari */
      position: relative;
      flex: 1;
      .logo-wrap {
        display: flex;
        display: -webkit-flex; /* Safari */
        height: 80px;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        .logo {
          height: 50px;
          background: url("/static/cropped-Logo-MyVision-1.png") no-repeat;
          width: 75px;
          background-position: center;
          background-size: cover;
        }
      }
      .title {
        flex-direction: row;
        justify-content: center;
        height: 80px;
        padding: 12px 0 12px 15px;
        .title-big {
          font-size: 22px;
          color: #333;
        }
        .title-sub {
          font-size: 16px;
          color: #999;
        }
      }
      .right-wrap {
        height: 80px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        justify-content: flex-end;
        display: flex;
        display: -webkit-flex;
        .location-wrap {
          height: 20px;
          justify-content: center;
          width: 88px;
          text-align: center;
          margin-top: 28px;
          .location-icon {
            margin-right: 4px;
            display: inline;
          }
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      background-color: #fff;
      flex: 1;
    }
  }
  .menu-cell {
    width: 100%;
    .icon {
      color: @mainColor;
      font-size: 30px;
    }
    .icon-small {
      color: @mainColor;
      font-size: 24px;
    }
    .title {
      font-size: 16px;
      padding-left: 30px;
    }
  }
}
</style>

<script>
import language from '@static/language/config.json';

export default {
  data() {
    return {
      lang: 'cn',
      language: language,
      items: {
        'cn': '简体中文',
        'hk': '繁体中文',
        'en': 'English'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    chooseLang(command) {
      this.lang = command;
    }
  }
};
</script>
