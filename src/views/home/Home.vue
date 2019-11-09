<template>
  <div class="home">
    <!-- 顶栏 -->
    <header-top :loginshow="true">
      <!-- 搜索按钮 -->
      <router-link to="/search" slot="search_btn">
        <i class="fa fa-search search_btn" aria-hidden="true"></i>
      </router-link>
      <!-- 定位地址 -->
      <router-link to="/cities" slot="address" tag="span">
        <span class="address">{{address}}</span>
      </router-link>
    </header-top>
    <!-- 轮播 -->
    <div class="swipe_container">
      <div class="swiper">
        <div v-for="(entryItem, index) in indexEntry" :key="index" class="swipe_item">
          <span v-for="item in entryItem" :key="item.id" class="entry_item">
            <img :src="`https://fuss10.elemecdn.com${item.image_url}`" alt="分类" class="entry_img" />
            <h5 class="entry_title">{{item.title}}</h5>
          </span>
        </div>
      </div>
    </div>
    <!-- 店铺列表 -->
    <section class="shop_list_container">
      <header class="shop_header">附近商家</header>
      <shop-list></shop-list>
    </section>
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import ShopList from "../../components/common/ShopList";
export default {
  name: "Home",
  data() {
    return {
      indexEntry: [],
      address: "正在获取定位..."
    };
  },
  mounted() {
    //   获取食品分类
    this.$axios.get(`https://elm.cangdu.org/v2/index_entry`).then(res => {
      let arr = [];
      arr.push(res.data.slice(0, 8));
      this.indexEntry = arr;
    });
    // 根据经纬度获取精确地址
    this.$axios.get(`https://elm.cangdu.org/v2/pois/${this.$route.query.geohash}`).then((res) => {
      this.address = res.data.name;
    })
  },
  components: {
    HeaderTop,
    ShopList,
    Footer
  }
};
</script>

<style scoped>
.home {
  padding-top: 42px;
}
.home .search_btn {
  font-size: 20px;
  color: #fff;
}
.home .address {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.home .swipe_container {
  width: 100%;
  padding-bottom: 12px;
  background-color: #fff;
}
.home .swiper {
  width: 100%;
  background-color: #fff;
}
.home .swiper .swipe_item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.home .swiper .entry_item {
  width: 25%;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home .swiper .entry_item .entry_img {
  width: 36px;
  margin-bottom: 6px;
}
.home .swiper .entry_item .entry_title {
  font-size: 11px;
  color: #666;
}
.shop_list_container {
  margin-top: 8px;
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
}
.shop_list_container .shop_header {
  box-sizing: border-box;
  padding: 0 8px;
  font-size: 11px;
  color: #999;
  height: 32px;
  line-height: 32px;
}
</style>