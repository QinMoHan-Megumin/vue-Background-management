<template>
  <div>
    <div id="qmh_wrap">
      <h1>UNI-ANMIN</h1>
      <el-form :model="userinfo" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input
            v-model="userinfo.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="userinfo.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      userinfo: { name: "", pass: "" },
    };
  },
  methods: {
    login() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.userinfo.name,
          password: this.userinfo.pass,
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg == "ok") {
            localStorage.setItem("token", res.data.data.token);
            console.log(res.data.data.token)
            this.$router.push({ path: "/shouye/houtai" });
          }
        }) 
        .catch((res) => {
          alert("登录失败");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#qmh_wrap {
  width: 500px;
  margin-left: 600px;
  border: 1px solid black;
}
h1{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
}
</style>
