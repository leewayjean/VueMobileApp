<template>
  <main class="shop">
    <!-- 店铺信息栏 -->
    <section class="header">
      <span class="goback-btn" @click="goBack">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
      <header class="shop-header">
        <img :src="`//elm.cangdu.org/img/${shopInfo.image_path}`" alt class="shop-avatar" />
        <section class="info-container">
          <section class="shop-info">
            <h3 class="name">{{shopInfo.name}}</h3>
            <p class="delivery-info">满20配送</p>
            <p class="shop_notice">公告：{{shopInfo.promotion_info}}</p>
          </section>
          <router-link class="next-icon" :to="{path:'/shopinfo',query:{id}}">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </router-link>
        </section>
      </header>
    </section>
    <!-- 导航 -->
    <nav>
      <section class="nav-item">
        <router-link :to="{path:`/shop/food`,query:{id}}" tag="span" class="nav-btn">商品</router-link>
      </section>
      <section class="nav-item">
        <router-link :to="{path:`/shop/comment`,query:{id}}" tag="span" class="nav-btn">评价</router-link>
      </section>
    </nav>
    <!-- 食品 -->
    <section class="food-container">
      <!-- keep-live -->
      <keep-alive>
        <router-view :shopInfo="shopInfo"></router-view>
      </keep-alive>
    </section>
    <!-- 骨架屏 -->
    <section class="shop-back-container" v-if="isShow && $route.name == 'food'">
      <img src="../../assets/images/shop_back_svg.svg" alt />
    </section>
  </main>
</template>

<script>
import { getShopInfo } from "../../server/getData";
import { mapState } from "vuex";
export default {
  name: "Shop",
  data() {
    return {
      shopInfo: {}, //店铺信息
      id: this.$route.query.id //当前路由查询参数
    };
  },
  computed: {
    ...mapState(["geohash", "isShow"])
  },
  methods: {
    // 返回到home页面
    goBack() {
      this.$router.push({
        path: "/home",
        query: {
          geohash: this.geohash
        }
      });
    }
  },
  created() {
    // 根据id获取店铺信息
    getShopInfo(this.id).then(res => {
      this.shopInfo = res.data;
    });
  }
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
}
/* 商店头部信息栏 */
.shop .header {
  position: relative;
}
.goback-btn {
  position: absolute;
  left: 4px;
  top: 0px;
}
.goback-btn i {
  font-size: 26px;
  color: #fff;
}
.shop-header {
  display: flex;
  padding: 8px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#3bcd9c),
    to(#38bb8b)
  );
  background-image: -webkit-linear-gradient(left, #3bcd9c, #38bb8b);
  background-image: linear-gradient(90deg, #3bcd9c, #38bb8b);
}
.info-container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.2em;
}

.shop-avatar {
  width: 58px;
  height: 58px;
  margin-right: 8px;
  border-radius: 3px;
}
.shop-info .name {
  font-size: 16px;
  color: #fff;
}
.delivery-info {
  font-size: 10px;
  color: #fff;
}
.shop_notice {
  font-size: 10px;
  color: #fff;
}
.next-icon i {
  font-size: 12px;
  color: #fff;
}
/* 店铺导航栏 */
.shop nav {
  display: flex;
  height: 45px;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.nav-item {
  flex: 1;
  display: flex;
  justify-content: center;
}
.nav-btn {
  color: #666;
  padding: 4px;
  font-size: 13px;
  border-bottom: 2px solid #fff;
}

/* 路由激活状态 */
.nav-item .router-link-active {
  color: #38bb8b;
  border-bottom: 2px solid #38bb8b;
}

.food-container {
  height: calc(100% - 120px);
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.shop-back-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
}
</style>