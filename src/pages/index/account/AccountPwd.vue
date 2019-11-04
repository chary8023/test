<template>
  <div class="wrap">
    <div>修改账户密码</div>
    <p>
      <span class="cr">*</span>原密码：
    </p>
    <el-input v-model="oldPwd" class="inputStyle1"></el-input>
    <p>
      <span class="cr">*</span>新密码：
    </p>
    <el-input v-model="newPassword" class="inputStyle1"></el-input>
    <p>
      <span class="cr">*</span>验证新密码：
    </p>
    <el-input v-model="comnewPassword" class="inputStyle1"></el-input>
    <div>
      <el-button type="success" class="btn" @click="changePassword">修改</el-button>
    </div>
  </div>
</template>

<script>
import {changePwd} from '../../../apis/api'
export default {
  data(){
    return{
      oldPwd:'',//旧密码
      newPassword:'',//新密码
      comnewPassword:'',//验证新密码
    }
  },
  methods:{
    changePassword(){
      changePwd(localStorage.id,this.oldPwd,this.newPassword).then(res=>{
        if(res.data=='ok'){
          alert("密码修改成功，请重新登录")
          this.$router.history.push('/')
        }
      })
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
.cr{
    color: red
}
</style>