<template>
  <div>
    <RootPage :language="language" default-active="2-5" :default-openeds="['2']">
      <div class="FittingAnalysis" slot="page">
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
          <div class="chart-item chart-left">
            <div class="chart-padding my-box-shadow">
              <div id="chart1" style="width: 100%; height: 500px;"></div>
            </div>
          </div>
          <div class="chart-item chart-right">
            <div class="chart-padding my-box-shadow">
              <div id="chart2" style="width: 100%; height: 500px;"></div>
            </div>
          </div>
          <!--<div class="chart-item chart-right">-->
          <!--<div class="chart-padding my-box-shadow">-->
          <!--<div id="chart3" style="width: 100%; height: 500px;"></div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
        <TitleCell
          :title="`${languageDatas.DataDetail[language]}`"
          :inLink="true"
          :buttonText="`${languageDatas.Export[language]}`">
        </TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.NumberOfPassengers[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PassengerFlowDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"
                                :value="`${languageDatas.NumberOfPassengers[language]}：${item.value}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.MaleToFemaleRatio[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${languageDatas.Male[language]}：${item.male}<br>${languageDatas.Female[language]}：${item.female}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.AgeDistribution[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${languageDatas.Male[language]}：${item.male}<br>${languageDatas.Female[language]}：${item.female}`"></DataDetailCell>
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
    name: "FittingAnalysis",
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
      CycleOptionDatas() {
        const languageDatas = this.languageDatas;
        const language = this.language;
        const datas = [{
          lable: `${languageDatas.hour[language]}(累加)`, value: 1
        }, {
          lable: `${languageDatas.hour[language]}`, value: 2
        }, {
          lable: `${languageDatas.day[language]}`, value: 3
        }, {
          lable: `${languageDatas.week[language]}`, value: 4
        }, {
          lable: `${languageDatas.month[language]}`, value: 5
        }];
        return datas;
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
      const language = ctx.query.language || 'en';
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
        }],
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
      this.initChart2();
      // this.initChart3();
    },
    methods: {
      initChart1() {
        const chart = echarts.init(document.getElementById('chart1'));
        const option = {
          title: {
            text: `${this.languageDatas.MaleToFemaleRatioFitting[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#2C82BE', '#76DDFB'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'right',
            right: '20',
            top: '20',
            data: [`${this.languageDatas.Male[this.language]}`, `${this.languageDatas.Female[this.language]}`]
          },
          series: [
            {
              name: `${this.languageDatas.ratio[this.language]}`,
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: `${this.languageDatas.Male[this.language]}`},
                {value: 310, name: `${this.languageDatas.Female[this.language]}`},
              ]
            }
          ]
        };
        chart.setOption(option);
      },
      initChart2() {
        const chart = echarts.init(document.getElementById('chart2'));
        const option = {
          title: {
            text: `${this.languageDatas.AgeDistributionFitting[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#2C82BE', '#76DDFB'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'right',
            right: '20',
            top: '20',
            data: [`0-20`, `20-30`]
          },
          series: [
            {
              name: `${this.languageDatas.AgeDistribution[this.language]}`,
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 245, name: `0-20`},
                {value: 456, name: `20-30`},
              ]
            }
          ]
        };
        chart.setOption(option);
      },
      initChart3() {
        const chart = echarts.init(document.getElementById('chart3'));
        const option = {
          title: {
            text: `${this.languageDatas.TimePeriodRatio[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#2C82BE', '#76DDFB'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'right',
            right: '20',
            top: '20',
            data: [`${this.languageDatas.Male[this.language]}`, `${this.languageDatas.Female[this.language]}`]
          },
          series: [
            {
              name: `${this.languageDatas.ratio[this.language]}`,
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: `${this.languageDatas.Male[this.language]}`},
                {value: 310, name: `${this.languageDatas.Female[this.language]}`},
              ]
            }
          ]
        };
        chart.setOption(option);
      }
    }
  }
</script>

<style lang="less">
  .FittingAnalysis {
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
    .chart-wrap {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      margin: 15px 0;
      .chart-item {
        width: 100% / 2;
        &.chart-left {
          padding-right: 15px;
        }
        &.chart-center {
          padding: 0 15px;
        }
        &.chart-right {
          padding-left: 15px;
        }
        .chart-padding {
          width: 100%;
          background-color: #fff;
          border-radius: 4px;

        }
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
