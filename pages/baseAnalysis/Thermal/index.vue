<template>
  <div>
    <RootPage :language="language" default-active="2-2" :default-openeds="['2']">
      <div class="Thermal" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Date[language]">
              <div slot="cell">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  :placeholder="languageDatas.DateInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
            <div class="input-cell_">
              <MyFormCell :lable="languageDatas.Lens[language]">
                <div slot="cell">
                  <el-select v-model="form.area" :placeholder="languageDatas.LensInput[language]">
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
        <TitleCell :title="languageDatas.ThermalMapForLens[language]" :inLink="true"></TitleCell>
        <div class="thermal-map-wrap my-box-shadow">
          <img src="/re.jpg" style="width: 100%;">
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell, MyFormCell} from "@components";
  export default {
    name: "Thermal",
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
          date: ''
        },
        optionDatas: [{
          lable: '廣州北京路A区', value: 1
        }, {
          lable: '廣州北京路A区', value: 2
        }, {
          lable: '廣州北京路A区', value: 3
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
  .Thermal {
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
    .thermal-map-wrap {
      width: 100%;
      height: 800px;
      background-color: #fff;
      margin-top: 15px;
      border-radius: 4px;
    }
  }
</style>
