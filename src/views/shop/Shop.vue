<template>
  <main class="shop">
    <!-- 店铺信息栏 -->
    <section class="header">
      <span class="goBackBtn" @click="goBack">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
      <header class="shop_header">
        <img :src="`//elm.cangdu.org/img/${shopInfo.image_path}`" alt class="shop_avatar" />
        <section class="info_container">
          <section class="shop_info">
            <h3 class="name">{{shopInfo.name}}</h3>
            <p class="delivery_info">满20配送</p>
            <p class="shop_notice">公告：{{shopInfo.promotion_info}}</p>
          </section>
        </section>
      </header>
    </section>
    <!-- 导航 -->
    <nav>
      <section class="nav_item">
        <router-link :to="{path:`/shop/food`,query:{id}}" tag="span" class="nav_btn">商品</router-link>
      </section>
      <section class="nav_item">
        <router-link :to="{path:`/shop/comment`,query:{id}}" tag="span" class="nav_btn">评价</router-link>
      </section>
    </nav>
    <!-- 食品 -->
    <section class="food_container">
        <!-- keep-live -->
      <keep-alive>
        <router-view :shopInfo="shopInfo"></router-view>
      </keep-alive>
    </section>
    <footer></footer>
  </main>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      shopInfo: {},
      id: this.$route.query.id
    };
  },
  methods: {
    goBack() {
      this.$router.push("/home");
    }
  },
  mounted() {
    this.$axios
      .get(`https://elm.cangdu.org/shopping/restaurant/${this.id}`)
      .then(res => {
          console.log(res.data)
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
.shop .header .goBackBtn {
  position: absolute;
  left: 4px;
  top: 0px;
}
.shop .header .goBackBtn i {
  font-size: 26px;
  color: #fff;
}
.shop .shop_header {
  display: flex;
  padding: 8px;
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
.shop .shop_header .info_container {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop .shop_header .info_container .shop_info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.2em;
}

.shop .shop_header .shop_avatar {
  width: 58px;
  height: 58px;
  margin-right: 8px;
  border-radius: 3px;
}
.shop .shop_header .info_container .shop_info .name {
  font-size: 16px;
  color: #fff;
}
.shop .shop_header .info_container .shop_info .delivery_info {
  font-size: 10px;
  color: #fff;
}
.shop .shop_header .info_container .shop_info .shop_notice {
  font-size: 10px;
  color: #fff;
}
.shop .shop_header .info_container .next_icon i {
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
.shop nav .nav_item {
  flex: 1;
  display: flex;
  justify-content: center;
}
.shop nav .nav_item .nav_btn {
  color: #666;
  padding: 4px;
  font-size: 13px;
  border-bottom: 2px solid #fff;
}

/* 路由激活状态 */
.shop nav .nav_item .router-link-active {
  color: #0085ff;
  border-bottom: 2px solid #0089dc;
}

.food_container {
  height: calc(100% - 120px);
  background-color: #f5f5f5;
  box-sizing: border-box;
}
</style>