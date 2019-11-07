<template>
  <header>
    <slot name="logo"></slot>
    <slot name="search_btn"></slot>
    <!-- 返回按钮 -->
    <i class="fa fa-angle-left goback" aria-hidden="true" v-if="goback" @click="goBack"></i>
    <!-- 顶栏文字 -->
    <h3 v-if="headshow" class="city_name">{{headtitle}}</h3>
    <!-- 登录注册按钮 -->
    <router-link tag="div" to="/login" v-if="loginshow">
      <span class="login">登录|注册</span>
    </router-link>
    <slot name="changcity"></slot>
  </header>
</template>
<script>
export default {
  name: "HeaderTop",
  props: {
    goback: {
      type: Boolean,
      default: false
    },
    headtitle: {
      type: String
    },
    headshow: {
      type: Boolean,
      default: false
    },
    loginshow:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
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
}
header .goback {
  color: #fff;
  font-size: 22px;
}
header .city_name {
  width: 100%;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
header .login {
  font-size: 12px;
  color: #fff;
}
</style>

