<template>
  <div class="home">
    <!-- 顶栏 -->
    <header-top :loginshow="true">
      <!-- 搜索按钮 -->
      <router-link to="/search" slot="search_btn">
        <i class="fa fa-search search-btn" aria-hidden="true"></i>
      </router-link>
      <!-- 定位地址 -->
      <router-link to="/cities" slot="address" tag="span" class="address">{{sliceAddress}}</router-link>
    </header-top>
    <!-- 轮播 -->
    <nav class="swipe-container">
      <van-swipe
        class="swiper"
        :autoplay="5000"
        indicator-color="#38bb8b"
        v-if="indexEntry.length > 0"
      >
        <van-swipe-item v-for="(entryItem, index) in indexEntry" :key="index" class="swipe-item">
          <figure v-for="item in entryItem" :key="item.id" class="entry-item">
            <img :src="`https://fuss10.elemecdn.com${item.image_url}`" alt="分类" class="entry-img" />
            <figcaption class="entry-title">{{item.title}}</figcaption>
          </figure>
        </van-swipe-item>
      </van-swipe>
      <!-- 骨架屏 -->
      <img src="../../assets/images/fl.svg" alt v-else />
    </nav>
    <!-- 店铺列表 -->
    <section class="shop-list-container">
      <header class="shop-header">附近商家</header>
      <keep-alive>
        <shop-list></shop-list>
      </keep-alive>
    </section>
    <!-- tabbar -->
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { getAddressByGeohash, getIndexEntry } from "../../server/getData";

export default {
  name: "Home",
  data() {
    return {
      indexEntry: [], //分类入口
      address: "正在获取定位...", // 当前地址
      geohash: "", // 地理坐标
    };
  },
  computed: {
    sliceAddress() {
      if (this.address.length > 9) {
        return this.address.slice(0, 9) + "...";
      } else {
        return this.address;
      }
    }
  },
  created() {
    // 根据经纬度获取精确地址

    this.geohash = this.$route.query.geohash;
    // 根据地理精度获取地址
    if (!this.geohash) {
      this.geohash = this.$store.state.geohash;
    }
    getAddressByGeohash(this.geohash)
      .then(res => {
        this.address = res.data.name;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    //   获取食品分类
    getIndexEntry().then(res => {
      let arr = [];
      arr.push(res.data.slice(0, 8));
      arr.push(res.data.slice(8));
      this.indexEntry = arr;
    });
  },
  components: {
    HeaderTop,
    ShopList: () => import("../../components/common/ShopList"),
    Footer
  }
};
</script>

<style scoped>
.home {
  min-height: 100%;
  padding-top: 42px;
  padding-bottom: 39px;
}
.search-btn {
  font-size: 20px;
  color: #fff;
}
.address {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.swipe-container {
  width: 100%;
  padding-bottom: 12px;
  background-color: #fff;
}
.swiper {
  width: 100%;
  background-color: #fff;
  display: inline-block;
}
.swipe-item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.entry-item {
  box-sizing: border-box;
  width: 25%;
  height: 75px;
  padding: 6px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.entry-img {
  width: 36px;
  margin-bottom: 6px;
}
.entry-title {
  font-size: 11px;
  color: #666;
}
.shop-list-container {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
}
.shop-header {
  box-sizing: border-box;
  padding: 0 8px;
  font-size: 11px;
  color: #999;
  height: 32px;
  line-height: 32px;
}
</style>