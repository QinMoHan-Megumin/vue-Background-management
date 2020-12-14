<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/shouye/houtai' }"
        >后台首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  watch: {
    $route: {
      handler(newval) {
        console.log(newval);
        this.name = newval.meta.title;
      },
    },
    // 监听路由的变化 在路由配置中设置了一个meta信息 保存路由的title，监听到哪个是当前的路由 就把title 拿过来展示在面包屑导航上
  },
};
</script>
