<template>
  <div>
    <RootPage :language="language" default-active="1-1" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">
        <div class="form-cell">
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
            <div class="input-cell_">
              <MyFormCell :lable="languageDatas.AreaAcount[language]">
                <div slot="cell">
                  <el-input :value="optionDatas.length" disabled></el-input>
                </div>
              </MyFormCell>
            </div>
          </div>
          <div class="button-group">
            <el-button-group>
              <el-button :type="item.type" v-for="(item, index) of buttonDatas" :key="index"
                         @click="chooseDays(item, index)">{{languageDatas[item.title][language]}}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <TitleCell :title="languageDatas.AreaTotalOverview[language]" :inLink="true"></TitleCell>
        <div class="area-total-overview my-box-shadow">
          <el-tabs type="border-card" @tab-click="typeBtn">
            <el-tab-pane :label="languageDatas.PassengerFlow[language]">
              <div id="AreaTotalOverview" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.Sales[language]">
              <div id="Sales" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.TurnoverRate[language]">
              <div id="TurnoverRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.JointRate[language]">
              <div id="JointRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
            <el-tab-pane :label="languageDatas.CustomerPrice[language]">
              <div id="CustomerPrice" class="chart-wrap" style="width: 100%; height: 500px;"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <TitleCell
          :title="`${languageDatas.RegionalTOPList[language]} ${languageDatas.And[language]} ${languageDatas.PassengerFlowAnalysis[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="top-list-and-passenger-flow">
          <div class="top-list-wrap">
            <el-tabs type="border-card" @tab-click="typeBtn">
              <el-tab-pane :label="languageDatas.PassengerFlow[language]">
                <div id="TopListChart" style="width: 100%; height: 500px;"></div>
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.Sales[language]">
                <!--<div id="Sales" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.TurnoverRate[language]">
                <!--<div id="TurnoverRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.JointRate[language]">
                <!--<div id="JointRate" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
              <el-tab-pane :label="languageDatas.CustomerPrice[language]">
                <!--<div id="CustomerPrice" class="chart-wrap" style="width: 100%; height: 500px;"></div>-->
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="passenger-flow-wrap">
            <div id="PassengerFlowChart" class="chart-wrap my-box-shadow" style="width: 100%; height: 500px;"></div>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script src="@js/overview.js"></script>

<style lang="less" src="@style/overview.less"></style>

