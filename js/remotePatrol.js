import RootPage from "@pages/index.vue";
import { TitleCell, MyFormCell, VideoPlayer } from "@components";
import api from '@plugins/api';
import { titleLanguageFilter } from '@filters';

export default {
    name: "RemotePatrol",
    components: {
        RootPage,
        TitleCell,
        MyFormCell,
        VideoPlayer
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
            form: {
                area: '',
                sid: '',
            },
            optionDatas: [],
            storeDatas: [],
            videoDatas: [{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo1.jpg"
            },{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo2.jpg"
            },{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo3.jpg"
            },{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo4.jpg"
            },{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo5.jpg"
            },{
                // videojs and plugin options
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                }],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                poster: "/demo6.jpg"
            }],
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
                    })
                } else {
                    this.optionDatas = [];
                }
            }).catch(err => {
                console.log(err);
            })
        },
        getAllStore() {
            const params = `/${this.form.area}/stores`;
            api.getAllStore(params).then(res => {
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

                    })
                } else {
                    this.storeDatas = [];
                }
            })
        },
        search() {

        },
    }
}