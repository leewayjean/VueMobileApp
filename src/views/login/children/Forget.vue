<template>
  <div class="login">
      <!-- 顶栏 -->
    <header-top :goback="true" :headshow="true" headtitle="重置密码"></header-top>
    <!-- 表单 -->
    <form>
      <InputGroup inputtype="text" placeholder="账号" />
      <InputGroup inputtype="password" placeholder="原密码" />
      <InputGroup inputtype="password" placeholder="请输入新密码" />
      <InputGroup inputtype="password" placeholder="确认密码" />
      <InputGroup inputtype="text" placeholder="验证码" />
    </form>
    <!-- 确认按钮 -->
    <ConfirmBtn btnText="重置密码" class="login_btn"/>
  </div>
</template>

<script>
import HeaderTop from "../../../components/header/header";
import InputGroup from "../../../components/common/InputGrouup";
import ConfirmBtn from "../../../components/common/ConfirmBtn";
export default {
  components: {
    HeaderTop,
    InputGroup,
    ConfirmBtn
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
    margin-top: 10px;
}
.login .reset_password {
  float: right;
  font-size: 12px;
  color: #3b95e9;
  margin-right: 6px;
}
</style>