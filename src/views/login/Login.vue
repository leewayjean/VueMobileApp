<template>
  <div class="login">
    <!-- 顶栏 -->
    <header-top :goback="true" :headshow="true" headtitle="密码登录"></header-top>
    <form>
      <!-- 账号 -->
      <InputGroup inputtype="text" placeholder="账号"  v-model="username"/>
      <!-- 密码 -->
      <InputGroup :inputtype="inputType" placeholder="密码" v-model="password">
        <mt-switch v-model="showValue" slot="switch"></mt-switch>
      </InputGroup>
      <!-- 验证码 -->
      <InputGroup inputtype="text" placeholder="验证码" v-model="captcha_code" >
        <section slot="verifyCode" class="verify_code">
          <img :src="captcha_codeSrc" alt="">
          <section class="tips">
            <p>看不清</p>
            <span @click="changeverifyCode">换一张</span>
          </section>
        </section>
      </InputGroup>
    </form>
    <!--登录提示 -->
    <section class="login_tips">
      <p class="tip_item">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tip_item">注册过的用户可凭账号密码登录</p>
    </section>
    <!-- 登录按钮 -->
    <span class="login_btn" @click="toLogin">登录</span>
    <!-- 重置密码 -->
    <router-link class="reset_password" to="/forget" tag="p">重置密码？</router-link>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
import InputGroup from "../../components/common/InputGrouup";
import { Toast } from 'mint-ui';
export default {
  name:"Login",
  data(){
    return {
      username:'', //用户名
      password:'', // 密码
      captcha_code:'', //验证码
      hasLogin:null,  
      showValue:true,  // 是否显示密码
      captcha_codeSrc:"",
    }
  },
  computed:{
    // 是否显示密码
    inputType(){
      return this.showValue ? "password":"text"
    }
  },
  created(){
    // 创建实例后立即获取验证码
    this.getCaptcha_code();
  },
  methods:{
    toLogin(){
      Toast('提示信息');
      console.log(this.username,this.password,this.captcha_code)
      this.$axios.post(`https://elm.cangdu.org/v2/login`,{
        username:this.username,
        password:this.password,
        captcha_code:this.captcha_code,
      }).then((res) => {
        console.log(res.data);
      })
    },
    // 更换验证码
    changeverifyCode(){
      this.getCaptcha_code();
    },
    // 获取base64验证码
    getCaptcha_code(){
      this.$axios.post("https://elm.cangdu.org/v1/captchas").then((res) => {
        this.captcha_codeSrc = res.data.code;
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
 .login form .verify_code {
   display: flex;
 }
  .login form .verify_code img {
    width: 70px;
    margin-right: 5px;
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