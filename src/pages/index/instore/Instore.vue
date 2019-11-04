<template>
  <div class="wrap">
    <div class="tableStyle">
      <div class="search">
        <el-select v-model="value" placeholder="---选择分类---" class="selectStyle">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>关键字：
        <el-input v-model="input" class="inputStyle"></el-input>（商品名称，条形码）
        <el-button type="success" class="btn">查询</el-button>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="barcode" label="商品条形码" width="130"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="140"></el-table-column>
        <el-table-column prop="inprice" label="进价（元）" width="110"></el-table-column>
        <el-table-column prop="in" label="入库" width="110"></el-table-column>
        <el-table-column prop="stock" label="库存" width="80"></el-table-column>
        <el-table-column prop="saled" label="已售" width="120"></el-table-column>
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
          :total="9"
          :page-size="3"
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "---选择分类---",
      tableData: [
        {
          barcode: "6911989262549",
          name: "我的优乐美",
          inprice: "2.00",
          in: "未促销",
          marketPrice: "2.40",
          stock: "0（缺）",
          saled: "0.00",
        },
        {
          barcode: "6911989262550",
          name: "海飞丝去屑洗发水",
          inprice: "2.00",
          in: "未促销",
          marketPrice: "2.40",
          stock: "0（缺）",
          saled: "0.00",
        },
        {
          barcode: "6911989262551",
          name: "茅台酒",
          inprice: "2.00",
          in: "未促销",
          marketPrice: "2.40",
          stock: "0（缺）",
          saled: "0.00",
        },
        {
          barcode: "6911989262552",
          name: "龙凤呈祥2",
          inprice: "2.00",
          in: "未促销",
          marketPrice: "2.40",
          stock: "0（缺）",
          saled: "0.00",
        },
        {
          barcode: "6911989262552",
          name: "龙凤呈祥2",
          classify: "龙凤呈祥",
          inprice: "2.00",
          in: "未促销",
          marketPrice: "2.40",
          stock: "0（缺）",
          saled: "0.00",
        }
      ]
    };
  }
};
</script>

<style scoped>
.wrap {
  color: #ccc;
}
.tableStyle {
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.search {
  display: flex;
  line-height: 50px;
}
.selectStyle {
  width: 200px;
  margin-right: 5px;
}
.inputStyle {
  width: 400px;
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