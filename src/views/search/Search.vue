<template>
  <div class="search">
    <!-- 顶栏 -->
    <header-top :goHome="true" :headshow="true" headtitle="搜索"></header-top>
    <!-- 表达你 -->
    <form class="search_form">
      <input type="text" class="search_input" placeholder="请输入商家或美食名称" v-model="inputValue" />
      <span class="search_btn" @click="searchShop">搜索</span>
    </form>
    <!-- 商家或食品列表 -->
    <main class="search_result_container">
      <section
        class="search_result_item"
        v-for="(item,index) in foodList"
        :key="index"
        @click="toShop(item)"
      >
        <img :src="`//elm.cangdu.org/img/${item.image_path}`" alt class="shop_avatar" />
        <section class="shop_info">
          <h3 class="name">{{item.name}}</h3>
          <p class="sell_num">月售{{item.recent_order_num}}单</p>
          <P class="delivery_info">{{item.float_delivery_fee}} 元起送 / 距离 {{item.distance}}</P>
        </section>
      </section>
    </main>
    <!-- 底部tabBar -->
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { searchRestaurant } from "../../server/getData";
export default {
  name: "Search",
  data() {
    return {
      inputValue: "", // 搜索关键字
      foodList: [], // 搜索结果
      geohash: this.$route.query.geohash
    };
  },
  methods: {
    searchShop() {
      // 将搜索内容存储到localstorage
      if (!this.inputValue) {
        this.toast.show("请输入关键字");
      } else {
        // 根据地理精度geohash和关键词搜索参观
        searchRestaurant(this.geohash, this.inputValue).then(res => {
          this.foodList = res.data;
        });
      }
    },
    // 跳转到店铺
    toShop(item) {
      this.$router.push({
        path: "/shop",
        query: {
          id: item.id
        }
      });
    }
  },
  components: {
    HeaderTop,
    Footer
  }
};
</script>

<style scoped>
.search {
  padding-top: 39px;
}
.search .search_form {
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search .search_input {
  flex: 1;
  height: 30px;
  background-color: #f2f2f2;
  font-size: 13px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
}
.search .search_btn {
  margin-left: 8px;
  border: none;
  display: inline-block;
  width: 65px;
  height: 30px;
  background-color: #3190e8;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
}
.search .search_result_container {
  margin-top: 8px;
}
.search .search_result_item {
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  padding: 10px;
}
.search .search_result_item .shop_avatar {
  width: 34px;
  height: 34px;
  margin-right: 8px;
}
.search .search_result_item .shop_info {
  font-size: 11px;
  color: #333;
  line-height: 1.3em;
  border-bottom: 1px solid #f4f4f4;
}
</style>