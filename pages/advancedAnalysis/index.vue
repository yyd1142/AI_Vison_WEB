<template>
  <div>
    <RootPage :language="language" default-active="3-1" :default-openeds="['3']">
      <div class="AdvancedAnalysis" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.DestinationRegions[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.DestinationRegionsInput[language]">
                  <el-option :label="item.label"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-center">
            <MyFormCell :lable="languageDatas.Store[language]">
              <div slot="cell">
                <el-select v-model="form.sid" :placeholder="languageDatas.StoreInput[language]">
                  <el-option :label="item.label"
                             :value="item.value"
                             v-for="item, index in storeDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.CoreIndicator[language]">
              <div slot="cell">
                <el-select v-model="form.coreIndicator" :placeholder="languageDatas.CoreIndicatorInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in CoreIndicatorDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item">
            <MyFormCell :lable="languageDatas.ComparisonType[language]">
              <div slot="cell">
                <el-select v-model="form.type" :placeholder="languageDatas.ComparisonTypeInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in ComparisonTypeDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-center">
            <MyFormCell :lable="languageDatas.Date[language]" v-if="form.type <= 2">
              <div slot="cell">
                <el-date-picker
                  v-model="form.date"
                  type="daterange"
                  range-separator="-"
                  :editable="false"
                  :start-placeholder="languageDatas.startSate[language]"
                  :end-placeholder="languageDatas.endSate[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
            <MyFormCell :lable="languageDatas.Date[language]" v-if="form.type == 3">
              <div slot="cell">
                <el-date-picker
                  v-model="form.week"
                  type="week"
                  :format="languageDatas.weekFormat2[language]"
                  :placeholder="languageDatas.WeekInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
            <MyFormCell :lable="languageDatas.Date[language]" v-if="form.type == 4">
              <div slot="cell">
                <el-date-picker
                  v-model="form.month"
                  type="month"
                  :placeholder="languageDatas.MonthInput[language]">
                </el-date-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.ComparisonDate[language]" v-if="form.type == 2">
              <div slot="cell">
                <el-date-picker
                  v-model="form.comparisonDate"
                  type="daterange"
                  range-separator="-"
                  :editable="false"
                  :start-placeholder="languageDatas.startSate[language]"
                  :end-placeholder="languageDatas.endSate[language]"
                  :disabled="!form.date ? true : false"
                  @change="handlerComparisonDate">
                </el-date-picker>
              </div>
            </MyFormCell>
            <MyFormCell :lable="languageDatas.ComparisonDate[language]" v-if="form.type == 3">
              <div slot="cell">
                <el-date-picker
                  v-model="form.comparisonWeek"
                  type="week"
                  :format="languageDatas.weekFormat2[language]"
                  :disabled="!form.week ? true : false"
                  :placeholder="languageDatas.WeekInput[language]"
                  @change="handlerComparisonWeek">
                </el-date-picker>
              </div>
            </MyFormCell>
             <MyFormCell :lable="languageDatas.ComparisonDate[language]" v-if="form.type == 4">
              <div slot="cell">
                <el-date-picker
                  v-model="form.comparisonMonth"
                  type="month"
                  :disabled="!form.month ? true : false"
                  :placeholder="languageDatas.MonthInput[language]"
                  @change="handlerComparisonMonth">
                </el-date-picker>
              </div>
            </MyFormCell>
          </div>
        </div>
        <TitleCell :title="`${languageDatas.DataAnalysisChart[language]}`" :inLink="true"></TitleCell>
        <div class="DataAnalysisChart my-box-shadow">
          <div id="DataAnalysisChart" class="chart-wrap" style="width: 100%; height: 500px;"></div>
        </div>
        <TitleCell :title="`${languageDatas.DataRecord[language]}`" :inLink="true" :buttonText="`${languageDatas.Export[language]}`"></TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Sales[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PassengerFlowDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"
                                :value="`${languageDatas.Sales[language]}：${item.value} <br> ${languageDatas.NumberOfStores1[language]}：${item.value} <br> ${languageDatas.NumberOfReceptions[language]}：${item.value}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.Volume[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${languageDatas.TurnoverRate[language]}：${item.male}<br>${languageDatas.JointRate[language]}：${item.female}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.CustomerPrice[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${item.male}`"></DataDetailCell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script src="@js/advancedAnalysis.js"></script>

<style lang="less" src="@style/advancedAnalysis.less"></style>
