<template>
  <div>
    <RootPage :language="language" default-active="1-1" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Area[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.areaInput[language]">
                  <el-option :label="item.label"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
            <div class="input-cell_">
              <MyFormCell :lable="languageDatas.AreaAcount[language]">
                <div slot="cell">
                  <el-input :value="areaAcount" disabled></el-input>
                </div>
              </MyFormCell>
            </div>
          </div>
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
          <el-tabs type="border-card" @tab-click="typeBtn">
            <el-tab-pane :label="languageDatas.PassengerFlow[language]">
              <div id="AreaTotalOverview" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.Sales[language]">
              <div id="Sales" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.TurnoverRate[language]">
              <div id="TurnoverRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.JointRate[language]">
              <div id="JointRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.CustomerPrice[language]">
              <div id="CustomerPrice" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <TitleCell
          :title="`${languageDatas.RegionalTOPList[language]} ${languageDatas.And[language]} ${languageDatas.PassengerFlowAnalysis[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="top-list-and-passenger-flow">
          <div class="top-list-wrap">
            <el-tabs type="border-card" @tab-click="typeBtn">
              <el-tab-pane :label="languageDatas.PassengerFlow[language]">
                <div id="TopListChart" style="width: 100%; height: 500px;"></div>
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.Sales[language]">
                <!--<div id="Sales" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.TurnoverRate[language]">
                <!--<div id="TurnoverRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.JointRate[language]">
                <!--<div id="JointRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.CustomerPrice[language]">
                <!--<div id="CustomerPrice" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
            </el-tabs>
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
  import {TitleCell, MyFormCell} from "@components/index";
  import api from '@plugins/api';
  import moment from 'moment';

  const getPeoPleCountById = (form, cb) => {
    const params = {
      id: form.area,
      range: form.range,
      groupby: 'day'
    }
    api.getPeoPleCountById(params).then(res => {
      cb(res)
    });
  }

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
      const language = ctx.query.language || 'en';
      return {
        language: language,
        buttonDatas: [{
          title: 'Yesterday',
          type: '',
          value: 1
        }, {
          title: 'Last_7_days',
          type: 'primary',
          value: 7
        }, {
          title: 'Last_30_days',
          type: '',
          value: 30
        }],
        form: {
          acount: '',
          area: '',
          range: 1
        },
        areaAcount: '',
        typeIndex: 0,
        typeDatas: [],
        optionDatas: [],
        peopleCountsDatas: []
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
      this.$nextTick(() => {
        this.getAllRegions();
        this.topListChart();
        this.passengerFlowChart();
      })

    },
    methods: {
      getAllRegions() {
        api.getAllRegions({}).then(res => {
          if (res.code === 0) {
            const language = this.language;
            let datas = res.datas.map(item => {
              item.value = item.id;
              if (language === 'hk') {
                item.label = item.titleZH;
              } else if (language === 'cn') {
                item.label = item.titleCN;
              } else {
                item.label = item.titleEN;
              }
              return item;
            })
            this.optionDatas = res.datas;
            this.form['area'] = this.optionDatas[0].id;
            this.$nextTick(() => {
              this.initChart();
              this.topListChart();
            })
          } else {
            this.optionDatas = [];
          }
        }).catch(err => {
          console.log(err);
        })
      }
      ,
      initChart() {
        const chart = echarts.init(document.getElementById('AreaTotalOverview'));
        getPeoPleCountById(this.form, (response) => {
          const data = response.data;
          let peopleCounts = data.peopleCounts;
          for (let item of peopleCounts) {
            item.timestamp = moment.unix(item.timestamp).format('YYYY-MM-DD')
          }
          this.peopleCountsDatas = peopleCounts;
          this.areaAcount = data.counts;
          let days = [];
          let datas = [];
          for (let item of this.peopleCountsDatas) {
            days.push(item.timestamp);
            datas.push(item.trackCount.totalEnter);
          }
          days.reverse();
          datas.reverse();
          const chartInit = (xAxis, series) => {
            const option = {
              color: ['#5151e0'],
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
                top: '15'
              },
              xAxis: [
                {
                  type: 'category',
                  data: xAxis,
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
                  data: series
                }
              ]
            };
            chart.setOption(option);
          }
          chartInit(days, datas);
        });
      },
      topListChart() {
        const chart = echarts.init(document.getElementById('TopListChart'));
        const option = {
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
            top: '15'
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
      }
      ,
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
            data: [`${this.languageDatas.NumberOfStores[this.language]}`, `${this.languageDatas.Sales[this.language]}（HK）`],
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
              `${this.languageDatas.Week[0][this.language]}`,
              `${this.languageDatas.Week[1][this.language]}`,
              `${this.languageDatas.Week[2][this.language]}`,
              `${this.languageDatas.Week[3][this.language]}`,
              `${this.languageDatas.Week[4][this.language]}`,
              `${this.languageDatas.Week[5][this.language]}`,
              `${this.languageDatas.Week[6][this.language]}`
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
              name: `${this.languageDatas.Sales[this.language]}（HK）`,
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };
        chart.setOption(option);
      }
      ,
      SalesChart() {
        const chart = echarts.init(document.getElementById('Sales'));
        const option = {
          // title: {
          //   text: `${this.languageDatas.PassengerFlowToday[this.language]}`,
          //   padding: [30, 0, 0, 15]
          // },
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
            top: '15'
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07'],
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
              name: `${this.languageDatas.Sales[this.language]}`,
              type: 'bar',
              barWidth: '60%',
              data: [200, 343, 777, 777, 343, 222, 220]
            }
          ]
        };
        chart.setOption(option);
      }
      ,
      TurnoverRateChart() {
        const chart = echarts.init(document.getElementById('TurnoverRate'));
        const option = {
          // title: {
          //   text: `${this.languageDatas.PassengerFlowToday[this.language]}`,
          //   padding: [30, 0, 0, 15]
          // },
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
            top: '15'
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07'],
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
              name: `${this.languageDatas.TurnoverRate[this.language]}`,
              type: 'bar',
              barWidth: '60%',
              data: [545, 545, 675, 330, 653, 111, 99]
            }
          ]
        };
        chart.setOption(option);
      }
      ,
      JointRateChart() {
        const chart = echarts.init(document.getElementById('JointRate'));
        const option = {
          // title: {
          //   text: `${this.languageDatas.PassengerFlowToday[this.language]}`,
          //   padding: [30, 0, 0, 15]
          // },
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
            top: '15'
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07'],
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
              name: `${this.languageDatas.JointRate[this.language]}`,
              type: 'bar',
              barWidth: '60%',
              data: [655, 356, 353, 143, 143, 645, 223]
            }
          ]
        };
        chart.setOption(option);
      }
      ,
      CustomerPriceChart() {
        const chart = echarts.init(document.getElementById('CustomerPrice'));
        const option = {
          // title: {
          //   text: `${this.languageDatas.PassengerFlowToday[this.language]}`,
          //   padding: [30, 0, 0, 15]
          // },
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
            top: '15'
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07'],
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
              name: `${this.languageDatas.CustomerPrice[this.language]}`,
              type: 'bar',
              barWidth: '60%',
              data: [223, 123, 423, 222, 566, 322, 220]
            }
          ]
        };
        chart.setOption(option);
      }
      ,
      typeBtn(e) {
        const index = parseInt(e.index);
        this.$nextTick(() => {
          if (index === 0) {
            this.initChart()
          } else if (index === 1) {
            this.SalesChart()
          } else if (index === 2) {
            this.TurnoverRateChart()
          } else if (index === 3) {
            this.JointRateChart()
          } else if (index === 4) {
            this.CustomerPriceChart()
          }
        })
      }
      ,
      chooseDays(item, index) {
        for (let [k, i] of this.buttonDatas.entries()) {
          if (k === index) {
            i.type = 'primary';
          } else {
            i.type = '';
          }
        }
        this.form['range'] = item.value;
        this.getPeoPleCountById();
      }
      ,
    }
  }
  ;
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
        width: 60%;
        display: flex;
        display: -webkit-flex; /* Safari */
        .input-cell_ {
          margin-left: 15px;
        }
      }
      .button-group {
        display: flex;
        display: -webkit-flex; /* Safari */
        width: 40%;
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

