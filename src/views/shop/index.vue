<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/shop/list">
            <i class="el-icon-menu"></i> 
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/shop/cate">
            <i class="el-icon-document"></i>
            <span slot="title">分类列表</span>
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
