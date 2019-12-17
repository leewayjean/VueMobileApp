<template>
  <footer class="tabbar">
    <router-link tag="div" :to="{path:'/home',query:{
      geohash,
    }}" class="tabbar-item">
      <i class="fa fa-home tabbar-icon" aria-hidden="true"></i><span class="tabbar-name">首页</span>
    </router-link>
    <router-link tag="div" to="/search" class="tabbar-item">
      <i class="fa fa-compass tabbar-icon" aria-hidden="true"></i><span class="tabbar-name">搜索</span>
    </router-link>
    <router-link tag="div" to="/order" class="tabbar-item">
      <i class="fa fa-shopping-cart tabbar-icon" aria-hidden="true"></i> <span class="tabbar-name">订单</span>
    </router-link>
    <router-link tag="div" to="/profile" class="tabbar-item">
      <i class="fa fa-use tabbar-icon" aria-hidden="true"></i><span class="tabbar-name">我的</span>
    </router-link>
  </footer>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:"tabbar",
  computed:{
    ...mapState(["geohash"])
  }
}
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
  color: #666
}
.tabbar-icon{
  font-size: 16px;
  margin-bottom: 4px;
}
.tabbar-name {
  font-size: 9.6px;
}
 .router-link-active .tabbar-item{
  color: #0089dc;
}
.router-link-active .tabbar-name {
    color: #0089dc;
}
</style>