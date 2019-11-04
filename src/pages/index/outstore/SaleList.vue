<template>
  <div>
    <div>查看商品的销售明细</div>
    <div>
      <div class="search">
        <!-- 查询时间 -->
        <div>
          开始时间：
          <el-input v-model="input"  class="inputStyle"></el-input>结束时间：
          <el-input v-model="input"  class="inputStyle"></el-input>
          <span>(格式：2012-01-01)</span>
        </div>
        <!-- 查询关键字 -->
        关键字：
        <el-input v-model="input"  class="inputStyle"></el-input>商品名称，订单号，客户名字，会员卡号
        <el-button type="success" class="btn">查询</el-button>
      </div>
      <!-- 产品列表 -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="ordernum" label="订单号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="num" label="数量"></el-table-column>
        <el-table-column prop="price" label="实际售价"></el-table-column>
        <el-table-column prop="saleprice" label="优惠（促销/会员）"></el-table-column>
        <el-table-column prop="drawback" label="退款"></el-table-column>
        <el-table-column prop="saletime" label="销售时间"><i class="el-icon-edit"></i></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pages">
        <span class="text">首页</span>
        <span class="text">上一页</span>
        <el-pagination
          background="{color:#59A100}"
          layout="prev, pager, next"
          :total="8"
          :page-size="4"
        ></el-pagination>
        <span class="text">下一页</span>
        <span class="text">尾页</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          ordernum: "02171514573337",
          name: "海飞丝去屑洗发水",
          num: "3",
          price: "24",
          saleprice: "2.00元/无",
          drawback: "无退款",
          saletime: "2012-02-17"
        },
        {
          ordernum: "02171514573337",
          name: "海飞丝去屑洗发水",
          num: "3",
          price: "24",
          saleprice: "2.00元/无",
          drawback: "无退款",
          saletime: "2012-02-17"
        },
        {
          ordernum: "02171514573337",
          name: "海飞丝去屑洗发水",
          num: "3",
          price: "24",
          saleprice: "2.00元/无",
          drawback: "无退款",
          saletime: "2012-02-17"
        },
        {
          ordernum: "02171514573337",
          name: "海飞丝去屑洗发水",
          num: "3",
          price: "24",
          saleprice: "2.00元/无",
          drawback: "无退款",
          saletime: "2012-02-17"
        }
      ]
    };
  }
};
</script>

<style  scoped>
.search {
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  color: black;
  padding: 10px;
  margin-bottom: 10px;
}
.inputStyle{
    width: 100px;
    margin-right: 10px;
}
.btn {
  height: 30px;
  line-height: 6px;
  margin-top: 10px;
}
.pages {
  display: flex;
  margin-top: 10px;
  line-height: 30px;
}
.text {
  color: #59a100;
  margin-right: 10px;
}
</style>