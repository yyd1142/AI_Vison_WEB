<template>
  <div>
    <RootPage :language="language" default-active="1-2" :default-openeds="['1']">
      <div class="independentStore" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <MyFormCell :lable="languageDatas.Store[language]">
              <div slot="cell">
                <el-select v-model="form.sid" :placeholder="languageDatas.StoreInput[language]">
                  <el-option :label="item.label"
                             :value="item.value"
                             v-for="item, index in optionDatas"
                             :key="index">
                  </el-option>
                </el-select>
              </div>
            </MyFormCell>
          </div>
          <div class="button-group">
            <el-button-group>
              <el-button :type="item.type" v-for="(item, index) of buttonDatas" :key="index"
                         @click="chooseDays(item, index)">{{languageDatas[item.title][language]}}
              </el-button>
            </el-button-group>
          </div>
        </div>
        <TitleCell :title="languageDatas.StoreTotalOverview[language]" :inLink="true"></TitleCell>
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
          :title="`${languageDatas.StoreIndicatorOverview[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="top-list-and-passenger-flow">
          <div class="wrap-cell-50" style="padding-right: 15px;">
            <div class="area-button-group" style="right: 30px;">
              <el-button-group>
                <el-button type="" icon="el-icon-arrow-left" @click="previousTypeBtn()"></el-button>
                <el-button type="">{{typeDatas[typeIndex]}}</el-button>
                <el-button type="" icon="el-icon-arrow-right" @click="nextTypeBtn()"></el-button>
              </el-button-group>
            </div>
            <div class="wrap-cell-padding my-box-shadow">
              <div class="wrap-cell-title">
                <span>{{languageDatas.IndexComparison[language]}}</span>
              </div>
              <div class="daily-market-wrap" v-for="item in 5">
                <div class="trt4redsafdsffdf">
                  <div class="a8534u9rtiewohds">103,717</div>
                  <div class="a8534u9rtiesdfds">{{languageDatas.Sales[language]}}</div>
                  <div class="a853fsdffiesdfds">24.7%</div>
                </div>
                <div class="dfdfffff23rwt5y4">76</div>
              </div>
            </div>
          </div>
          <div class="wrap-cell-50" style="padding-left: 15px;">
            <div class="card-cell-wrap">
              <div class="wrap-cell-padding my-box-shadow">
                <div class="wrap-cell-title">
                  <span>{{languageDatas.DailyMarketingAmount[language]}} (HK$)</span>
                </div>
                <div class="progress-wrap">
                  <div class="progress-content">
                    <div id="DailyMarketingAmount" style="width: 100%; height: 300px;"></div>
                  </div>
                </div>
              </div>
              <div class="wrap-cell-padding my-box-shadow" style="margin-top: 30px;">
                <div class="wrap-cell-title">
                  <span>{{languageDatas.AccumulatedSales[language]}} (HK$)</span>
                </div>
                <div class="progress-wrap">
                  <div class="progress-content">
                    <div id="AccumulatedSales" style="width: 100%; height: 300px;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TitleCell
          :title="`${languageDatas.WeatherTrend[language]}`"
          :inLink="true">
        </TitleCell>
        <div class="weather-chart-wrap my-box-shadow">
          <div id="WeatherChart" class="weather-chart" style="width: 100%; height: 450px;"></div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script src="@js/independentStore.js"></script>

<style lang="less" src="@style/independentStore.less"></style>

