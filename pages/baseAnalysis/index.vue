<template>
  <div>
    <RootPage :language="language" default-active="2-1" :default-openeds="['2']">
      <div class="baseAnalysis" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Date[language]">
              <div slot="cell">
                <el-date-picker v-model="form.date" type="date"
                                :placeholder="languageDatas.DateInput[language]"></el-date-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-center">
            <MyFormCell :lable="languageDatas.Time[language]">
              <div slot="cell">
                <el-time-picker
                  v-model="form.time"
                  :placeholder="languageDatas.TimeInput[language]">
                </el-time-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.Cycle[language]">
              <div slot="cell">
                <el-select v-model="form.cycle" :placeholder="languageDatas.CycleInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in CycleOptionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
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
          </div>
          <div class="form-item form-center">
            <MyFormCell :lable="languageDatas.Store[language]">
              <div slot="cell">
                <el-select v-model="form.store" :placeholder="languageDatas.StoreInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <el-button class="form-button" type="primary">{{languageDatas.Search[language]}}</el-button>
          </div>
        </div>
        <TitleCell
          :title="`${languageDatas.PassengerFlowData[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="chart-wrap">

        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell, MyFormCell} from "@components/index.js";

  export default {
    name: "baseAnalysis",
    components: {
      RootPage,
      TitleCell,
      MyFormCell
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
      CycleOptionDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [{
          lable: `${languageDatas.hour[language]}(累加)`, value: 1
        },{
          lable: `${languageDatas.hour[language]}`, value: 2
        },{
          lable: `${languageDatas.day[language]}`, value: 3
        },{
          lable: `${languageDatas.week[language]}`, value: 4
        },{
          lable: `${languageDatas.month[language]}`, value: 5
        }];
        return datas;
      }
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        form: {
          date: '',
          time: '',
          cycle: '',
          area: '',
          store: ''
        },
        optionDatas: [{
          lable: '廣州北京路1', value: 1
        }, {
          lable: '廣州北京路2', value: 2
        }, {
          lable: '廣州北京路3', value: 3
        }]
      }
    }
  }
</script>

<style lang="less">
  .baseAnalysis {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    padding: 0 15px 30px 15px;
    flex-direction: column;
    .form-cell {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      flex-wrap: wrap;
      padding: 28px 0 0 0;
      .form-item {
        width: 100% / 3;
        display: flex;
        display: -webkit-flex; /* Safari */
        align-items: center;
        height: 40px;
        margin-bottom: 15px;
        &.form-center {
          justify-content: center;
        }
        &.form-right {
          justify-content: flex-end;
        }
        .form-button {
          width: 240px;
        }
      }
    }
  }
</style>
