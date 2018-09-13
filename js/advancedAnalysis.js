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
        },
        ComparisonTypeDatas() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const datas = [
                {
                    lable: `${languageDatas.NoComparison[language]}`,
                    value: 1
                },
                {
                    lable: `${languageDatas.DailyComparison[language]}`,
                    value: 2
                },
                {
                    lable: `${languageDatas.WeeklyComparison[language]}`,
                    value: 3
                },
                {
                    lable: `${languageDatas.MonthlyComparison[language]}`,
                    value: 4
                }
            ];
            return datas;
        },
        CoreIndicatorDatas() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const datas = [
                {
                    lable: `${languageDatas.Sales[language]}`,
                    value: 1
                },
                {
                    lable: `${languageDatas.NumberOfStores1[language]}`,
                    value: 2
                },
                {
                    lable: `${languageDatas.TurnoverRate[language]}`,
                    value: 3
                },
                {
                    lable: `${languageDatas.JointRate[language]}`,
                    value: 4
                },
                {
                    lable: `${languageDatas.CustomerPrice[language]}`,
                    value: 5
                },
                {
                    lable: `${languageDatas.NumberOfReceptions[language]}`,
                    value: 6
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
                comparisonDate: '',
                area: '',
                sid: '',
                type: 1,
                coreIndicator: 1,
                week: '',
                comparisonWeek: '',
                month: '',
                comparisonMonth: ''
            },
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
            ],
            optionDatas: [],
            storeDatas: [],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.setInitDate();
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
                    this.optionDatas = datas;
                    this.form['area'] = this.optionDatas[0].id;
                    this.$nextTick(() => {
                        this.getAllStore();
                    })
                } else {
                    this.optionDatas = [];
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
                    this.form['sid'] = this.storeDatas[0].id;
                    this.$nextTick(() => {
                        this.setChartDatasFormat();
                    })
                } else {
                    this.storeDatas = [];
                }
            })
        },
        initChart1(xAxisDatas, seriesDatas) {
            const languageDatas = this.languageDatas;
            const language = this.language;
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
                    data: [`${languageDatas.Sales[language]}`, `${languageDatas.ComparisonSales[language]}`]
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
                        axisTick: { show: false },
                        data: xAxisDatas
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: seriesDatas
            };
            chart.setOption(option);
        },
        setInitDate() {
            let toDay = new Date();
            let last_7Day = new Date(toDay.getTime() - 7 * 24 * 3600 * 1000);
            this.form['date'] = [last_7Day, toDay];
        },
        handlerComparisonDate(e) {
            const startDate = this.form.date[0];
            const endDate = this.form.date[1];
            const dayCount = dateDifference(startDate, endDate);
            this.$nextTick(() => {
                if (e) {
                    const day = e[0];
                    const _day = new Date(day.getTime() + dayCount * 24 * 3600 * 1000);
                    this.form['comparisonDate'] = [day, _day];
                    this.setChartDatasFormat();
                }
            })
        },
        handlerComparisonWeek(e) {
            if (e) {
                this.setChartDatasFormat();
            }
        },
        handlerComparisonMonth(e) {
            if (e) {
                this.setChartDatasFormat();
            }
        },
        setChartDatasFormat() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const type = this.form.type;
            const startDate = this.form.date[0];
            const endDate = this.form.date[1];
            const dayCount = dateDifference(startDate, endDate);
            let comparisonStartDate = '';
            let comparisonEndDate = '';
            if (this.form.comparisonDate) {
                comparisonStartDate = this.form.comparisonDate[0];
                comparisonEndDate = this.form.comparisonDate[1];
            }

            let xAxisDatas = [];
            for (let i = 0; i <= dayCount; i++) {
                let date = '';
                let _startDate = moment(new Date(startDate.getTime() + i * 24 * 3600 * 1000)).format('YYYY-MM-DD');
                if (type === 1) {
                    date = _startDate;
                } else if (type === 2) {
                    date = `${_startDate} \n vs \n ${moment(new Date(comparisonStartDate.getTime() + i * 24 * 3600 * 1000)).format('YYYY-MM-DD')}`;
                }
                xAxisDatas.push(date);
            }
            let seriesDatas = [
                {
                    name: `${languageDatas.Sales[language]}`,
                    type: 'bar',
                    barGap: 0,
                    data: [320, 332, 301, 334, 390, 332, 301, 301]
                },
            ]
            if (type === 2) {
                seriesDatas = [
                    {
                        name: `${languageDatas.Sales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [320, 332, 301, 334, 390, 332, 301, 301]
                    },
                    {
                        name: `${languageDatas.ComparisonSales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [234, 756, 343, 423, 342, 223, 233, 56]
                    },
                ]
            } else if (type === 3) {
                let comparisonWeek = this.form.comparisonWeek;
                let week = this.form.week;
                xAxisDatas = [`${moment(week).format(`${languageDatas.weekFormat[language]}`)} \n vs \n ${moment(comparisonWeek).format(`${languageDatas.weekFormat[language]}`)}`]
                if(language === 'en') {

                    xAxisDatas = [`Week ${moment(week).format('WW')} of ${moment(week).format('YYYY')} \n vs \n Week ${moment(comparisonWeek).format('WW')} of ${moment(comparisonWeek).format('YYYY')}`]
                }
                seriesDatas = [
                    {
                        name: `${languageDatas.Sales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [320]
                    },
                    {
                        name: `${languageDatas.ComparisonSales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [234]
                    },
                ]
            } else if (type === 4) {
                let comparisonMonth = this.form.comparisonMonth;
                let month = this.form.month;
                xAxisDatas = [`${moment(month).format(`YYYY-MM`)} \n vs \n ${moment(comparisonMonth).format(`YYYY-MM`)}`]
                seriesDatas = [
                    {
                        name: `${languageDatas.Sales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [456]
                    },
                    {
                        name: `${languageDatas.ComparisonSales[language]}`,
                        type: 'bar',
                        barGap: 0,
                        data: [234]
                    },
                ]
            }
            this.initChart1(xAxisDatas, seriesDatas)
        },
    }
}