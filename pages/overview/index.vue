<template>
  <div>
    <RootPage :language="language" default-active="1-1" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">
        <div class="form-cell">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item :label="languageDatas.Area[language]">
              <el-select v-model="form.store" :placeholder="languageDatas.areaInput[language]">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="languageDatas.AreaAcount[language]">
              <el-input v-model="form.name" :placeholder="languageDatas.areaAcountInput[language]"></el-input>
            </el-form-item>
          </el-form>
          <div class="button-group">
            <el-button-group>
              <el-button :type="item.type" v-for="(item, index) of buttonDatas" :key="index"
                         @click="chooseDays(item, index)">{{languageDatas[item.title][language]}}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <TitleCell :title="languageDatas.AreaTotalOverview[language]" :inLink="true"></TitleCell>
        <div class="area-total-overview my-box-shadow">
          <div class="area-button-group">
            <el-button-group>
              <el-button type="" icon="el-icon-arrow-left" @click="previousTypeBtn()"></el-button>
              <el-button type="">{{typeDatas[typeIndex]}}</el-button>
              <el-button type="" icon="el-icon-arrow-right" @click="nextTypeBtn()"></el-button>
            </el-button-group>
          </div>
          <div id="AreaTotalOverview" class="chart-wrap" style="width: 100%; height: 500px;"></div>
        </div>
        <TitleCell
          :title="`${languageDatas.RegionalTOPList[language]} ${languageDatas.And[language]} ${languageDatas.PassengerFlowAnalysis[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="top-list-and-passenger-flow">
          <div class="top-list-wrap">
            <div id="TopListChart" class="chart-wrap my-box-shadow" style="width: 100%; height: 500px;"></div>
          </div>
          <div class="passenger-flow-wrap">
            <div id="PassengerFlowChart" class="chart-wrap my-box-shadow" style="width: 100%; height: 500px;"></div>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";
  import {TitleCell} from "@components/index.js";

  export default {
    components: {
      RootPage,
      TitleCell
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
          store: ''
        },
        typeIndex: 0,
        typeDatas: []
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
      this.topListChart();
      this.passengerFlowChart();
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
      topListChart() {
        const chart = echarts.init(document.getElementById('TopListChart'));
        const option = {
          title: {
            text: `${this.languageDatas.RegionalTOPList[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#53A8E2'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '15',
            right: '15',
            bottom: '15',
            containLabel: true,
            top: '100'
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['A区', 'B区', 'C区', 'D区', 'E区', 'F区', 'G区']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [140, 230, 290, 108, 230, 290, 230]
            },
          ]
        };
        chart.setOption(option);
      },
      passengerFlowChart() {
        const chart = echarts.init(document.getElementById('PassengerFlowChart'));
        const option = {
          title: {
            text: `${this.languageDatas.PassengerFlowAnalysis[this.language]}`,
            padding: [30, 0, 0, 15]
          },
          color: ['#76DDFB', '#2C82BE'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [`${this.languageDatas.NumberOfStores[this.language]}`, `${this.languageDatas.Sales[this.language]}（元）`],
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
              `${this.languageDatas.Mon[this.language]}`,
              `${this.languageDatas.Tue[this.language]}`,
              `${this.languageDatas.Wed[this.language]}`,
              `${this.languageDatas.Thu[this.language]}`,
              `${this.languageDatas.Fry[this.language]}`,
              `${this.languageDatas.Sat[this.language]}`,
              `${this.languageDatas.Sun[this.language]}`
            ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: `${this.languageDatas.NumberOfStores[this.language]}`,
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: `${this.languageDatas.Sales[this.language]}（元）`,
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
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
      .el-form {
        width: 20%;
        display: flex;
        display: -webkit-flex; /* Safari */
        .el-form-item {
          margin-bottom: 0;
          width: 235px;
          text-align: left;
        }
      }
      .button-group {
        display: flex;
        display: -webkit-flex; /* Safari */
        width: 80%;
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
      .area-button-group {
        position: absolute;
        z-index: 20;
        top: 30px;
        right: 15px;
      }
    }
    .top-list-and-passenger-flow {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      margin: 15px 0;
      .top-list-wrap {
        width: 40%;
        padding: 0 15px 0 0;
      }
      .passenger-flow-wrap {
        width: 60%;
        padding: 0 0 0 15px;
      }
    }
  }
</style>

