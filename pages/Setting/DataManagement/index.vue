<template>
  <div>
    <RootPage :language="language" default-active="4-2" :default-openeds="['4']">
      <div class="DataManagement" slot="page">
        <div class="form-cell">
          <div class="form-item">

          </div>
          <div class="form-item right">
            <el-button type="primary" icon="el-icon-plus" style="width: 240px;" @click="dialogFormVisible = true">
              {{languageDatas.IncreaseData[language]}}
            </el-button>
          </div>
        </div>
        <div class="table-cell my-box-shadow">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="id"
              :label="languageDatas.DataID[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="storeName"
              :label="languageDatas.StoreName[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="updateTime"
              :label="languageDatas.UpdateTime[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="type"
              :label="languageDatas.DataType[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="amount"
              :label="languageDatas.DataAmount[language]"
              sortable>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </RootPage>
    <el-dialog :title="languageDatas.IncreaseData[language]" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item :label="languageDatas.DataType[language]" :label-width="formLabelWidth">
          <el-select v-model="form.type" :placeholder="languageDatas.ReportTypeInput[language]">
            <el-option :label="languageDatas.SalesData[language]" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="languageDatas.DateNode[language]" :label-width="formLabelWidth">
          <el-date-picker v-model="form.data" type="date" :placeholder="languageDatas.DateNodeInput[language]">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="languageDatas.DataDetail[language]" :label-width="formLabelWidth"></el-form-item>
        <el-form-item :label="languageDatas.Sales[language]" :label-width="formLabelWidth">
        <el-input v-model="form.type" auto-complete="off" :placeholder="languageDatas.SalesInput[language]"></el-input>
        </el-form-item>
        <el-form-item :label="languageDatas.SalesVolume[language]" :label-width="formLabelWidth">
        <el-input v-model="form.type" auto-complete="off" :placeholder="languageDatas.SalesVolumeInput[language]"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";

  export default {
    name: "DataManagement",
    components: {
      RootPage
    },
    computed: {
      languageDatas() {
        return this.$store.getters.languageDatas;
      },
    },
    async asyncData(ctx) {
      const language = ctx.query.language || 'en';
      return {
        language: language,
        form: {
          type: '', date: ''
        },
        tableData: [
          {
            id: '112',
            storeName: '广州分公司',
            updateTime: '2018-09-18',
            type: '銷售數據',
            amount: '129',
          },
          {
            id: '112',
            storeName: '广州分公司',
            updateTime: '2018-09-18',
            type: '銷售數據',
            amount: '129',
          },
        ],
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style lang="less">
  .DataManagement {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    padding: 0 15px 30px 15px;
    flex-direction: column;
    .my-box-shadow {
      -moz-box-shadow: 0px 1px 5px #ccc; /* 老的 Firefox */
      box-shadow: 0px 1px 5px #ccc;
    }
    .form-cell {
      width: 100%;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      height: 80px;
      .form-item {
        width: 100% / 2;
        display: flex;
        display: -webkit-flex; /* Safari */
        align-items: center;
        &.right {
          justify-content: flex-end;
        }
      }
    }
    .table-cell {
      width: 100%;
      border-radius: 4px;
    }
  }
</style>
