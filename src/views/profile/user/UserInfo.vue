<template>
  <div class="order">
    <header-top :goback="true" :headshow="true" headtitle="用户信息"></header-top>
    <section class="userinfo_item">
      <TextBar textBarTitle="用户名" />
      <TextBar textBarTitle="收货地址" />
    </section>
    <section class="userinfo_item">
      <h3 class="title">账号绑定</h3>
      <TextBar textBarTitle="手机" />
    </section>
    <section class="userinfo_item">
      <h3 class="title">安全设置</h3>
      <TextBar textBarTitle="登录密码" />
    </section>
    <ComfirmBtn btnText="退出登录" class="btn" @btn-click="userSignOut" />
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList, Dialog } from "vant";
Vue.use(Dialog);
import HeaderTop from "../../../components/header/header";
import TextBar from "../../../components/common/TextBar";
import ComfirmBtn from "../../../components/common/ConfirmBtn";
import { signOut } from "../../../server/getData";
export default {
  name: "Order",
  methods: {
    userSignOut() {
      Dialog.confirm({
        width: "300px",
        message: "是否退出登录？"
      })
        .then(() => {
          signOut()
            .then(res => {
              this.$store.commit("SIGN_OUT");
              this.toast.show("退出成功。")
              this.$router.push("/login");
            })
            .catch(err => {
              throw err;
            });
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  components: {
    HeaderTop,
    TextBar,
    ComfirmBtn
  }
};
</script>

<style scoped>
.order {
  padding-top: 49px;
}
.order section.userinfo_item h3 {
  padding: 10px;
  font-size: 10px;
  color: #666;
}
.order .btn {
  margin-top: 20px;
  background-color: #d8584a;
}
</style>