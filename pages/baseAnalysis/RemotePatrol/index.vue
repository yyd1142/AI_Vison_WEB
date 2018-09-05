<template>
  <div>
    <RootPage :language="language" default-active="2-4" :default-openeds="['2']">
      <div class="RemotePatrol" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Area[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.areaInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
            <div class="input-cell_">
              <MyFormCell :lable="languageDatas.Store[language]">
                <div slot="cell">
                  <el-select v-model="form.area" :placeholder="languageDatas.StoreInput[language]">
                    <el-option :label="item.lable"
                               :value="item.value"
                               v-for="item, index in optionDatas"
                               :key="index">
                    </el-option>
                  </el-select>
                </div>
              </MyFormCell>
            </div>
          </div>
          <div class="button-group">
            <el-button style="width: 240px;" type="primary" @click="search()">{{languageDatas.Search[language]}}</el-button>
          </div>
        </div>
        <TitleCell :title="languageDatas.VideoPlayback[language]" :inLink="true"></TitleCell>
        <div class="video-wrap my-box-shadow">
          <div class="video-item" v-for="item, index in 6" :key="index">
            <img src="/demo.jpg">
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell, MyFormCell} from "@components";
  export default {
    name: "RemotePatrol",
    components: {
      RootPage,
      TitleCell,
      MyFormCell
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'en';
      return {
        language: language,
        form: {
          area: 1,
          date: 2
        },
        optionDatas: [{
          lable: '廣州北京路1', value: 1
        }, {
          lable: '廣州北京路2', value: 2
        }, {
          lable: '廣州北京路3', value: 3
        }]
      }
    },
    methods: {
      search() {

      }
    }
  }
</script>

<style lang="less">
  .RemotePatrol {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    padding: 0 15px 30px 15px;
    flex-direction: column;
    .my-box-shadow {
      -moz-box-shadow: 0px 1px 5px #ccc; /* 老的 Firefox */
      box-shadow: 0px 1px 5px #ccc;
    }
    .form-cell {
      display: flex;
      display: -webkit-flex; /* Safari */
      height: 80px;
      width: 100%;
      align-items: center;
      flex-direction: row;
      .form-item {
        width: 70%;
        display: flex;
        display: -webkit-flex; /* Safari */
        .input-cell_ {
          margin-left: 15px;
        }
      }
      .button-group {
        display: flex;
        display: -webkit-flex; /* Safari */
        width: 30%;
        height: 80px;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .video-wrap {
      width: 100%;
      background-color: #fff;
      margin-top: 15px;
      border-radius: 4px;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      .video-item {
        width: 100% / 6;
        height: 280px;
        padding: 15px;
        img {
          width: 100%;
          height: 280px;
          border-radius: 4px;
        }
      }
    }
  }
</style>
