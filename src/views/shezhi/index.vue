<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/shezhi/jichusz">
            <i class="el-icon-menu"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/shezhi/wuliusz">
            <i class="el-icon-document"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/shezhi/guanliyuangl" >
            <i class="el-icon-setting"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
          <el-menu-item index="/shezhi/jiaoyisz">
            <i class="el-icon-setting"></i>
            <span slot="title">交易设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <crumb></crumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import crumb from "../../components/crumb.vue";
export default {
  components: {
    crumb,
  },
};
</script>
