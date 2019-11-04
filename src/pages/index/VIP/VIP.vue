<template>
  <div>
    <div class="search">
      搜索：
      <el-input v-model="input" class="accman-inputSearch"></el-input>会员卡，会员名，电话，手机
      <el-button type="success" class="accman-btn">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="VIPCarNum" label="会员卡卡号"></el-table-column>
      <el-table-column prop="VIPName" label="会员姓名"></el-table-column>
      <el-table-column prop="VIPLevel" label="会员等级"></el-table-column>
      <el-table-column prop="integral" label="会员积分"></el-table-column>
      <el-table-column prop="discount" label="折扣"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="tel" label="座机号"></el-table-column>
      <el-table-column label="管理">
        <i class="el-icon-edit"></i>
      </el-table-column>
    </el-table>
    <div class="pages">
      <span class="text">首页</span>
      <span class="text">上一页</span>
      <el-pagination
        background="{color:#59A100}"
        layout="prev, pager, next"
        :total="4"
        :page-size="4"
      ></el-pagination>
      <span class="text">下一页</span>
      <span class="text">尾页</span>
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
          VIPCarNum: "123456789",
          VIPName: "爱上对方过后",
          VIPLevel: "铜牌会员",
          integral: "218",
          discount: "50%",
          phone: "13244448888",
          tel: "13244448888"
        },
        {
          VIPCarNum: "987654321",
          VIPName: "讲话稿范德萨",
          VIPLevel: "普通会员",
          integral: "0",
          discount: "95%",
          phone: "13622221111",
          tel: "13622221111"
        }
      ]
    };
  }
};
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  color: black;
  line-height: 40px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.accman-inputSearch {
  width: 200px;
  margin: 0 10px;
}
.accman-btn {
  margin-left: 10px;
}
.pages {
  color: black;
  display: flex;
  margin-top: 10px;
  line-height: 30px;
}
.text {
  color: #59a100;
  margin-right: 10px;
}
</style>
