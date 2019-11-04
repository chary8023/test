<template>
<!-- 商品退货 -->
    <div class="wrap">
        <div>商品退货！</div>
        <div class="innerwrap">
            订单号：<el-input v-model="input"  class="inputStyle"></el-input>
            <el-button type="success" class="btn">查询</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.wrap{
    text-align: left;
    color: black;
}
    .inputStyle{
        width: 200px;
        margin-right: 10px;
    }
    .innerwrap{
        padding: 10px;
    }
</style>