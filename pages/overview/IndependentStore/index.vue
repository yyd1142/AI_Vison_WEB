<template>
  <div>
    <RootPage :language="language" default-active="1-2" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">
        <div class="form-cell">
          <div class="form-item">
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
          <div class="button-group">
            <el-button-group>
              <el-button :type="item.type" v-for="(item, index) of buttonDatas" :key="index"
                         @click="chooseDays(item, index)">{{languageDatas[item.title][language]}}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <TitleCell :title="languageDatas.StoreTotalOverview[language]" :inLink="true"></TitleCell>
        <div class="area-total-overview my-box-shadow">
          <div class="area-button-group">
            <el-button-group>
              <el-button type="" icon="el-icon-arrow-left" @click="previousTypeBtn()"></el-button>
              <el-button type="">{{typeDatas[typeIndex]}}</el-button>
              <el-button type="" icon="el-icon-arrow-right" @click="nextTypeBtn()"></el-button>
            </el-button-group>
          </div>
          <div id="AreaTotalOverview" class="" style="width: 100%; height: 500px;"></div>
        </div>
        <TitleCell
          :title="`${languageDatas.StoreIndicatorOverview[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="top-list-and-passenger-flow">
          <div class="wrap-cell-50" style="padding-right: 15px;">
            <div class="area-button-group" style="right: 30px;">
              <el-button-group>
                <el-button type="" icon="el-icon-arrow-left" @click="previousTypeBtn()"></el-button>
                <el-button type="">{{typeDatas[typeIndex]}}</el-button>
                <el-button type="" icon="el-icon-arrow-right" @click="nextTypeBtn()"></el-button>
              </el-button-group>
            </div>
            <div class="wrap-cell-padding my-box-shadow">
              <div class="wrap-cell-title">
                <span>{{languageDatas.IndexComparison[language]}}</span>
              </div>
              <div class="daily-market-wrap" v-for="item in 5">
                <div class="trt4redsafdsffdf">
                  <div class="a8534u9rtiewohds">103,717</div>
                  <div class="a8534u9rtiesdfds">{{languageDatas.Sales[language]}}</div>
                  <div class="a853fsdffiesdfds">24.7%</div>
                </div>
                <div class="dfdfffff23rwt5y4">76</div>
              </div>
            </div>
          </div>
          <div class="wrap-cell-50" style="padding-left: 15px;">
            <div class="card-cell-wrap">
              <div class="wrap-cell-padding my-box-shadow">
                <div class="wrap-cell-title">
                  <span>{{languageDatas.DailyMarketingAmount[language]}}</span>
                </div>
                <div class="progress-wrap">
                  <div class="progress-content">
                    <el-progress type="circle" :percentage="80" :width="300" color="#8e71c7"></el-progress>
                  </div>
                  <div class="progress-item">
                    {{languageDatas.DailyIndicator[language]}}：0元<br>{{languageDatas.DailyMarketingAmount[language]}}：0元
                  </div>
                </div>
              </div>
              <div class="wrap-cell-padding my-box-shadow" style="margin-top: 30px;">
                <div class="wrap-cell-title">
                  <span>{{languageDatas.AccumulatedSales[language]}}</span>
                </div>
                <div class="progress-wrap">
                  <div class="progress-content">
                    <el-progress type="circle" :percentage="60" :width="300" color="#8e71c7"></el-progress>
                  </div>
                  <div class="progress-item">
                    {{languageDatas.MonthlyIndicator[language]}}：0元<br>{{languageDatas.AccumulatedSales[language]}}：0元
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TitleCell
          :title="`${languageDatas.WeatherTrend[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="weather-chart-wrap my-box-shadow">
          <div id="WeatherChart" class="weather-chart" style="width: 100%; height: 450px;"></div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell, MyFormCell} from "@components/index.js";

  export default {
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
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        buttonDatas: [{
          title: 'Yesterday',
          type: 'primary'
        }, {
          title: 'Last_7_days',
          type: ''
        }, {
          title: 'Last_30_days',
          type: ''
        }],
        form: {
          area: ''
        },
        typeIndex: 0,
        typeDatas: [],
        optionDatas: [{
          lable: '廣州北京路1', value: 1
        }, {
          lable: '廣州北京路2', value: 2
        }, {
          lable: '廣州北京路3', value: 3
        }]
      }
    },
    mounted() {
      const typeDatas = [
        `${this.languageDatas.PassengerFlow[this.language]}`,
        `${this.languageDatas.Sales[this.language]}`,
        `${this.languageDatas.TurnoverRate[this.language]}`,
        `${this.languageDatas.JointRate[this.language]}`,
        `${this.languageDatas.CustomerPrice[this.language]}`,
      ];
      this.typeDatas = typeDatas;
      this.initChart();
      this.weatherChart();
    },
    methods: {
      chooseDays(item, index) {
        for (let [k, i] of this.buttonDatas.entries()) {
          if (k === index) {
            i.type = 'primary';
          } else {
            i.type = '';
          }
        }
      },
      initChart() {
        const chart = echarts.init(document.getElementById('AreaTotalOverview'));
        const option = {
          title: {
            text: `${this.languageDatas.PassengerFlowToday[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#5151e0'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '15',
            right: '15',
            bottom: '15',
            containLabel: true,
            top: '100'
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: `${this.languageDatas.PassengerFlowToday[this.language]}`,
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220, 10, 52, 200, 334, 390, 330, 220]
            }
          ]
        };
        chart.setOption(option);
      },
      weatherChart() {
        const chart = echarts.init(document.getElementById('WeatherChart'));
        const option = {
          // title: {
          //   text: `${this.languageDatas.PassengerFlowAnalysis[this.language]}`,
          //   padding: [30, 0, 0, 15]
          // },
          color: ['#76DDFB', '#2C82BE'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [
              `${this.languageDatas.DaytimeTemperature[this.language]}（℃）`,
              `${this.languageDatas.NightTemperature[this.language]}（℃）`
            ],
            top: 30,
            right: 15
          },
          grid: {
            left: '15',
            right: '15',
            bottom: '15',
            containLabel: true,
            top: '100'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
              `2018-08-20 \n ${this.languageDatas.Week[0][this.language]}`,
              `2018-08-21 \n ${this.languageDatas.Week[1][this.language]}`,
              `2018-08-22 \n ${this.languageDatas.Week[2][this.language]}`,
              `2018-08-23 \n ${this.languageDatas.Week[3][this.language]}`,
              `2018-08-24 \n ${this.languageDatas.Week[4][this.language]}`,
              `2018-08-25 \n ${this.languageDatas.Week[5][this.language]}`,
              `2018-08-26 \n ${this.languageDatas.Week[6][this.language]}`
            ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: `${this.languageDatas.DaytimeTemperature[this.language]}（℃）`,
              type: 'line',
              data: [32, 30, 31, 31, 29, 29, 30]
            },
            {
              name: `${this.languageDatas.NightTemperature[this.language]}（℃）`,
              type: 'line',
              data: [30, 29, 30, 31, 28, 28, 31]
            }
          ]
        };
        chart.setOption(option);
      },
      previousTypeBtn() {
        const index = this.typeIndex;
        if (index > 0) {
          this.typeIndex = index - 1;
        }
      },
      nextTypeBtn() {
        const index = this.typeIndex;
        const lastIndex = this.typeDatas.length - 1;
        if (index < lastIndex) {
          this.typeIndex = index + 1;
        }
      }
    }
  };
</script>

<style lang="less">
  .overview-wrap {
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
    .chart-wrap {
      border-radius: 4px;
      background-color: #fff;
    }
    .area-total-overview {
      width: 100%;
      position: relative;
      margin: 15px 0;
      background-color: #fff;
    }
    .area-button-group {
      position: absolute;
      z-index: 20;
      top: 30px;
      right: 15px;
    }
    .top-list-and-passenger-flow {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      margin: 15px 0 0 0;
      .wrap-cell-50 {
        width: 50%;
        padding-bottom: 15px;
        position: relative;
        .wrap-cell-padding {
          width: 100%;
          background-color: #fff;
          padding-bottom: 15px;
          .wrap-cell-title {
            width: 100%;
            height: 66px;
            align-items: center;
            display: flex;
            display: -webkit-flex; /* Safari */
            span {
              font-size: 18px;
              color: #3a3a3a;
              font-weight: bold;
              padding-left: 15px;
            }
          }
        }
        .card-cell-wrap {
          width: 100%;
        }
      }
    }
    .daily-market-wrap {
      display: flex;
      display: -webkit-flex; /* Safari */
      padding: 0 15px;
      flex-direction: row;
      margin: 52px 0;
      .trt4redsafdsffdf {
        width: 80%;
        flex-direction: row;
        display: flex;
        display: -webkit-flex; /* Safari */
        align-items: center;
        height: 80px;
        position: relative;
        .a8534u9rtiewohds {
          width: 80px;
          height: 80px;
          display: flex;
          display: -webkit-flex; /* Safari */
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #137F9D;
          background: rgba(30, 135, 240, 0.10);
          font-size: 14px;
          color: #000A12;
        }
        .a8534u9rtiesdfds {
          font-size: 20px;
          color: #000A12;
          margin-left: 20%;
        }
        .a853fsdffiesdfds {
          color: #137F9D;
          font-size: 20px;
          margin-left: 20%;
        }
      }
      .dfdfffff23rwt5y4 {
        width: 20%;
        color: #232425;
        font-size: 20px;
        align-items: center;
        display: flex;
        display: -webkit-flex; /* Safari */
        justify-content: flex-end;
        padding-right: 15px;
      }
    }
    .progress-wrap {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      position: relative;
      .progress-content {
        width: 70%;
        align-items: center;
        justify-content: center;
        display: flex;
        display: -webkit-flex; /* Safari */
      }
      .progress-item {
        width: 30%;
        align-items: center;
        justify-content: flex-start;
        display: flex;
        display: -webkit-flex; /* Safari */
        line-height: 28px;
      }
    }
    .weather-chart-wrap {
      width: 100%;
      margin-top: 15px;
      .weather-chart {
        width: 100%;
        background-color: #fff;
        border-radius: 4px;
      }
    }
  }
</style>

