import { LoginHeader } from '@components';
import RootPage from "@pages/index.vue";
import api from '@plugins/api';

export default {
    name: "login",
    components: {
        LoginHeader,
        RootPage
    },
    computed: {
        languageDatas() {
            return this.$store.getters.languageDatas;
        },
        rules() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            return {
                name: [
                    { message: `${languageDatas.userNameInput[language]}`, trigger: 'blur', required: true },
                ],
                password: [
                    { message: `${languageDatas.passwordInput[language]}`, trigger: 'blur', required: true },
                ]
            }
        }
    },
    async asyncData(ctx) {
        const language = ctx.query.language || 'en';
        return {
            language: language,
            ruleForm: {
                name: '',
                password: '',
                rememberPwd: false
            },
        };
    },
    mounted() {

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        login() {
            const languageDatas = this.languageDatas;
            const language = this.language;
            if (this.ruleForm.name != 'admin') {
                this.$message({ message: `${languageDatas.errorLoginMessage[language]}`, type: 'warning' });
                return false;
            }
            if (this.ruleForm.password != '123456') {
                this.$message({ message: `${languageDatas.errorLoginMessage[language]}`, type: 'warning' });
                return false;
            }
            const params = {
                name: this.ruleForm.name
            }
            api.login(params).then(res => {
                const resonse = res.datas;
                if(resonse && resonse.code === 0) {
                    location.href = `/overview?language=${language}`;
                } else {
                    this.$message({ message: `Login failed!`, type: 'warning' });
                }
            })
        }
    }
}