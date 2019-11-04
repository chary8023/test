<template>
  <div class="wrap" v-cloak>
    <span>查看所有管理员账户</span>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="account" label="用户名称"></el-table-column>
      <el-table-column label="用户组">
        <template slot-scope="scope">
          <span v-show="scope.row.userGroup == 0">超级管理员</span>
          <span v-show="scope.row.userGroup == 1">管理员</span>
          <span v-show="scope.row.userGroup == 2">普通员工</span>
        </template>
      </el-table-column>
      <el-table-column label="管理">
        <!-- <i class="el-icon-edit"></i> <span @click="del()">删除</span> -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { accountManage, accountDel } from "../../../apis/api";
export default {
  data() {
    return {
      tableData: []
    };
  },
  // inject:['reload'],//注入reload方法
  created() {
    accountManage().then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    // 删除按钮
    handleDelete(index, row) {
      console.log(index, row);
      accountDel(row.id);
      // this.reload()
      location.reload();
    },
    handleEdit(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
.wrap {
  color: black;
  text-align: left;
}
[v-cloak] {
  display: none !important;
}
</style>