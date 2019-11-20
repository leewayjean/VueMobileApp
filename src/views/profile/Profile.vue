<template>
  <div class="profile">
    <!-- 用户信息 -->
    <router-link tag="header" to="/login">
      <img src="../../assets/images/avatar.png" alt class="avatar" />
      <section class="user_info">
        <section class="user"  v-if="!userInfo">
          <h3 class="login">登录/注册</h3>
          <p class="login_tip">
            <i class="fa fa-mobile" aria-hidden="true"></i>登录享受更多特权
          </p>
        </section>
        <section class="user" v-else>
          <h3 class="login">{{userInfo.username}}</h3>
          <p class="login_tip" v-text="userInfo.mobile?userInfo.mobile:'未绑定手机号'">{{userInfo.mobile}}</p>
        </section>
        <span class="next_icon">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </section>
    </router-link>
    <!-- 积分红包 -->
    <section class="info_data">
      <section class="info_data_item">
        <p class="data">
          <span class="num">33</span>
          <span class="unit">元</span>
        </p>
        <p class="info_title">余额</p>
      </section>
      <section class="info_data_item">
        <p class="data">
          <span class="num">2</span>
          <span class="unit">个</span>
        </p>
        <p class="info_title">优惠</p>
      </section>
      <section class="info_data_item">
        <p class="data">
          <span class="num">20</span>
          <span class="unit">分</span>
        </p>
        <p class="info_title">积分</p>
      </section>
    </section>
    <!-- 用户设置 -->
    <section class="user_setting">
      <section class="userinfo_item">
        <TextBar textBarTitle="我的地址" />
      </section>
      <section class="userinfo_item">
        <TextBar textBarTitle="金币商城" />
        <TextBar textBarTitle="分享拿20元现金" />
      </section>
      <section class="userinfo_item">
        <TextBar textBarTitle="我的客服" />
        <TextBar textBarTitle="下载饿了么APP" />
        <TextBar textBarTitle="规则中心" />
      </section>
    </section>
    <!-- 隐私设置 -->
    <div class="user_secrte">
        <a href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=隐私政策&key=ruleQue50">隐私政策</a>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/footer/Footer";
import TextBar from "../../components/common/TextBar";
export default {
  name: "Profile",
  computed:{
    userInfo(){
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
.profile header {
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
.profile header .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile header .user_info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}
.profile header .user_info .user .login {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
}
.profile header .user_info .user .login_tip {
  margin-top: 8px;
  font-size: 11px;
  color: #fff;
}
.profile header .user_info .user .login_tip i {
  color: #f5f5f5;
  margin-right: 4px;
}
.profile header .user_info .next_icon {
  color: #fff;
  font-size: 16px;
}

/* 用户信息 */
.profile .info_data {
  display: flex;
}
.profile .info_data .info_data_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-right: 1px solid #f1f1f1;
}
.profile .info_data .info_data_item .data {
  padding: 17px 0 9px;
}
.profile .info_data .info_data_item .data .num {
  font-size: 24px;
  font-weight: 700;
}
.profile .info_data .info_data_item:nth-child(1) .num {
  color: #ff9900;
}
.profile .info_data .info_data_item:nth-child(2) .num {
  color: #ff5f3e;
}
.profile .info_data .info_data_item:nth-child(3) .num {
  color: #6ac20b;
}
.profile .info_data .info_data_item .info_title {
  font-size: 10px;
  padding-bottom: 9px;
  font-weight: 700;
  color: #666;
}

/* 用户设置 */
.profile .userinfo_item {
  margin-top: 10px;
}

/* 隐私政策 */
.profile .user_secrte {
    text-align: center;
    margin: 12px 0;
}
.profile .user_secrte a{
    font-size: 12px;
    color: #0085ff;
    text-decoration: none;
}
</style>