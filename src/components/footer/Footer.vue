<template>
  <footer>
    <router-link tag="div" :to="{path:'/home',query:{
      geohash,
    }}" class="tab_item">
      <i class="fa fa-home" aria-hidden="true"></i><span class="tab_name">首页</span>
    </router-link>
    <router-link tag="div" to="/search" class="tab_item">
      <i class="fa fa-compass" aria-hidden="true"></i><span class="tab_name">搜索</span>
    </router-link>
    <router-link tag="div" to="/order" class="tab_item">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="tab_name">订单</span>
    </router-link>
    <router-link tag="div" to="/me" class="tab_item">
      <i class="fa fa-user" aria-hidden="true"></i><span class="tab_name">我的</span>
    </router-link>
  </footer>
</template>

<script>
import {mapState} from "vuex"
export default {
  name:"Footer",
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
footer .tab_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666
}
footer .tab_item i {
  font-size: 16px;
  margin-bottom: 4px;
}
footer .tab_item .tab_name {
  font-size: 9.6px;
}
.router-link-active i{
  color: #0089dc;
}
.router-link-active .tab_name {
    color: #0089dc;
}
</style>