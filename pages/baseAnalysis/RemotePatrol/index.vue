<template>
  <div>
    <RootPage :language="language" default-active="2-4" :default-openeds="['2']">
      <div class="RemotePatrol" slot="page">
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
          </div>
          <div class="button-group">
            <el-button style="width: 240px;" type="primary" @click="search()">{{languageDatas.Search[language]}}</el-button>
          </div>
        </div>
        <TitleCell :title="languageDatas.VideoPlayback[language]" :inLink="true"></TitleCell>
        <div class="video-wrap my-box-shadow">
          <div class="video-item" v-for="item, index in videoDatas" :key="index">
            <VideoPlayer :options="item"></VideoPlayer>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script src="@js/remotePatrol.js"></script>

<style lang="less" src="@style/remotePatrol.less"></style>
