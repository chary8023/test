<template>
  <div>
    <el-container>
      <el-header>销售数据统计</el-header>
      <el-main>
        时间：
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>-
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <el-select v-model="value" placeholder="销售情况统计">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
      options: [
        {
          value: "选项1",
          label: "111111"
        },
        {
          value: "选项2",
          label: "22222"
        },
        {
          value: "选项3",
          label: "33333"
        },
      ],
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>