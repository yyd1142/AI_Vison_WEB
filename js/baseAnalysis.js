import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell, DataDetailCell, DataDetailTitle } from "@components";
import api from '@plugins/api';
import JSONToExcelConvertor from '@plugins/JSONToExcelConvertor';
import { titleLanguageFilter } from '@filters';
import moment from 'moment';

export default {
    name: "baseAnalysis",
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
                cycle: 2,
                store: 1,

                area: '',
                sid: '',
                range: 7
            },
            optionDatas: [],
            storeDatas: [],
            PassengerFlowDatas: [],
            PersonDatas: [],
            AgeDatas: [],
            peoPleCountByStoreInRegionDatas: {},
            AllPeoPleCountInRegionDatas: [],
            dialogVisible: false,
            exportDatas: []
        }
    },
    mounted() {
        this.$nextTick(() => {
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
                        this.getAllPeoPleCountInRegion();
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
                        this.getPeoPleCountByStoreInRegion();
                    })
                } else {
                    this.storeDatas = [];
                }
            })
        },
        getPeoPleCountByStoreInRegion() {
            api.getPeoPleCountByStoreInRegion({
                id: this.form.area,
                sid: this.form.sid,
                range: this.form.range,
                groupby: 'day'
            }).then(res => {
                if (res.code === 0) {
                    const data = res.data;
                    this.peoPleCountByStoreInRegionDatas = data;
                    this.$nextTick(() => {
                        this.initChart1();
                        this.initChart2();
                    })
                }
            })
        },
        initChart1() {
            const chart = echarts.init(document.getElementById('chart1'));
            const data = this.peoPleCountByStoreInRegionDatas;
            const peopleCounts = data.peopleCounts;
            let maleDatas = [];
            let femaleDatas = [];
            for (let item of peopleCounts) {
                maleDatas.push(item.genderCount.male);
                femaleDatas.push(item.genderCount.female);
            }

            const option = {
                title: {
                    text: `${this.languageDatas.MaleToFemaleRatio[this.language]}`,
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
                            { value: eval(maleDatas.join('+')), name: `${this.languageDatas.Male[this.language]}` },
                            { value: eval(femaleDatas.join('+')), name: `${this.languageDatas.Female[this.language]}` },
                        ]
                    }
                ]
            };
            chart.setOption(option);
        },
        initChart2() {
            const chart = echarts.init(document.getElementById('chart2'));
            const data = this.peoPleCountByStoreInRegionDatas;
            const peopleCounts = data.peopleCounts;

            let type1Datas = [];
            let type2Datas = [];
            let type3Datas = [];
            let type4Datas = [];
            let type5Datas = [];
            for (let item of peopleCounts) {
                type1Datas.push(item.ageCount.type1);
                type2Datas.push(item.ageCount.type2);
                type3Datas.push(item.ageCount.type3);
                type4Datas.push(item.ageCount.type4);
                type5Datas.push(item.ageCount.type5);
            }
            const option = {
                title: {
                    text: `${this.languageDatas.AgeDistribution[this.language]}`,
                    padding: [30, 0, 0, 15]
                },
                color: ['#4db960', '#1dc3ea', '#2f2f52', '#a7321e', '#cf9236'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    right: '20',
                    top: '20',
                    data: [`0-20`, `21-30`, `31-40`, `41-50`, `50+`]
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
                            { value: eval(type1Datas.join('+')), name: `0-20` },
                            { value: eval(type2Datas.join('+')), name: `21-30` },
                            { value: eval(type3Datas.join('+')), name: `31-40` },
                            { value: eval(type4Datas.join('+')), name: `41-50` },
                            { value: eval(type5Datas.join('+')), name: `50+` },
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
                            { value: 335, name: `${this.languageDatas.Male[this.language]}` },
                            { value: 310, name: `${this.languageDatas.Female[this.language]}` },
                        ]
                    }
                ]
            };
            chart.setOption(option);
        },


        getAllPeoPleCountInRegion() {
            api.getAllPeoPleCountInRegion({
                id: this.form.area,
                range: this.form.range,
                groupby: 'day'
            }).then(res => {
                if (res.code === 0) {
                    const datas = res.datas;
                    const language = this.language;
                    let PassengerFlowDatas = [];
                    let PersonDatas = [];
                    let AgeDatas = [];
                    for (let item of datas) {
                        const peopleCounts = item.peopleCounts;
                        const title = titleLanguageFilter(item, language);

                        let trackCount = [];
                        let maleCount = [];
                        let femaleCount = [];
                        let type1Datas = [];
                        let type2Datas = [];
                        let type3Datas = [];
                        let type4Datas = [];
                        let type5Datas = [];
                        for (let j of peopleCounts) {
                            trackCount.push(j.trackCount.totalEnter);
                            maleCount.push(j.genderCount.male);
                            femaleCount.push(j.genderCount.female);
                            type1Datas.push(j.ageCount.type1);
                            type2Datas.push(j.ageCount.type2);
                            type3Datas.push(j.ageCount.type3);
                            type4Datas.push(j.ageCount.type4);
                            type5Datas.push(j.ageCount.type5);
                        }
                        maleCount = eval(maleCount.join('+'));
                        femaleCount = eval(femaleCount.join('+'));
                        type1Datas = eval(type1Datas.join('+'));
                        type2Datas = eval(type2Datas.join('+'));
                        type3Datas = eval(type3Datas.join('+'));
                        type4Datas = eval(type4Datas.join('+'));
                        type5Datas = eval(type5Datas.join('+'));
                        const typeSum = type1Datas + type2Datas + type3Datas + type4Datas + type5Datas;
                        PassengerFlowDatas.push({
                            title: title,
                            value: eval(trackCount.join('+')),
                            label: '最近7天'
                        });
                        PersonDatas.push({
                            title: title,
                            male: `${(maleCount / (maleCount + femaleCount) * 100).toFixed(2)}%`,
                            female: `${(femaleCount / (maleCount + femaleCount) * 100).toFixed(2)}%`,
                            label: '最近7天'
                        });
                        AgeDatas.push({
                            title: title,
                            label: '最近7天',
                            type1: `${(type1Datas / typeSum * 100).toFixed(2)}%`,
                            type2: `${(type2Datas / typeSum * 100).toFixed(2)}%`,
                            type3: `${(type3Datas / typeSum * 100).toFixed(2)}%`,
                            type4: `${(type4Datas / typeSum * 100).toFixed(2)}%`,
                            type5: `${(type5Datas / typeSum * 100).toFixed(2)}%`,
                        })
                    }
                    this.AllPeoPleCountInRegionDatas = datas;
                    this.PassengerFlowDatas = PassengerFlowDatas;
                    this.PersonDatas = PersonDatas;
                    this.AgeDatas = AgeDatas;
                }
            })
        },
        exportFile() {
            const datas = this.AllPeoPleCountInRegionDatas;
            const language = this.language;
            const languageDatas = this.languageDatas;
            let exportDatas = [];
            for (let item of datas) {
                const peopleCounts = item.peopleCounts;
                let _datas = [];
                for (let j of peopleCounts) {
                    _datas.push({
                        id: item.id,
                        title: titleLanguageFilter(item, language),
                        date: moment.unix(j.timestamp).format('YYYY-MM-DD'),
                        trackCount: `${languageDatas.NumberOfStores1[language]}：${j.trackCount.totalEnter}； \n  ${languageDatas.NumberOfExitStore[language]}： ${j.trackCount.totalExit}；`,
                        genderCount: `${languageDatas.Male[language]}: ${j.genderCount.male};  \n ${languageDatas.Female[language]}: ${j.genderCount.female}`,
                        ageCount: `0-20: ${j.ageCount.type1}; \n 21-30: ${j.ageCount.type2}; \n 31-40: ${j.ageCount.type3};  \n 41-50: ${j.ageCount.type4}; \n 50+: ${j.ageCount.type5}`
                    });
                }
                exportDatas.push({
                    title: titleLanguageFilter(item, language),
                    datas: _datas
                });
            }
            this.exportDatas = exportDatas;
            this.dialogVisible = true;
        },
        doExportFile(item) {
            const exportDatas = item.datas;
            const language = this.language;
            const languageDatas = this.languageDatas;
            //自定义标题栏
            var title = [
                `${languageDatas.Store[language]}`,
                `${languageDatas.Date[language]}`,
                `${languageDatas.PassengerFlowToday[language]}`,
                `${languageDatas.MaleToFemaleRatio[language]}`,
                `${languageDatas.AgeDistribution[language]}`]
            //自定义过滤栏（不需要导出的行）
            var filter = ['id'];
            JSONToExcelConvertor(exportDatas, `${item.title}_${languageDatas.DataDetail[language]}`, title, filter);
            this.dialogVisible = false;
        },
        handleClose() {
            this.dialogVisible = false;
        }
    }
}