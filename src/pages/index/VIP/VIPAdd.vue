<template>
  <div class="wrap">
    <div>
      添加和编辑会员账户，带
      <span class="cr">*</span>为必填
    </div>
    <p>
      <span>*</span>真实名字
    </p>
    <el-input v-model="input" class="inputSearch"></el-input>
    <p>
      <span>*</span>会员卡卡号
    </p>
    <el-input v-model="input" class="inputSearch"></el-input>
    <p>
      <span>*</span>用户组
      <el-select v-model="value" placeholder="普通会员-95%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </p>

    <p>身份证号：<el-input v-model="input" class="inputSearch"></el-input></p>
    <p>用户状态：<el-radio v-model="radio" label="1">启用</el-radio>
  <el-radio v-model="radio" label="2">禁用</el-radio></p>
    <p>手机号码：<el-input v-model="input" class="inputSearch"></el-input></p>
    <p>座机号码：<el-input v-model="input" class="inputSearch"></el-input></p>
    <p>邮箱地址：<el-input v-model="input" class="inputSearch"></el-input></p>
    <p>地区选择：<el-select v-model="value1" placeholder="---请选择省份---">
        <el-option
          v-for="item in province"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select><el-select v-model="value2" placeholder="---请选择城市---">
        <el-option
          v-for="item in city"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select></p>
    <p>详细地址：<el-input v-model="input" class="inputSearch1"></el-input></p>
    <p>邮政编码：<el-input v-model="input" class="inputSearch1"></el-input></p>
    <p><el-button type="success">添加</el-button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "普通会员-95%"
        },
        {
          value: "选项2",
          label: "铜牌会员-85%"
        },
        {
          value: "选项3",
          label: "银牌会员-75%"
        },
        {
          value: "选项4",
          label: "金牌会员-65%"
        },
        {
          value: "选项5",
          label: "钻石会员-55%"
        }
      ],
      value: "",
       radio: '2',
       province:[
           {value1:"选项1",label:"北京"},
           {value1:"选项2",label:"上海"},
           {value1:"选项3",label:"广东"},
           {value1:"选项4",label:"四川"},
       ],
       value1:"",
       city:[
           {value2:"选项1",label:"北京"},
           {value2:"选项2",label:"上海"},
           {value2:"选项3",label:"广州"},
           {value2:"选项4",label:"成都"},
       ],
       value2:"",
    };
  }
};
</script>

<style  scoped>
.wrap{
    color: black
}
.inputSearch{
    width: 300px;
}
.inputSearch1{
    width: 600px;
}
</style>