<template>
  <div class="MyInputCell">
    <div class="lable-name">{{lable}}</div>
    <div class="input-cell">
      <el-input v-model="value" :placeholder="placeholder" @change="handleChange()"></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyInputCell",
    data() {
      return {
        value: ''
      }
    },
    props: {
      lable: String,
      placeholder: String,
    },
    methods: {
      handleChange() {
        console.log(this.value);
      }
    }
  }
</script>

<style lang="less">
  .MyInputCell {
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
    .input-cell {
      height: 40px;
    }
  }
</style>
