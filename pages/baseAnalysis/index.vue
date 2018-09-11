<template>
  <div>
    <RootPage :language="language" default-active="2-1" :default-openeds="['2']">
      <div class="baseAnalysis" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Date[language]">
              <div slot="cell">
                <el-date-picker v-model="form.date" type="date" :placeholder="languageDatas.DateInput[language]"></el-date-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-center">
            <MyFormCell :lable="languageDatas.Time[language]">
              <div slot="cell">
                <el-time-picker
                  v-model="form.time" :placeholder="languageDatas.TimeInput[language]">
                </el-time-picker>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item form-right">
            <MyFormCell :lable="languageDatas.Cycle[language]">
              <div slot="cell">
                <el-select v-model="form.cycle" :placeholder="languageDatas.CycleInput[language]">
                  <el-option :label="item.lable"
                             :value="item.value"
                             v-for="item, index in CycleOptionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Area[language]">
              <div slot="cell">
                <el-select v-model="form.area" :placeholder="languageDatas.areaInput[language]">
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
            <el-button class="form-button" type="primary">{{languageDatas.Search[language]}}</el-button>
          </div>
        </div>
        <TitleCell
          :title="`${languageDatas.PassengerFlowData[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="chart-wrap">
          <div class="chart-item chart-left">
            <div class="chart-padding my-box-shadow">
              <div id="chart1" style="width: 100%; height: 500px;"></div>
            </div>
          </div>
          <div class="chart-item chart-right">
            <div class="chart-padding my-box-shadow">
              <div id="chart2" style="width: 100%; height: 500px;"></div>
            </div>
          </div>
          <!--<div class="chart-item chart-right">-->
          <!--<div class="chart-padding my-box-shadow">-->
          <!--<div id="chart3" style="width: 100%; height: 500px;"></div>-->
          <!--</div>-->
          <!--</div>-->
        </div>
        <TitleCell
          :title="`${languageDatas.DataDetail[language]}`"
          :inLink="true"
          :buttonText="`${languageDatas.Export[language]}`" @onPress="exportFile">
        </TitleCell>
        <div class="data-detail-wrap">
          <div class="detail-item detail-left">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.NumberOfPassengers[language]}`"
                               :menuDatas="menuDatas"></DataDetailTitle>
              <div v-for="item, index in PassengerFlowDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell :title="item.title" :label="item.label"
                                :value="`${languageDatas.NumberOfPassengers[language]}：${item.value}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-center">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.MaleToFemaleRatio[language]}`"></DataDetailTitle>
              <div v-for="item, index in PersonDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`${languageDatas.Male[language]}：${item.male}<br>${languageDatas.Female[language]}：${item.female}`"></DataDetailCell>
              </div>
            </div>
          </div>
          <div class="detail-item detail-right">
            <div class="detail-padding my-box-shadow">
              <DataDetailTitle :title="`${languageDatas.AgeDistribution[language]}`"></DataDetailTitle>
              <div v-for="item, index in AgeDatas" :key="index"
                   :style="`background-color: ${index % 2 == 0 ? '#fff' : '#f2f6fc' }`">
                <DataDetailCell
                  :title="item.title"
                  :label="item.label"
                  :value="`
                  0-20 ：${item.type1}<br>
                  21-30 ：${item.type2}<br>
                  31-40 ：${item.type3}<br>
                  41-50 ：${item.type4}<br>
                  50+ ：${item.type5}`"></DataDetailCell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootPage>
    <el-dialog :title="languageDatas.Export[language]" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-row>
        <el-button v-for="item, index in exportDatas" :key="index" @click="doExportFile(item)">{{item.title}}</el-button>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="@js/baseAnalysis.js"></script>

<style lang="less" src="@style/baseAnalysis.less"></style>
