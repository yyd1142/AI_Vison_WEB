<template>
  <div>
    <RootPage :language="language" default-active="4-2" :default-openeds="['4']">
      <div class="DataManagement" slot="page">
        <div class="form-cell">
          <div class="form-item">

          </div>
          <div class="form-item right">
            <el-button type="primary" icon="el-icon-plus" style="width: 240px;" @click="dialogFormVisible = true">{{languageDatas.IncreaseData[language]}}</el-button>
          </div>
        </div>
        <div class="table-cell my-box-shadow">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="name"
              label="数据编号"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="role"
              label="店铺名称"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="admin"
              label="更新时间"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="stroe"
              label="数据类型"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="status"
              label="数据条数"
              sortable>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </RootPage>
    <el-dialog title="新增数据" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="数据类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期节点" :label-width="formLabelWidth">
          <el-select v-model="form.date" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
      const language = ctx.query.language || 'cn';
      return {
        language: language,
        form: {
          type: '', date: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          role: '店员',
          admin: '管理员',
          stroe: '广州分公司',
          status: '正常'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          role: '店员',
          admin: '管理员',
          stroe: '广州分公司',
          status: '正常'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          role: '店员',
          admin: '管理员',
          stroe: '广州分公司',
          status: '正常'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          role: '店员',
          admin: '管理员',
          stroe: '广州分公司',
          status: '正常'
        }],
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
