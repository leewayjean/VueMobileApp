<template>
  <div class="profile">
    <!-- 用户信息 -->
    <router-link tag="header" :to="userInfo.username?'/userInfo':'/login'">
      <img src="../../assets/images/avatar.png" alt class="avatar" />
      <section class="user-info-container">
        <!-- 用户未登录时 -->
        <section class="userinfo" v-if="!userInfo.username">
          <h3 class="login">登录/注册</h3>
          <p class="login-tip">
            <i class="fa fa-mobile" aria-hidden="true"></i>登录享受更多特权
          </p>
        </section>
        <!-- 用户已登录时 -->
        <section class="userinfo" v-else>
          <h3 class="login">{{userInfo.username}}</h3>
          <p class="login-tip" v-text="userInfo.mobile?userInfo.mobile:'未绑定手机号'">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            {{userInfo.mobile}}
          </p>
        </section>
        <span class="next-icon">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </section>
    </router-link>
    <!-- 积分红包 -->
    <ul class="info-data">
      <li class="info-data-item">
        <p class="data">
          <span class="points user-account">33</span>
          <span class="unit">元</span>
        </p>
        <p class="points-title">余额</p>
      </li>
      <li class="info-data-item">
        <p class="data">
          <span class="points user-discount">2</span>
          <span class="unit">个</span>
        </p>
        <p class="points-title">优惠</p>
      </li>
      <li class="info-data-item">
        <p class="data">
          <span class="points user-accu-points">20</span>
          <span class="unit">分</span>
        </p>
        <p class="points-title">积分</p>
      </li>
    </ul>
    <!-- 用户设置 -->
    <section class="user-setting">
      <section class="userinfo-item">
        <TextBar textBarTitle="我的地址" />
      </section>
      <section class="userinfo-item">
        <TextBar textBarTitle="金币商城" />
        <TextBar textBarTitle="分享拿20元现金" />
      </section>
      <section class="userinfo-item">
        <TextBar textBarTitle="我的客服" />
        <TextBar textBarTitle="下载饿了么APP" />
        <TextBar textBarTitle="规则中心" />
      </section>
    </section>
    <!-- 隐私设置 -->
    <div class="user-secrte">
      <a
        href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=隐私政策&key=ruleQue50"
      >隐私政策</a>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/footer/Footer";
import TextBar from "../../components/common/TextBar";
export default {
  name: "Profile",
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  components: {
    Footer,
    TextBar
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-info-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}
.login {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
}
.login-tip {
  margin-top: 8px;
  font-size: 11px;
  color: #fff;
}
.login-tip i {
  color: #f5f5f5;
  margin-right: 4px;
}
.next-icon {
  color: #fff;
  font-size: 16px;
}

/* 用户信息 */
.info-data {
  display: flex;
}
.info-data-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-right: 1px solid #f1f1f1;
}
.data {
  padding: 17px 0 9px;
}
.points {
  font-size: 24px;
  font-weight: 700;
}
.user-account{
  color: #ff9900;
}
.user-discount{
  color: #ff5f3e;
}
.user-accu-points{
  color: #6ac20b;
}
.points-title {
  font-size: 10px;
  padding-bottom: 9px;
  font-weight: 700;
  color: #666;
}

/* 用户设置 */
.userinfo-item {
  margin-top: 10px;
}

/* 隐私政策 */
.user-secrte {
  text-align: center;
  margin: 12px 0;
}
.user-secrte a {
  font-size: 12px;
  color: #0085ff;
  text-decoration: none;
}
</style>