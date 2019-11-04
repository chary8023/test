<template>
  <div>
    <h1>上传头像</h1>
    <!-- 
        action:稍后文件上传到哪个服务器中
        show-file-list：是否显示上传的文件列表
        on-success：文件上传成功的回调函数
        before-upload：文件上传之前，此时可以不用
     -->
    <el-upload
      class="avatar-uploader"
      :action="ip"
      :show-file-list="false"
      :on-success="handleAvatarSuccess" 
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import {IP} from '@/apis/api.js'
export default {
    data(){
        return{
            imageUrl:'',//用户显示的图片
        }
    },
    computed:{
        ip(){
            // 使用url传参的方式把当前用户的用户名发送给后台，再通过用户名把对应的头像信息添加到数据库中进行渲染
            return IP+'/upload?account='+localStorage.account
        }
    },
    methods:{
        handleAvatarSuccess(res){
            //res表示上传成功之后返回的数据
            // file表示返回的文件
            // console.log(res,file)
            this.imageUrl = IP+'/'+res
            this.$store.commit({
              type:'changeUserHead',
              newHead:IP+'/'+res
            })
        }
    }
};
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>