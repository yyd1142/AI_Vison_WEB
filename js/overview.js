import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell } from "@components/index";
import api from '@plugins/api';
import moment from 'moment';
import { titleLanguageFilter } from '@filters';

const getPeoPleCountById = (form, cb) => {
    const params = `/${form.area}/people-counts?range=${form.range}&groupby=day`;
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
        buttonDatas() {
            const range = this.form.range;
            let datas = [{
                title: 'Yesterday',
                type: '',
                value: 1
            }, {
                title: 'Today',
                type: '',
                value: 0
            }, {
                title: 'Last_7_days',
                type: '',
                value: 7
            }, {
                title: 'Last_30_days',
                type: '',
                value: 30
            }];
            datas = datas.map(item => {
                if (item.value === range) {
                    item.type = 'primary';
                } else {
                    item.type = '';
                }
                return item;
            })
            return datas;
        }
    },
    async asyncData(ctx) {
        const language = ctx.query.language || 'en';
        const range = parseInt(ctx.query.range) || 0;
        return {
            language: language,
            form: {
                acount: '',
                area: '',
                range: range
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
                        item.label = titleLanguageFilter(item, language);
                        return item;
                    })
                    this.optionDatas = datas;
                    this.form['area'] = this.optionDatas[0].id;
                    localStorage.setItem('regionsId', this.form.area);
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
        },
        initChart() {
            getPeoPleCountById(this.form, (response) => {
                const chart = echarts.init(document.getElementById('AreaTotalOverview'));
                const data = response.datas;
                let peopleCounts = data.peopleCounts;
                let days = [];
                let datas = [];
                for (let item of peopleCounts) {
                    item.timestamp = moment.unix(item.timestamp).format('YYYY-MM-DD');
                    days.push(item.timestamp);
                    datas.push(item.trackCount.totalEnter);
                }
                this.peopleCountsDatas = peopleCounts;
                this.areaAcount = data.counts;
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
                this.passengerFlowChart(days, datas);
            });
        },
        topListChart() {
            api.getAllPeoPleCount({
                range: this.form.range,
                groupby: 'day'
            }).then(res => {
                if (res.code === 0) {
                    const language = this.language;
                    const datas = res.datas;
                    const chart = echarts.init(document.getElementById('TopListChart'));

                    let yAxisDatas = [];
                    let seriesDatas = [];
                    for (let item of datas) {
                        if (language === 'hk') {
                            item['title'] = item.titleZH;
                        } else if (language === 'cn') {
                            item['title'] = item.titleCN;
                        } else {
                            item['title'] = item.titleEN;
                        }

                        const peopleCounts = item.peopleCounts;
                        let totalEnterSum = [];
                        for (let j of peopleCounts) {
                            const trackCount = j.trackCount;
                            totalEnterSum.push(trackCount.totalEnter);
                        }
                        yAxisDatas.push(item.title);
                        seriesDatas.push(eval(totalEnterSum.join('+')));
                    }
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
                            data: yAxisDatas
                        },
                        series: [
                            {
                                name: `${this.languageDatas.PassengerFlow[this.language]}`,
                                type: 'bar',
                                data: seriesDatas
                            },
                        ]
                    };
                    chart.setOption(option);
                }
            });
        },
        passengerFlowChart(days, datas) {
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
                    data: days
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: `${this.languageDatas.NumberOfStores[this.language]}`,
                        type: 'line',
                        stack: '总量',
                        data: datas
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
            let path = `?language=${this.language}&range=${item.value}`;
            window.location.href = path;
        },
    }
};