import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell } from "@components";
import moment from 'moment';
import api from '@plugins/api';
import { titleLanguageFilter } from '@filters';

const getPeoPleCountByStoreInRegion = (form, cb) => {
    api.getPeoPleCountByStoreInRegion({
        id: form.area,
        sid: form.sid,
        range: form.range,
        groupby: 'day'
    }).then(res => {
        cb(res)
    })
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
        const regionsId = ctx.query.regionsId || '101';
        return {
            language: language,
            buttonDatas: [{
                title: 'Yesterday',
                type: ''
            }, {
                title: 'Last_7_days',
                type: 'primary'
            }, {
                title: 'Last_30_days',
                type: ''
            }],
            form: {
                area: regionsId,
                sid: '',
                range: ''
            },
            typeIndex: 0,
            typeDatas: [],
            optionDatas: []
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
            this.getAllStore();
            this.weatherChart();
            this.DailyMarketingAmountChart();
            this.AccumulatedSalesChart();
        });
    },
    methods: {
        getAllStore() {
            api.getAllStore({
                id: this.form.area
            }).then(res => {
                if (res.code === 0) {
                    const language = this.language;
                    const datas = res.datas.map(item => {
                        item.value = item.id;
                        item.label = titleLanguageFilter(item, language);
                        return item;
                    })
                    this.optionDatas = datas;
                    this.form['sid'] = this.optionDatas[0].id;
                    this.$nextTick(() => {
                        this.initChart();
                    })
                } else {
                    this.optionDatas = [];
                }
            })
        },
        initChart() {
            getPeoPleCountByStoreInRegion(this.form, (res) => {
                if (res.code === 0) {
                    const chart = echarts.init(document.getElementById('AreaTotalOverview'));
                    const data = res.data;
                    let peopleCounts = data.peopleCounts;
                    let days = [];
                    let datas = [];
                    for (let item of peopleCounts) {
                        item.timestamp = moment.unix(item.timestamp).format('YYYY-MM-DD');
                        days.push(item.timestamp);
                        datas.push(item.trackCount.totalEnter);
                    }
                    days.reverse();
                    datas.reverse();
                    const option = {
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
                                data: days,
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
                                data: datas
                            }
                        ]
                    };
                    chart.setOption(option);
                }
            });
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
        },
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
        },
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
        },
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
        },

        DailyMarketingAmountChart() {
            const chart = echarts.init(document.getElementById('DailyMarketingAmount'));
            const languageDatas = this.languageDatas;
            const language = this.language;
            const legend1 = `${languageDatas.DailyIndicator[language]}`;
            const legend2 = `${languageDatas.DailyMarketingAmount[language]}`;
            const option = {
                color: ['#35abf5', '#f9c941'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: [legend1, legend2],
                    right: 15,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: [``]
                },
                series: [
                    {
                        name: legend1,
                        type: 'bar',
                        data: [18203]
                    },
                    {
                        name: legend2,
                        type: 'bar',
                        data: [19325]
                    }
                ]
            };
            chart.setOption(option);
        },
        AccumulatedSalesChart() {
            const chart = echarts.init(document.getElementById('AccumulatedSales'));
            const languageDatas = this.languageDatas;
            const language = this.language;
            const legend1 = `${languageDatas.MonthlyIndicator[language]}`;
            const legend2 = `${languageDatas.AccumulatedSales[language]}`;
            const option = {
                color: ['#35abf5', '#f9c941'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: [legend1, legend2],
                    right: 15,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: [``]
                },
                series: [
                    {
                        name: legend1,
                        type: 'bar',
                        data: [18203]
                    },
                    {
                        name: legend2,
                        type: 'bar',
                        data: [19325]
                    }
                ]
            };
            chart.setOption(option);
        },
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
        },
        chooseDays(item, index) {
            for (let [k, i] of this.buttonDatas.entries()) {
                if (k === index) {
                    i.type = 'primary';
                } else {
                    i.type = '';
                }
            }
            this.form['range'] = item.value;
        },
    }
};