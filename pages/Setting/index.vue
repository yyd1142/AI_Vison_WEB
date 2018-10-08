<template>
  <div>
    <RootPage :language="language" default-active="4-1" :default-openeds="['4']">
      <div class="Setting" slot="page">
        <div class="form-cell">
          <div class="form-item">
            <el-input :placeholder="languageDatas.SearchUser[language]"
                      v-model="form.username" style="width: 240px;">
            </el-input>
          </div>
          <div class="form-item right">
            <el-button type="primary" icon="el-icon-plus" style="width: 240px;">{{languageDatas.IncreaseUser[language]}}</el-button>
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
              :label="languageDatas.UserName[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="role"
              :label="languageDatas.Role[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="admin"
              :label="languageDatas.Permission[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="stroe"
              :label="languageDatas.Store[language]"
              sortable
              width="280">
            </el-table-column>
            <el-table-column
              prop="status"
              :label="languageDatas.AccountStatus[language]"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              fixed="right"
              :label="languageDatas.Option[language]">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">{{languageDatas.View[language]}}</el-button>
                <el-button type="text" size="small">{{languageDatas.Edit[language]}}</el-button>
                <el-button type="text" size="small" style="color: #ff0514">{{languageDatas.Detelte[language]}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </RootPage>
  </div>
</template>

<script>
  import RootPage from "@pages/index.vue";

  export default {
    name: "Setting",
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
          username: ''
        },
        tableData: [
          {
            date: '2016-05-02',
            name: 'Mr. Chen',
            role: 'Clerk',
            admin: 'Administrators',
            stroe: 'Tsim Sha Tsui, Hong Kong',
            status: 'normal'
          }, {
            date: '2016-05-04',
            name: 'Mr. Chen',
            role: 'Clerk',
            admin: 'Administrators',
            stroe: 'Tsim Sha Tsui, Hong Kong',
            status: 'normal'
          }, {
            date: '2016-05-01',
            name: 'Mr. Chen',
            role: 'Clerk',
            admin: 'Administrators',
            stroe: 'Tsim Sha Tsui, Hong Kong',
            status: 'normal'
          }, {
            date: '2016-05-03',
            name: 'Mr. Chen',
            role: 'Clerk',
            admin: 'Administrators',
            stroe: 'Tsim Sha Tsui, Hong Kong',
            status: 'normal'
          }
        ]
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
  .Setting {
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
  }
</style>
