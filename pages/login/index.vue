<template>
    <RootPage :loginPage="true">
        <div class="login-page-wrap" slot="page">
            <div class="header-wrap">
                <LoginHeader :languageDatas="languageDatas" :language="language"></LoginHeader>
            </div>
            <div class="content-wrap">
                <div class="login-wrap my-box-shadow">
                    <div class="name">AIVision</div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                        <el-form-item prop="name">
                            <el-input :placeholder="languageDatas.userNameInput[language]" prefix-icon="iconfont icon-user"
                                    v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input :placeholder="languageDatas.passwordInput[language]" prefix-icon="iconfont icon-jiesuo"
                                    type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox v-model="ruleForm.rememberPwd">{{languageDatas.rememberPwd[language]}}</el-checkbox>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 100%;" type="primary" @click="submitForm('ruleForm')">
                                {{languageDatas.Login[language]}}
                            </el-button>
                        </el-form-item>
                    </el-form>
                    <!-- <div class="forgot-password-wrap">
                        <span>{{languageDatas.ForgotPwd[language]}} ?</span>
                    </div> -->
                </div>
            </div>
        </div>
    </RootPage>
</template>

<script src="@js/login.js"></script>

<style lang="less" src="@style/login.less"></style>
