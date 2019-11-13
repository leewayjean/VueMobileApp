<template>
  <div class="login">
    <header-top :goback="true" :headshow="true" headtitle="密码登录"></header-top>
    <form>
      <InputGroup inputtype="text" placeholder="账号"  v-model="username"/>
      <InputGroup :inputtype="inputType" placeholder="密码" v-model="password">
        <mt-switch v-model="showValue" slot="switch"></mt-switch>
      </InputGroup>
      <InputGroup inputtype="text" placeholder="验证码" v-model="captcha_code" >
        <section slot="verifyCode" class="verify_code">
          <img src="" alt="">
          <section class="tips">
            <p>看不清</p>
            <span>换一张</span>
          </section>
        </section>
      </InputGroup>
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
      captcha_code:'',
      hasLogin:null,
      showValue:true,
    }
  },
  computed:{
    inputType(){
      return this.showValue ? "password":"text"
    }
  },
  methods:{
    toLogin(){
      this.$axios.post(`https://elm.cangdu.org/v2/login`,{
        username:this.username,
        password:this.password,
        captcha_code:this.captcha_code,
      }).then((res) => {
        this.hasLogin = res.data;
        console.log(this.hasLogin);
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
.login form .verify_code p{
    font-size: 11px;
    color:#666;
    margin-bottom: 3px;
}
.login form .verify_code span {
  font-size: 11px;
  color: #3b95e9;
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