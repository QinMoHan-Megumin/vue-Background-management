<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          v-if="show"
        >
        <div class="el-top">
          <div>
            <el-menu-item>UNI-ADMIN</el-menu-item>
          </div>
          <div style="display:flex">
            <el-menu-item index="/shouye">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="/dingdan">订单</el-menu-item>
            <el-menu-item index="/huiyuan">会员</el-menu-item>
            <el-menu-item index="/shezhi">设置</el-menu-item>
            <el-button style="margin-top:5px;margin-bottom:5px" type="success" @click="exit">退出登录</el-button>
          </div>
        </div>
        </el-menu>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        // console.log(newVal.path);
        // console.log(oldVal);
        if (newVal.path == "/login") {
          this.show = false;
        } else {
          this.show = true;
        }
      },
    },
  },
  // watch 监听路由信息 路由信息的path 就是当前访问页面的路径
  // 可以判断如果是登陆页面 就让头部导航隐藏 否则就显示

  methods: {
    exit() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
      this.$http("http://ceshi5.dishait.cn/admin/logout", "post").then(
        (res) => {
          console.log(res); 
        }
      );
    },
    //退出登陆
  },
};
</script>
<style lang="scss">
el-menu{
  padding-left: 200px;
}
#app
{
  width: 100%;
}
.el-top
{
  display: flex;
  justify-content: space-between;
}
</style>
