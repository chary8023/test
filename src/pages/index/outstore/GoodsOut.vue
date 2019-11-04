<template>
  <div class="wrap">
    <div>
      商品销售。带
      <span class="cr">*</span>为必填项目。先把商品加入订单。所有商品都加入订单后点
      <span>确认提交</span>完成！
    </div>
    <p>
      <span class="cr">*</span>商品条形码
    </p>
    <el-input v-model="input" class="inputStyle"></el-input>
    <p>
      <span class="cr">*</span>数量
    </p>
    <el-input v-model="input" class="inputStyle1"></el-input>
    <span>计量单位为千克</span>
    <div class="btnwrap">
      <el-button type="success" class="btn">加入订单</el-button>
      <span class="text">重新出库</span>
    </div>
    <!-- 表格内容 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="price" label="价格（元）"></el-table-column>
      <el-table-column prop="totalprice" label="总价（元）"></el-table-column>
      <el-table-column prop="discount" label="优惠总价（元）"></el-table-column>
    </el-table>
    总价：0元，优惠：0元，<span class="cr">小计：0元</span>
    <!-- 会员卡号 -->
    <div>
        <p>会员卡号：</p>
        <el-input v-model="input" class="inputStyle"></el-input><br>
        <el-button type="success" class="btn">提交确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      
    };
  }
};
</script>

<style  scoped>
.wrap{
    color: black;
    text-align: left;
}
.cr{
    color: red
}
.inputStyle{
    width: 200px;
}
.inputStyle1{
    width: 150px;
}
.btnwrap{
    margin-top: 10px;
}
.btn{
    margin-right: 10px;
    margin-top: 10px;
}
.text{
    color: #59A100
}
</style>