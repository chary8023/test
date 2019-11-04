<template>
  <div class="wrap">
    <div class="login-wrap">
      <div>
        账户：
        <el-input placeholder="请输入账户" v-model="account" clearable></el-input>
      </div>
      <div>
        密码：
        <el-input placeholder="请输入密码" v-model="password" clearable show-password></el-input>
      </div>
      <el-button type="primary" @click="loginbtn">登陆</el-button>
      <p v-show="isshow">用户名或密码错误</p>
    </div>
  </div>
</template>

<script>
import {login} from '../apis/api'
export default {
  data() {
    return {
      account: "", //帐户
      password:"", //密码
      isshow:false
    };
  },
  methods:{
    loginbtn(){
      login(this.account,this.password).then(res=>{
        // res.data即为后台send到前端的数据对象，其中有msg和token
        if(res.data.msg=='ok'){
          // 把登录者的用户名和对应的token和用户的组别userGroup,用户名存放在localStorage中，方便使用
          localStorage.username = this.account
          localStorage.token = res.data.token
          localStorage.userGroup = res.data.userGroup
          localStorage.account = res.data.account
          localStorage.avatarUrl = res.data.avatarUrl
          localStorage.id = res.data.id
          // 跳转至index页面
          this.$router.history.push('/index/goods')
        }else{
          this.isshow=true
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #186dc8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .login-wrap {
    width: 300px;
    height: 200px;
    border-radius: 10px;
    margin-right: 50px;
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        margin-bottom: 10px;
    }
    .el-input{
        width: 200px;
        margin-left: 20px;
    }
  }
}
</style>