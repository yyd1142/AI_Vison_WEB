<template>
  <div>
    <RootPage :language="language" default-active="2-3" :default-openeds="['2']">
      <div class="Report" slot="page">
        <div class="form-cell">
          <div class="form-item left">
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
          <div class="form-item center">
            <MyFormCell :lable="languageDatas.Date[language]">
              <div slot="cell">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  :placeholder="languageDatas.DateInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item right">
            <MyFormCell :lable="languageDatas.ReportType[language]">
              <div slot="cell">
                <el-select v-model="form.type" :placeholder="languageDatas.ReportTypeInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in typeOptionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
        </div>
        <TitleCell :title="languageDatas.ReportDetail[language]" :inLink="true" :buttonText="languageDatas.Export[language]"></TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.StoreInfo[language]}`"></DataDetailTitle>
              <div v-for="item, index in storeDatas" :key="index" :style="`background-color: ${index % 2 === 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Performance[language]}`" :menuDatas="sortDatas"></DataDetailTitle>
              <div v-for="item, index in salesDatas" :key="index" :style="`background-color: ${index % 2 === 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.DailyEvent[language]}`"></DataDetailTitle>
              <div class="detail-form">
                <el-form ref="subForm" :model="subForm" label-width="80px" label-position="top">
                  <el-form-item :label="languageDatas.EventDate[language]">
                    <el-date-picker
                      v-model="subForm.date"
                      type="date"
                      :placeholder="languageDatas.EventDateInput[language]" style="width: 100%;">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item :label="languageDatas.EventName[language]">
                    <el-input v-model="subForm.name" :placeholder="languageDatas.EventNameInput[language]"></el-input>
                  </el-form-item>
                  <el-form-item :label="languageDatas.EventDesc[language]">
                    <el-input v-model="subForm.desc" :placeholder="languageDatas.EventDescInput[language]"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" style="width: 100%;">{{languageDatas.Confirm[language]}}</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell, MyFormCell, DataDetailTitle, DataDetailCell} from "@components";
  export default {
    name: "Report",
    components: {
      RootPage,
      TitleCell,
      MyFormCell,
      DataDetailTitle,
      DataDetailCell
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
      typeOptionDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [{
          lable: `${languageDatas.dailyReport[language]}`, value: 1
        },{
          lable: `${languageDatas.weeklyReport[language]}`, value: 1
        },{
          lable: `${languageDatas.monthlyReport[language]}`, value: 1
        }]
        return datas;
      },
      sortDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [
          {
            name: `${languageDatas.DailyIndicator[language]}`,
            value: '1'
          },
          {
            name: `${languageDatas.ReachedDaily[language]}`,
            value: '1'
          },
          {
            name: `${languageDatas.DailySales[language]}`,
            value: '1'
          },
          {
            name: `${languageDatas.Year_on_yearSales[language]}`,
            value: '1'
          },
          {
            name: `${languageDatas.Year_on_yearIncrease[language]}`,
            value: '1'
          },
        ]
        return datas;
      },
      salesDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [
          {
            title: `${languageDatas.DailyIndicator[language]}`, label: '10'
          },
          {
            title: `${languageDatas.ReachedDaily[language]}`, label: '4'
          },
          {
            title: `${languageDatas.DailySales[language]}`, label: '10%'
          },
          {
            title: `${languageDatas.Year_on_yearSales[language]}`, label: '11%'
          },
          {
            title: `${languageDatas.Year_on_yearIncrease[language]}`, label: '10'
          },
        ]
        return datas;
      }
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        form: {
          area: '',
          date: '',
          type: ''
        },
        optionDatas: [{
          lable: '廣州北京路1', value: 1
        }, {
          lable: '廣州北京路2', value: 2
        }, {
          lable: '廣州北京路3', value: 3
        }],
        storeDatas: [
          {
            title: '门店', label: '北京路广州路店'
          },
          {
            title: '店长', label: '彭于晏'
          },
          {
            title: '日期', label: '2018-09-08'
          },
          {
            title: '天气', label: '多云转晴'
          }
        ],
        subForm: {
          date: '',
          name: '',
          desc: ''
        }
      }
    },
    methods: {
      search() {

      }
    }
  }
</script>

<style lang="less">
  .Report {
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
        width: 100% / 3;
        display: flex;
        display: -webkit-flex; /* Safari */
        &.left {
          justify-content: flex-start;
        }
        &.center {
          justify-content: center;
        }
        &.right {
          justify-content: flex-end;
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
    .data-detail-wrap {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      margin: 15px 0;
      .detail-item {
        width: 100% / 3;
        &.detail-left {
          padding-right: 15px;
        }
        &.detail-center {
          padding: 0 15px;
        }
        &.detail-right {
          padding-left: 15px;
        }
        .detail-padding {
          width: 100%;
          background-color: #fff;
          border-radius: 4px;
          min-height: 500px;
          .detail-form {
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
