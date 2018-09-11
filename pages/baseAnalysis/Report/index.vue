<template>
  <div>
    <RootPage :language="language" default-active="2-3" :default-openeds="['2']">
      <div class="Report" slot="page">
        <div class="form-cell">
          <div class="form-item left">
            <MyFormCell :lable="languageDatas.Store[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.StoreInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item center">
            <MyFormCell :lable="languageDatas.Date[language]">
              <div slot="cell">
                <el-date-picker
                  v-model="form.date"
                  type="date"
                  :placeholder="languageDatas.DateInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item right">
            <MyFormCell :lable="languageDatas.ReportType[language]">
              <div slot="cell">
                <el-select v-model="form.type" :placeholder="languageDatas.ReportTypeInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in typeOptionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
        </div>
        <TitleCell :title="languageDatas.ReportDetail[language]" :inLink="true" :buttonText="languageDatas.Export[language]"></TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.StoreInfo[language]}`"></DataDetailTitle>
              <div v-for="item, index in storeDatas" :key="index" :style="`background-color: ${index % 2 === 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Performance[language]}`" :menuDatas="sortDatas"></DataDetailTitle>
              <div v-for="item, index in salesDatas" :key="index" :style="`background-color: ${index % 2 === 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.DailyEvent[language]}`"></DataDetailTitle>
              <div class="detail-form">
                <el-form ref="subForm" :model="subForm" label-width="80px" label-position="top">
                  <el-form-item :label="languageDatas.EventDate[language]">
                    <el-date-picker
                      v-model="subForm.date"
                      type="date"
                      :placeholder="languageDatas.EventDateInput[language]" style="width: 100%;">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item :label="languageDatas.EventName[language]">
                    <el-input v-model="subForm.name" :placeholder="languageDatas.EventNameInput[language]"></el-input>
                  </el-form-item>
                  <el-form-item :label="languageDatas.EventDesc[language]">
                    <el-input v-model="subForm.desc" :placeholder="languageDatas.EventDescInput[language]"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" style="width: 100%;">{{languageDatas.Confirm[language]}}</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script src="@js/report.js"></script>
<style lang="less" src="@style/report.less"></style>
