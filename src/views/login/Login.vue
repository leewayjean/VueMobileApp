<template>
  <div class="login">
    <!-- 顶栏 -->
    <header-top :goback="isLogin" :goHome="!isLogin" :headshow="true" headtitle="密码登录"></header-top>
    <form>
      <!-- 账号 -->
      <InputGroup inputtype="text" placeholder="账号" v-model="username" />
      <!-- 密码 -->
      <InputGroup :inputtype="inputType" placeholder="密码" v-model="password">
        <van-switch v-model="showValue" size="24px" slot="switch" />
      </InputGroup>
      <!-- 验证码 -->
      <InputGroup inputtype="text" placeholder="验证码" v-model="captcha_code">
        <section slot="verifyCode" class="verify-code">
          <img :src="captcha_codeSrc" alt />
          <section class="tips">
            <p>看不清</p>
            <span @click="changeverifyCode">换一张</span>
          </section>
        </section>
      </InputGroup>
    </form>
    <!--登录提示 -->
    <section class="login-tips">
      <p class="tips-item">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tips-item">注册过的用户可凭账号密码登录</p>
    </section>
    <!-- 登录按钮 -->
    <span class="login-btn" @click="toLogin">登录</span>
    <!-- 重置密码 -->
    <router-link class="reset-password" to="/forget" tag="p">重置密码？</router-link>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
import InputGroup from "../../components/common/InputGrouup";
import { userLogin, getCaptchaCode } from "../../server/getData";
export default {
  name: "Login",
  data() {
    return {
      username: "", //用户名
      password: "", // 密码
      captcha_code: "", //验证码
      isLogin: this.$store.state.isLogin,
      showValue: true, // 是否显示密码
      captcha_codeSrc: "" //验证码图片src
    };
  },
  computed: {
    // 是否显示密码
    inputType() {
      return this.showValue ? "password" : "text";
    }
  },
  created() {
    // 创建实例后立即获取验证码
    getCaptchaCode().then(res => {
      this.captcha_codeSrc = res.data.code;
    });
  },
  methods: {
    toLogin() {
      if (!this.username) {
        this.toast.show("登录账号不能为空");
      } else if (!this.password) {
        this.toast.show("请输入密码");
      } else if (!this.captcha_code) {
        this.toast.show("请输入验证码");
      } else {
        // 这里使用本地数据，有后台接口时更换
        const userInfo = {
          username: this.username,
          user_id: 2,
          id: 2,
          point: 0,
          mobile: "",
          is_mobile_valid: true,
          is_email_valid: false,
          is_active: 1,
          gift_amount: 3,
          email: "",
          delivery_card_expire_days: 0,
          current_invoice_id: 0,
          current_address_id: 0,
          brand_member_new: 0,
          balance: 0,
          avatar: "/img/default/default.jpg",
          __v: 0
        };
        userLogin(this.username, this.password, this.captcha_codeSrc).then(
          res => {
            // 登录成功，将用户信息存储到vuex中和浏览器中
            this.$store.commit("RECORD_USERINFO", userInfo);
            window.localStorage.setItem("IS_LOGIN", true);
            let user = JSON.stringify(userInfo);
            window.localStorage.setItem("USER_INFO", user);
            // 跳转
            this.$router.go(-1);
          }
        );
      }
    },
    // 更换验证码
    changeverifyCode() {
      getCaptchaCode().then(res => {
        this.captcha_codeSrc = res.data.code;
      });
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
.verify-code {
  display: flex;
}
.verify-code img {
  width: 70px;
  height: 30px;
  margin-right: 5px;
}
.verify-code p {
  font-size: 11px;
  white-space: nowrap;
  color: #666;
  margin-bottom: 3px;
}
.verify-code span {
  font-size: 11px;
  color: #3b95e9;
}
.login-tips .tips-item {
  font-size: 10px;
  color: #f00;
  padding: 8px 12px;
}
.login-btn {
  display: inline-block;
  width: 300px;
  font-size: 16px;
  margin: 0 10px 20px;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  border-radius: 4px;
  background: #4cd96f;
}
.reset-password {
  float: right;
  font-size: 12px;
  color: #3b95e9;
  margin-right: 6px;
}
</style>