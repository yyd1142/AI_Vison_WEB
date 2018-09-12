import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell, DataDetailTitle, DataDetailCell } from "@components";
import api from '@plugins/api';
import { titleLanguageFilter } from '@filters';

export default {
    name: "Report",
    components: {
        RootPage,
        TitleCell,
        MyFormCell,
        DataDetailTitle,
        DataDetailCell
    },
    computed: {
        languageDatas() {
            return this.$store.getters.languageDatas;
        },
        typeOptionDatas() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const datas = [{
                lable: `${languageDatas.dailyReport[language]}`, value: 1
            }, {
                lable: `${languageDatas.weeklyReport[language]}`, value: 2
            }, {
                lable: `${languageDatas.monthlyReport[language]}`, value: 3
            }]
            return datas;
        },
        sortDatas() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const datas = [
                {
                    name: `${languageDatas.DailyIndicator[language]}`,
                    value: '1'
                },
                {
                    name: `${languageDatas.ReachedDaily[language]}`,
                    value: '1'
                },
                {
                    name: `${languageDatas.DailySales[language]}`,
                    value: '1'
                },
                {
                    name: `${languageDatas.Year_on_yearSales[language]}`,
                    value: '1'
                },
                {
                    name: `${languageDatas.Year_on_yearIncrease[language]}`,
                    value: '1'
                },
            ]
            return datas;
        },
        salesDatas() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            const datas = [
                {
                    title: `${languageDatas.DailyIndicator[language]}`, label: '10'
                },
                {
                    title: `${languageDatas.ReachedDaily[language]}`, label: '4'
                },
                {
                    title: `${languageDatas.DailySales[language]}`, label: '10%'
                },
                {
                    title: `${languageDatas.Year_on_yearSales[language]}`, label: '11%'
                },
                {
                    title: `${languageDatas.Year_on_yearIncrease[language]}`, label: '10'
                },
            ]
            return datas;
        }
    },
    async asyncData(ctx) {
        const language = ctx.query.language || 'en';
        const regionsId = ctx.query.regionsId || '101';
        return {
            language: language,
            form: {
                area: regionsId,
                sid: '',

                date: '',
                type: 1
            },
            optionDatas: [],
            storeDatas: [
                {
                    title: '门店', label: '北京路广州路店'
                },
                {
                    title: '店长', label: '彭于晏'
                },
                {
                    title: '日期', label: '2018-09-08'
                },
                {
                    title: '天气', label: '多云转晴'
                }
            ],
            subForm: {
                date: '',
                name: '',
                desc: ''
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getAllStore();
        })
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
                        
                    })
                } else {
                    this.optionDatas = [];
                }
            })
        },
        search() {

        }
    }
}