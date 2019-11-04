<template>
  <div>
    <el-container>
      <el-header>进货数据统计</el-header>
      <el-main>
        时间：
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>-
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <el-button type="success">提交</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
    };
  }
};
</script>

<style lang="scss" scoped>
</style>