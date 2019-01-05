<template>
  <div class="main-wrap">
    <header class="header-wrap">
      <div class="logo-wrap">
        <div class="logo"></div>
      </div>
      <div class="title">
        <div class="title-big">{{languageDatas.name[language]}}</div>
        <div class="title-sub">{{headerTitle[defaultActive]}}</div>
      </div>
      <div class="right-wrap">
        <div class="location-wrap" style="margin-right: 25px;">
          <el-dropdown @command="chooseLang">
                  <span class="el-dropdown-link">
                    <i class="iconfont icon-location location-icon"></i>{{items[language]}}
                  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">English</el-dropdown-item>
              <el-dropdown-item command="cn">简体中文</el-dropdown-item>
              <el-dropdown-item command="hk">繁体中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="location-wrap">
          <el-dropdown @command="setting">
                  <span class="el-dropdown-link user-name">
                    Admin<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item command="Profile">{{languageDatas.Profile[language]}}</el-dropdown-item> -->
              <el-dropdown-item command="SignOut">{{languageDatas.SignOut[language]}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import api from '@plugins/api';
  export default {
    data() {
      return {
        items: {
          en: "English",
          cn: "简体中文",
          hk: "繁体中文"
        },
      };
    },
    props: {
      language: String,
      defaultActive: String
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
      headerTitle() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const title = {
          '1-1': `${languageDatas.Overview[language]} | ${languageDatas.AreaOverview[language]}`,
          '1-2': `${languageDatas.Overview[language]} | ${languageDatas.IndependentStore[language]}`,

          '2-1': `${languageDatas.BaseAnalysis[language]} | ${languageDatas.PassengerFlow[language]}`,
          '2-2': `${languageDatas.BaseAnalysis[language]} | ${languageDatas.ThermalMap[language]}`,
          '2-3': `${languageDatas.BaseAnalysis[language]} | ${languageDatas.ReportAnalysis[language]}`,
          '2-4': `${languageDatas.BaseAnalysis[language]} | ${languageDatas.RemotePatrol[language]}`,
          '2-5': `${languageDatas.BaseAnalysis[language]} | ${languageDatas.FittingAnalysis[language]}`,

          '3-1': `${languageDatas.AdvancedAnalysis[language]} | ${languageDatas.CycleComparison[language]}`,
          '3-2': `${languageDatas.AdvancedAnalysis[language]} | ${languageDatas.StoreComparison[language]}`,

          '4-1': `${languageDatas.Setting[language]} | ${languageDatas.UserManagement[language]}`,
          '4-2': `${languageDatas.Setting[language]} | ${languageDatas.DataManagement[language]}`,
        }
        return title;
      }
    },
    methods: {
      chooseLang(command) {
        window.location.href = `?language=${command}`;
      },
      setting(command) {
        api.logout({}).then(res => {
            const resonse = res.datas;
            if(resonse && resonse.code === 0) {
                location.href = `/login?language=en`;
            } else {
                this.$message({ message: `failed!`, type: 'warning' });
            }
        })
      }
    }
  };
</script>

<style lang="less">
  @import url("../style/config.less");

  .main-wrap {
    width: 100%;
    .header-wrap {
      width: 100%;
      height: 80px;
      background-color: #fff;
      -moz-box-shadow: 0px 1px 5px #ccc; /* 老的 Firefox */
      box-shadow: 0px 1px 5px #ccc;
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
          height: 71.5px;
          background: url("/static/logo.png") no-repeat;
          width: 61.5px;
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
          cursor: pointer;
          .location-icon {
            margin-right: 4px;
            display: inline;
          }
          .user-name {
            color: #98A0A6;
          }
        }
      }
    }
  }
</style>

