<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created(){
    //根组件实例化时查看用户是否已经登录
    let isLogin = window.localStorage.getItem('IS_LOGIN');
    //解析userInfo
    let user = window.localStorage.getItem("USER_INFO");
    let userInfo = JSON.parse(user);
    // 如果用户已经登录，那么验证是否已经过期，这里我们跳过这一步
    if(isLogin){
      this.$store.commit("RECORD_USERINFO",userInfo)
    }else{
      this.$router.push("/login")
    }
  }
};
</script>
<style>
/* reset.css */
@import url("./assets/css/reset.css");
html {
  background-color: #f5f5f5;
  font-family: "Helvetica Neue", Tahoma, Arial, PingFangSC-Regular,
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
/* app充满整屏 */
#app {
  width: 100%;
  height: 100vh;
}
</style>
