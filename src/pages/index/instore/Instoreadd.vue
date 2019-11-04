<template>
  <div class="wrap">
    <div>
      商品入库，带
      <span class="cr">*</span>为必填
    </div>
    <p>
      <span class="cr">*</span>商品条形码：
    </p>
    <el-input v-model="input" class="inputStyle1"></el-input>
    <p>
      <span class="cr">*</span>数量：
    </p>
    <el-input v-model="input" class="inputStyle1"></el-input>
    <div>计重商品单位为千克</div>
    <p>
      <span class="cr">*</span>进出价：
    </p>
    <el-input v-model="input" class="inputStyle1"></el-input>

    <div>
      <el-button type="success" class="btn">入库</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  color: black;
  text-align: left;
}
.inputStyle1 {
  width: 400px;
}
.btn {
  margin-top: 10px;
  width: 80px;
}
.cr {
  color: red;
}
</style>