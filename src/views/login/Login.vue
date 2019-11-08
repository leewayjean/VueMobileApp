<template>
  <div class="login">
    <header-top :goback="true" :headshow="true" headtitle="密码登录"></header-top>
    <form>
      <InputGroup inputtype="text" placeholder="账号"  v-model="username"/>
      <InputGroup inputtype="password" placeholder="密码" v-model="password"/>
      <InputGroup inputtype="text" placeholder="验证码" v-model="captcha_code"/>
    </form>
    <section class="login_tips">
      <p class="tip_item">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tip_item">注册过的用户可凭账号密码登录</p>
    </section>
    <span class="login_btn" @click="toLogin">登录</span>
    <router-link class="reset_password" to="/forget" tag="p">重置密码？</router-link>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
import InputGroup from "../../components/common/InputGrouup";
export default {
  name:"Login",
  data(){
    return {
      username:'',
      password:'',
      captcha_code:''
    }
  },
  methods:{
    toLogin(){
      this.$axios.post(`https://elm.cangdu.org/v2/login`,{
        username:this.username,
        password:this.password,
        captcha_code:this.captcha_code,
      }).then((res) => {
        console.log(res.data);
      })
    }
  },
  components: {
    HeaderTop,
    InputGroup
  }
};
</script>
<style scoped>
.login {
  margin-top: 12px;
  padding-top: 39px;
}
.login .login_tips .tip_item {
  font-size: 10px;
  color: #f00;
  padding: 8px 12px;
}
.login .login_btn {
  display: inline-block;
  width: 300px;
  margin: 0 10px 20px;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  border-radius: 4px;
  background: #4cd96f;
}
.login .reset_password {
  float: right;
  font-size: 12px;
  color: #3b95e9;
  margin-right: 6px;
}
</style>