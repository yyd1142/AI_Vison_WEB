import api from "@plugins/api";
import axios from "axios";
const jsonp = require("jsonp");

export default {
    name: "Test",
    computed: {
        languageDatas() {
            return this.$store.getters.languageDatas;
        }
    },
    async asyncData(ctx) {
        const language = ctx.query.language || "en";
        return {
            language: language
        };
    },
    mounted() {
        this.test();
    },
    methods: {
        test() {
            const params = `/11/people-counts?range=${7}&groupby=day`;
            api.getPeoPleCountById(params).then(res => {
                console.log(res)
            });
        }
    }
};