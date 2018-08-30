<template>
  <div class="MySelectCell">
    <div class="lable-name">{{lable}}</div>
    <div class="select-cell">
      <el-select v-model="value" :placeholder="placeholder" @change="handleChange()">
        <el-option :label="item.lable" :value="item.value" v-for="item in option"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MySelectCell",
    data() {
      return {
        value: ''
      }
    },
    props: {
      lable: String,
      placeholder: String,
      option: Array
    },
    methods: {
      handleChange() {
        console.log(this.value);
      }
    }
  }
</script>

<style lang="less">
  .MySelectCell {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-direction: row;
    .lable-name {
      height: 40px;
      align-items: center;
      text-align: left;
      display: flex;
      display: -webkit-flex; /* Safari */
      margin-right: 15px;
    }
    .select-cell {
      height: 40px;
    }
  }
</style>
