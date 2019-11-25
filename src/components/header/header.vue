<template>
  <header>
    <slot name="logo"></slot>
    <slot name="search_btn"></slot>
    <router-link class="fa fa-angle-left goback" aria-hidden="true" v-if="goHome" tag="i" :to="{path:'/home',query:{geohash}}"></router-link>
    <!-- 返回按钮 -->
    <i class="fa fa-angle-left goback" aria-hidden="true" v-if="goback" @click="$router.go(-1)" ></i>
    <!-- 顶栏文字 -->
    <h3 v-if="headshow" class="city_name">{{headtitle}}</h3>
    <slot name="address"></slot>
    <!-- 登录注册按钮 -->
    <router-link :to="isLogin?'/profile':'login'" v-if="loginshow" tag="div">
      <span class="login" v-if="!isLogin">登录|注册</span>
      <span tag="span" to="/login" class="user" v-else>
        <i class="fa fa-user" aria-hidden="true"></i>
      </span>
    </router-link>

    <!-- 切换城市按钮 -->
    <slot name="changcity"></slot>
  </header>
</template>
<script>
export default {
  name: "HeaderTop",
  props: {
    //是否显示返回
    goback: {
      type: Boolean,
      default: false
    },
    goHome:{
      type:Boolean,
      default:false
    },
    // 中间显示文本
    headtitle: {
      type: String
    },
    // 是否显示文本
    headshow: {
      type: Boolean,
      default: false
    },
    // 是否显示登录/用户按钮
    loginshow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // vuex中获取是否用户已经登录
    isLogin() {
      return this.$store.state.isLogin;
    },
    geohash(){
      return this.$store.state.geohash;
    }
  },
};
</script>
<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 39px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #3190e8;
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
header .goback {
  color: #fff;
  font-size: 22px;
}
header .city_name {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
header .login {
  font-size: 12px;
  color: #fff;
}
header .user i {
  font-size: 16px;
  color: #fff;
}
</style>

