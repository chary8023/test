<template>
  <div class="wrap">
    <div class="tableStyle">
      <div class="search">
        <el-select v-model="searchCategory" placeholder="---选择分类---" class="selectStyle">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>关键字：
        <el-input v-model="keywords" class="inputStyle" placeholder="请输入搜索关键字"></el-input>（商品名称，条形码）
        <el-button type="success" class="btn" @click="searchBtn">查询</el-button>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="barCode" label="商品条形码" width="130"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="140"></el-table-column>
        <el-table-column prop="category" label="所属分类" width="80"></el-table-column>
        <el-table-column prop="salePrice" label="售价（元）" width="100"></el-table-column>
        <el-table-column prop="marketPrice" label="市场价（元）" width="110"></el-table-column>
        <el-table-column prop="vipDiscount" label="促销价（元）" width="110"></el-table-column>
        <el-table-column prop="stockCount" label="库存" width="80"></el-table-column>
        <!-- <el-table-column label="库存总额（元）" width="120">
          <template slot-scope="scope">{{scope.row.stockPrice*scope.row.stockCount}}</template>
        </el-table-column>-->
        <!-- <el-table-column prop="saleTotal" label="销售总额（元）" width="120"></el-table-column> -->
        <el-table-column label="操作">
          <i class="el-icon-edit"></i>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagecell"
        :total="total"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { allGoodsSelect } from "@/apis/api";
import category from "@/json/category.json";
var categoryObj = {}; //创建根据index获取name的映射对象
export default {
  data() {
    return {
      options: [], //商品分类的数组,
      tableData: [],
      pagecell: 5, //每页显示的数据条数
      page: 1, //当前页面
      total: 0 ,//数据总条数
      searchCategory:'0',//要查询的分类信息
      keywords:'',//搜索关键字
    };
  },
  created() {
    this.options = [{"value": "0","label": "全部商品"},...category];
    this.getTableData(this.page, this.pagecell)
  },
  // computed: {
  //   stockAll(row) {
  //     var stockAll = 0;
  //     for (let obj of row.tableData) {
  //       stockAll = obj.stockPrice * obj.stockCount;
  //       console.log(stockAll);
  //     }
  //     return stockAll;
  //   }
  // },
  methods: {
    // 转换产品类型
    // formatRole(row) {
    //   switch (row.category) {
    //     case "1":
    //       return "生活日用";
    //     case "2":
    //       return "水果";
    //     case "3":
    //       return "主食";
    //     case "4":
    //       return "电子";
    //     case "5":
    //       return "图书";
    //   }
    // }
    // 页码的点击事件
    changePage(page) {
      this.getTableData(page, this.pagecell,this.keywords,this.searchCategory)
    },
    // 封装根据页码请求响应数据的函数
    getTableData(page, pagecell,keywords='',searchCategory='') {
      allGoodsSelect(page, pagecell,keywords,searchCategory).then(res => {
        console.log(res.data);
        let arr = res.data.data;
        // // 方法一：利用数组的循环和对category数据的循环来把后台拿到的数字转化成对应的商品类别
        // // 定义一个把category由数字转化成对应汉字的函数
        // function getCategoryName(index) {
        //   for (let c of category) {
        //     //当category中元素对象的index与传入的index相同时，返回对应元素的name，这就是对应后台拿到的category的商品类型
        //     if (c.value == index) return c.label;
        //   }
        // }
        // for (let obj of arr) {
        //   obj.category = getCategoryName(obj.category);
        // }

        // 方法二：直接通过把category的元素映射给到一个新的对象，把json转变成普通对象，在通过对象[属性名]来获取对应的属性值
        for (let c of category) {
          categoryObj[c.value] = c.label; //对象[index]=属性值，即可新建一个新对象
        }

        for (let obj of arr) {
          obj.category = categoryObj[obj.category];
          obj.vipDiscount = obj.vipDiscount == "1" ? "促销中" : "无促销";
        }
        this.tableData = arr; //把处理好的arr赋值给到tableData用于设置table中的数据
        this.total = res.data.total; //把拿到的总数据条数给到total
      });
    },
    // 点击查询按钮
    searchBtn(){
      console.log(this.keywords,this.searchCategory)
      this.getTableData(this.page,this.pagecell,this.keywords,this.searchCategory)
    }
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