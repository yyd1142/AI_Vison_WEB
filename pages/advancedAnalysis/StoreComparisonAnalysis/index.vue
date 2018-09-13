<template>
  <div>
    <RootPage :language="language" default-active="3-2" :default-openeds="['3']">
      <div class="StoreComparisonAnalysis" slot="page">
        <div class="form-cell">
          <div class="form-left">
            <div class="form-item">
            <MyFormCell :lable="languageDatas.Date[language]">
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
          </div>
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Area[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.areaInput[language]">
                  <el-option :label="item.label"
                             :value="item.value"
                             v-for="item, index in DestinationRegionsDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item ">
            <MyFormCell :lable="languageDatas.ContrastStore[language]">
              <div slot="cell">
                <el-select v-model="form.sid" multiple collapse-tags :placeholder="languageDatas.ContrastStoreInput[language]">
                  <el-option
                    v-for="item, index in storeDatas"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          </div>
          <div class="form-right">
            <el-button type="primary" style="width: 240px;" @click="search()">{{`${languageDatas.Search[language]}`}}</el-button>
          </div>
        </div>
        <TitleCell :title="`${languageDatas.DataAnalysisChart[language]}`" :inLink="true"></TitleCell>
        <div class="DataAnalysisChart my-box-shadow" v-for="item, index in chartCount" :key="index">
          <div :id="`DataAnalysisChart_${index}`" class="chart-wrap" style="width: 100%; height: 500px;"></div>
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

<script src="@js/storeComparisonAnalysis.js"></script>

<style lang="less" src="@style/storeComparisonAnalysis.less"></style>
