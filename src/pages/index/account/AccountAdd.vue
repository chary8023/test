<template>
  <div class="wrap">
    <span>添加管理员账户</span>
    <p>
      <span class="cr">*</span>用户名：
    </p>
    <el-input v-model="account" class="inputStyle1"></el-input>
    <p>
      <span class="cr">*</span>密码：
    </p>
    <el-input v-model="password" class="inputStyle1"></el-input>
    <p>
      <span class="cr">*</span>确认密码：
    </p>
    <el-input v-model="comfirmPwd" class="inputStyle1"></el-input><span v-show="isShow">两次密码不符，请重新输入</span>
    <p>
      <span class="cr">*</span>选择用户组：
    </p>
    <el-select v-model="value" placeholder="选择用户组">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div>
      <el-button type="success" class="btn" @click="addAcount">添加</el-button>
    </div>
  </div>
</template>

<script>
import { accountAdd } from "../../../apis/api";
export default {
  data() {
    return {
      account: "",//帐户
      password: "",//密码
      comfirmPwd: "",//确认密码
      options: [ // 下拉选项的数据
        {
          value: 0,
          label: "超级管理员"
        },
        {
          value: 1,
          label: "管理员"
        },
        {
          value: 2,
          label: "普通员工"
        }
      ],
      value: "选择用户组",//下拉菜单的value值，用于判定用于的类型
      isShow:false //判定两次密码是否一致的文字显示
    };
  },
  methods: {
    addAcount() {
      if (this.password !== this.comfirmPwd) {
        this.isShow=true;
        return
        }else{
          accountAdd(
            this.account,
            this.password,
            this.value
          ).then(res => {
            if (res.data == "ok") {
              this.$message('账户添加成功！');
              // this.$router.history.push('/index/account')
            }
          });
      }
    }
  }
};
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