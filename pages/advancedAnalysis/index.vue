<template>
  <div>
    <RootPage :language="language" default-active="3-1" :default-openeds="['3']">
      <div class="AdvancedAnalysis" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.DestinationRegions[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.DestinationRegionsInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in DestinationRegionsDatas"
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
                             v-for="item, index in DestinationRegionsDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.CoreIndicator[language]">
              <div slot="cell">
                <el-select v-model="form.coreIndicator" :placeholder="languageDatas.CoreIndicatorInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in DestinationRegionsDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item">
            <MyFormCell :lable="languageDatas.ComparisonType[language]">
              <div slot="cell">
                <el-select v-model="form.type" :placeholder="languageDatas.ComparisonTypeInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in DestinationRegionsDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-center">
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
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.ComparisonDate[language]">
              <div slot="cell">
                <el-date-picker
                  v-model="form.endDate"
                  type="date"
                  :placeholder="languageDatas.DateInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
          </div>
        </div>
        <TitleCell :title="`${languageDatas.DataAnalysisChart[language]}`" :inLink="true"></TitleCell>
        <div class="DataAnalysisChart my-box-shadow">
          <div id="DataAnalysisChart" class="chart-wrap" style="width: 100%; height: 500px;"></div>
        </div>
        <TitleCell :title="`${languageDatas.DataRecord[language]}`" :inLink="true" :buttonText="`${languageDatas.Export[language]}`"></TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Sales[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PassengerFlowDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"
                                :value="`${languageDatas.Sales[language]}：${item.value} <br> ${languageDatas.NumberOfStores1[language]}：${item.value} <br> ${languageDatas.NumberOfReceptions[language]}：${item.value}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Volume[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${languageDatas.TurnoverRate[language]}：${item.male}<br>${languageDatas.JointRate[language]}：${item.female}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.CustomerPrice[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${item.male}`"></DataDetailCell>
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
  import {TitleCell, MyFormCell, DataDetailCell, DataDetailTitle} from "@components";

  export default {
    components: {
      RootPage,
      TitleCell,
      MyFormCell,
      DataDetailCell,
      DataDetailTitle
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
      menuDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [
          {
            name: `${languageDatas.SortByStoreName[language]}`,
            value: '1'
          },
          {
            name: `${languageDatas.SortByTime[language]}`,
            value: '2'
          },
          {
            name: `${languageDatas.SortByNumberOfPassengers[language]}`,
            value: '3'
          }
        ];
        return datas;
      }
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        form: {
          date: '',
          endDate: '',
          area: '',
          store: '',
          type: '',
          coreIndicator: ''
        },
        DestinationRegionsDatas: [
          {
            lable: '廣東分公司', value: 1
          },
          {
            lable: '香港分公司', value: 1
          }
        ],
        PassengerFlowDatas: [
          {
            title: '广州北京路店A',
            value: '198',
            label: '2018-09-09'
          }, {
            title: '广州北京路店A',
            value: '198',
            label: '2018-09-09'
          }, {
            title: '广州北京路店A',
            value: '198',
            label: '2018-09-09'
          }, {
            title: '广州北京路店A',
            value: '198',
            label: '2018-09-09'
          }, {
            title: '广州北京路店A',
            value: '198',
            label: '2018-09-09'
          }
        ],
        PersonDatas: [
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
          {
            title: '广州北京路店A',
            male: '67%',
            female: '33%',
            label: '2018-09-09'
          },
        ]
      }
    },
    mounted() {
      this.initChart1();
    },
    methods:{
      initChart1() {
        const chart = echarts.init(document.getElementById('DataAnalysisChart'));
        const option = {
          color: ['rgb(83, 168, 226)', 'rgb(118, 221, 251)'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            right: 20,
            top: 30,
            data: ['銷售額', '對比銷售額']
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: '15',
            right: '15',
            bottom: '15',
            top: '60',
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: [
                '2018-07-24 vs 2018-08-01',
                '2018-07-24 vs 2018-08-01',
                '2018-07-24 vs 2018-08-01',
                '2018-07-24 vs 2018-08-01',
                '2018-07-24 vs 2018-08-01'
              ]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '銷售額',
              type: 'bar',
              barGap: 0,
              data: [320, 332, 301, 334, 390]
            },
            {
              name: '對比銷售額',
              type: 'bar',
              data: [220, 182, 191, 234, 290]
            },
          ]
        };
        chart.setOption(option);
      }
    }
  }
</script>

<style lang="less">
  .AdvancedAnalysis {
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
    .DataAnalysisChart {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      background-color: #fff;
      margin: 15px 0;
      .chart-wrap {

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
        }
      }
    }
  }
</style>
