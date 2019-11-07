<template>
  <div class="login">
    <header-top :goback="true" :headshow="true" headtitle="密码登录"></header-top>
    <form>
      <InputGroup input-type="text" placeholder="账号" />
      <InputGroup input-type="password" placeholder="密码" />
      <InputGroup input-type="text" placeholder="验证码" />
    </form>
    <section class="login_tips">
      <p class="tip_item">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tip_item">注册过的用户可凭账号密码登录</p>
    </section>
    <span class="login_btn">登录</span>
    <p class="reset_password">重置密码？</p>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
import InputGroup from "../../components/common/InputGrouup";
export default {
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