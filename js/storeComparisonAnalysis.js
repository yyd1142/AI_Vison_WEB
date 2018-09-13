import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell, DataDetailCell, DataDetailTitle } from "@components";
import api from '@plugins/api';
import JSONToExcelConvertor from '@plugins/JSONToExcelConvertor';
import { titleLanguageFilter, dateDifference } from '@filters';
import moment from 'moment';

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
        const language = ctx.query.language || 'en';
        return {
            language: language,
            form: {
                sid: '',
                date: [],
                area: '',
                store: '',
                type: '',
                coreIndicator: ''
            },
            chartCount: 1,
            DestinationRegionsDatas: [],
            storeDatas: [],
            PassengerFlowDatas: [
                {
                    title: '广州北京路店A',
                    value: '1',
                    label: '2018-09-09'
                }, {
                    title: '广州北京路店B',
                    value: '2',
                    label: '2018-09-09'
                }, {
                    title: '广州北京路店C',
                    value: '3',
                    label: '2018-09-09'
                }, {
                    title: '广州北京路店D',
                    value: '4',
                    label: '2018-09-09'
                }, {
                    title: '广州北京路店E',
                    value: '5',
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
        this.$nextTick(() => {
            const now = new Date();
            this.form.date[1] = now;
            this.form.date[0] = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
            this.getAllRegions();
        });
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
                    this.DestinationRegionsDatas = datas;
                    this.form['area'] = this.DestinationRegionsDatas[0].id;
                    this.$nextTick(() => {
                        this.getAllStore();
                    })
                } else {
                    this.DestinationRegionsDatas = [];
                }
            }).catch(err => {
                console.log(err);
            })
        },
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
                    this.storeDatas = datas;
                    this.form.sid = [this.storeDatas[0].id];
                    this.chartCount = 1;
                    this.$nextTick(() => {
                        for(let i = 0; i < this.chartCount; i++) {
                            this.initChart(`DataAnalysisChart_${i}`)
                        }
                    })
                } else {
                    this.storeDatas = [];
                }
            })
        },
        initChart(ele) {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const chart = echarts.init(document.getElementById(ele));
            const startDate = this.form.date[0];
            const endDate = this.form.date[1];
            const dayCount = dateDifference(startDate, endDate);
            let xAxisDatas = [];
            for (let i = 0; i < dayCount; i++) {
                let _startDate = moment(new Date(startDate.getTime() + i * 24 * 3600 * 1000)).format('YYYY-MM-DD');
                xAxisDatas.push(_startDate);
            }
            const option = {
                color: [
                    '#0395d3',
                    '#c93d38',
                    '#364e5f',
                    '#6caab1',
                    '#d98d70',
                    '#7fa98e',
                ],
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    right: 20,
                    top: 30,
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
                        boundaryGap: false,
                        data: xAxisDatas
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: `${languageDatas.Sales[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 301, 334]
                    },
                    {
                        name: `${languageDatas.NumberOfStores1[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 220, 182]
                    },
                    {
                        name: `${languageDatas.TurnoverRate[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 220, 182]
                    },
                    {
                        name: `${languageDatas.JointRate[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 301, 334]
                    },
                    {
                        name: `${languageDatas.CustomerPrice[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 191, 234]
                    },
                    {
                        name: `${languageDatas.NumberOfReceptions[language]}`,
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 182, 191]
                    },
                ]
            };
            chart.setOption(option);
        },
        search() {
            this.chartCount = this.form.sid.length;
            this.$nextTick(() => {
                for(let i = 0; i < this.chartCount; i++) {
                    this.initChart(`DataAnalysisChart_${i}`)
                }
            })
        }
    }
}