<template>
  <div class="DataDetailTitle">
    <div class="title">{{title}}</div>
    <div class="sort" v-if="menuDatas">
      <el-dropdown @command="handleChoose">
        <span class="el-dropdown-link">
          {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="item" v-for="item, index in menuDatas" :key="index">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataDetailTitle",
    props: {
      title: String,
      menuDatas: Array
    },
    data() {
      return {
        name: ''
      }
    },
    mounted() {
      if(this.menuDatas && this.menuDatas.length > 0) {
        this.name = this.menuDatas[0].name;
      }
    },
    methods: {
      handleChoose(command) {
        this.name = command.name
      }
    }
  }
</script>

<style lang="less">
  .DataDetailTitle {
    width: 100%;
    display: flex;
    display: -webkit-flex; /* Safari */
    height: 80px;
    border-bottom: 1px solid #ebebeb;
    .title {
      width: 50%;
      display: flex;
      display: -webkit-flex; /* Safari */
      height: 80px;
      align-items: center;
      padding-left: 15px;
      font-size: 18px;
      color: #2e2f30;
    }
    .sort {
      width: 50%;
      display: flex;
      display: -webkit-flex; /* Safari */
      height: 80px;
      justify-content: flex-end;
      align-items: center;
      padding-right: 15px;
    }
  }
</style>
