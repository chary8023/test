<template>
  <div class="wrap">
    <h1>欢迎您 admin</h1>
    <div>
      1.你可以在这里添加新的商品或者编辑已有的商品。2.添加商品时可以同时进行入库(入库必须有数量和进价)！3.带
      <span>*</span>的项目必填
    </div>
    <p>
      <span class="cr">*</span>所属分类：
    </p>
    <el-select v-model="category" placeholder="---选择分类---" class="selectStyle">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <p>
      <span class="cr">*</span>商品名称：
    </p>
    <el-input v-model="name" class="inputStyle"></el-input>
    <p>
      <span class="cr">*</span>商品售价：
    </p>
    <div>
      <el-input v-model="salePrice" class="inputStyle1"></el-input>
      <span style="color:black">元</span>
    </div>
    <p>市场价：</p>
    <div>
      <el-input v-model="marketPrice" class="inputStyle1"></el-input>
      <span style="color:black">元</span>
    </div>

    <div class="tips">默认市场价为售价的1.2倍</div>
    <p>商品进价：</p>
    <div>
      <el-input v-model="stockPrice" class="inputStyle1"></el-input>
      <span style="color:black">元</span>
    </div>

    <p>入库数量：</p>
    <el-input v-model="stockCount" class="inputStyle1"></el-input>
    <div class="tips">计重商品单位为千克</div>
    <p>商品重量：</p>
    <el-input v-model="commodityWeight" class="inputStyle1"></el-input>
    <p>商品单位：</p>
    <el-input v-model="commodityUnit" class="inputStyle1"></el-input>
    <p>会员优惠：</p>
    <div>
      <el-radio v-model="vipDiscount" label="1">享受</el-radio>
      <el-radio v-model="vipDiscount" label="2">不享受</el-radio>
    </div>

    <p>是否促销：</p>
    <div>
      <el-radio v-model="goodsDesc" label="1">启用</el-radio>
      <el-radio v-model="goodsDesc" label="2">禁用</el-radio>
    </div>

    <p>商品简介：</p>
    <textarea cols="100" rows="5" class="textareaStyle" v-model="promotion"></textarea>
    <div class="tips">不超过200个汉字</div>
    <div>
      <p>商品条形码：</p>
      <el-input v-model="barCode" class="inputStyle1"></el-input>
      <el-button style="width:200px" type="success" class="btn" @click="productBarCode">生成条形码</el-button>
    </div>

    <el-button type="success" class="btn" @click="addGoods">添加</el-button>
  </div>
</template>

<script>
import { addGoods } from "@/apis/api";
import category from "@/json/category.json";

export default {
  data() {
    return {
      options: [],//商品类别的分类
      vipDiscount: "1", //会员优惠
      goodsDesc: "2", //是否促销
      category: "", //商品分类
      name: "", //商品名称
      salePrice: "", //商品售价
      marketPrice: "", //市场价
      stockPrice: "", //商品进价
      stockCount: "", //入库数量
      commodityWeight: "", //商品重量
      commodityUnit: "", //商品单位
      promotion: "", //商品简介
      barCode: "" //商品条形码
    };
  },
  methods: {
    addGoods() {
      addGoods(
        this.category,
        this.name,
        this.barCode,
        this.salePrice,
        this.marketPrice,
        this.stockPrice,
        this.stockCount,
        this.commodityWeight,
        this.commodityUnit,
        this.vipDiscount,
        this.goodsDesc,
        this.promotion,
      ).then(res => {
        if (res.data == "ok") {
          this.$message("商品添加成功！");
        }
      });
    },
    productBarCode() {
      let code = "";
      for (let i = 0; i < 15; i++) {
        code += Math.floor(Math.random() * 10);
      }
      console.log(code,typeof code)
      this.barCode = code;
    }
  },
  created(){
    this.options = category
  }
};
</script>

<style  scoped>
.wrap {
  text-align: left;
  color: black;
}
.selectStyle {
  width: 250px;
}
.cr {
  color: red;
}
.inputStyle {
  width: 400px;
}
p {
  font-weight: bold;
  color: black;
}
.inputStyle1 {
  width: 200px;
}
.textareaStyle {
  border-radius: 5px;
}
.tips {
  color: #ccc;
  font-size: 12px;
}
.btn {
  margin-top: 10px;
  width: 80px;
}
</style>