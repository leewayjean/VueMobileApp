<template>
  <footer class="tabbar">
    <router-link tag="div" :to="{path:'/home',query:{
      geohash,
    }}" class="tabbar-item">
      <van-icon :name="$route.name == 'home'? 'wap-home' : 'wap-home-o'" class="tabbar-icon" />
      <span class="tabbar-name">首页</span>
    </router-link>
    <router-link tag="div" to="/search" class="tabbar-item">
      <van-icon :name="$route.name == 'search'?'search' :'search'" class="tabbar-icon" />
      <span class="tabbar-name">搜索</span>
    </router-link>
    <router-link tag="div" to="/order" class="tabbar-item">
      <van-icon
        :name="$route.name == 'order'? 'shopping-cart': 'shopping-cart-o' "
        class="tabbar-icon"
      />
      <span class="tabbar-name">订单</span>
    </router-link>
    <router-link tag="div" to="/profile" class="tabbar-item">
      <van-icon :name="$route.name =='profile'? 'manager' : 'manager-o'" class="tabbar-icon" />
      <span class="tabbar-name">我的</span>
    </router-link>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tabbar",
  computed: {
    ...mapState(["geohash"])
  }
};
</script>

<style scoped>
footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  height: 39px;
  background-color: #fff;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
}
.tabbar-icon {
  font-size: 22px;
  margin-bottom: 2px;
}
.tabbar-name {
  font-size: 9.6px;
}
.router-link-active .tabbar-icon {
  color: #38bb8b;
}
.router-link-active .tabbar-name {
  color: #38bb8b;
}
</style>