<template>
  <div>
    <RootPage :language="language" default-active="1-1" :default-openeds="['1']">
      <div class="overview-wrap" slot="page">
        <div class="form-cell">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item :label="languageDatas.Store[language]">
              <el-select v-model="form.store" :placeholder="languageDatas.StoreInput[language]">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="button-group">
            <el-button-group>
              <el-button :type="item.type" v-for="(item, index) of buttonDatas" :key="index" @click="chooseDays(item, index)">{{languageDatas[item.title][language]}}</el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";

  export default {
    components: {
      RootPage
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        buttonDatas: [{
          title: 'Yesterday',
          type: 'primary'
        },{
          title: 'Last_7_days',
          type: ''
        },{
          title: 'Last_30_days',
          type: ''
        }],
        form: {
          store: ''
        }
      }
    },
    methods: {
      chooseDays(item, index) {
        for(let [k, i] of this.buttonDatas.entries()) {
          if(k === index) {
            i.type = 'primary';
          } else {
            i.type = '';
          }
        }
      }
    }
  };
</script>

<style lang="less">
  .overview-wrap {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    padding-right: 15px;
    .form-cell {
      display: flex;
      display: -webkit-flex; /* Safari */
      height: 80px;
      width: 100%;
      align-items: center;
      flex-direction: row;
      .el-form {
        width: 20%;
        .el-form-item {
          margin-bottom: 0;
        }
      }
      .button-group {
        display: flex;
        display: -webkit-flex; /* Safari */
        width: 80%;
        height: 80px;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
</style>

