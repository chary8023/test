<template>
  <el-container>
    <el-header>
      <div class="header-wrap">
        <span class="header-title">xxxx超市后台管理系统</span>
        <div>
          <img class="headImg" :src="userhead" @click="clickHead">
          <span @click="clickUsername">{{username}}</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="220px">
        <el-menu
          :default-active="curPage"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
          <el-submenu v-for="item in menu" :key="item.id" :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group v-for="i in item.subMenu" :key="i.subId">
              <el-menu-item :index="i.subId">{{i.subTitle}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入token接口
import {getToken,IP} from '../apis/api'
import list from '@/json/list.json'
export default {
  data() {
    return {
      curPage: "/index/goods", //设置当前页面的hash路由
      menu: [],
      username: "请登录", //用户名
      userhead:'',//用户头像
    };
  },
  created() {
    // 将左边导航的数据赋值给到menu

    // this.menu = list
    if (location.hash.substr(1) === "/index") {
      this.curPage = "/index/goods";
      location.hash='#/index/goods'
    } else {
      this.curPage = location.hash.substr(1);
    }
    // 发送token验证是否过期

    getToken(localStorage.token).then(res=>{
      console.log(res.data)
      // 设置左上角名字
      this.username = res.data=='timeout' ? '请登录':localStorage.username
      // 如果没有过期，则要对权限进行判定
      if(res.data!="timeout"){
        let arr = []
        for(let obj of list){
          if(obj.userGroup.includes(localStorage.userGroup)){
            arr.push(obj)
          }
        }
        console.log(arr)
        this.menu=arr
      }
    })
    // this.userhead = this.$store.state.userhead
    console.log(this.$store.state.userhead.newHead)
    this.userhead = localStorage.avatarUrl !='null' ? IP+'/'+localStorage.avatarUrl :'http://img3.imgtn.bdimg.com/it/u=1820523987,3798556096&fm=26&gp=0.jpg'
    // this.userhead = this.$store.state.userhead.newHead
  },
  updated(){
    // console.log(this.$store.state.userhead)
    // this.userhead = this.$store.state.userhead
  },
  methods:{
    // 首页点击请登录跳转至登录页面
    clickUsername(){
      if(this.username=='请登录'){
        this.$router.history.push('/')
      }
    },
    // 点击头像进入头像上传页面
    clickHead(){
      this.$router.history.push('/index/Userheadpic')
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  width: 100%;
  height: 80px;
  background-color: #ccc;
  .header-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title{
      font-size: 24px;
      font-weight: bold;
    }
  }
}
.el-aside {
  width: 220px;
  height: 100%;
  background-color: #545c64;
}
.el-menu {
  border: none;
}
.el-main {
  flex: 1;
}
.headImg{
  width: 40px;
  height: 40px;
}
</style>