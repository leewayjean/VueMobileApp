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
    <ConfirmBtn btnText="重置密码" class="login-btn" />
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

.login-btn {
  margin-top: 10px;
}
</style>