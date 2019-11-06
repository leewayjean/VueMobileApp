<template>
  <div class="cities">
    <!-- 顶部 -->
    <header-top>
      <span class="header_logo" slot="logo" @click="reload">ele.me</span>
    </header-top>
    <!-- 当前定位城市 -->
    <section class="city_nav">
      <div class="tip">
        <span class="tip_title">当前定位城市：</span>
        <span class="tip_content">定位不准时，请在城市列表选择</span>
      </div>
      <router-link class="current_city" tag="div" :to="'/city/' + currentCity.id">
        <span class="city_name">{{currentCity.name}}</span>
        <i class="fa fa-angle-right next_arrow" aria-hidden="true"></i>
      </router-link>
    </section>
    <!-- 热门城市 -->
    <section class="hot_city">
      <h3 class="title">热门城市</h3>
      <ul class="city_content">
        <router-link class="city_item" v-for="item in hotCity" :key="item.area_code" :to="'/city/' + item.id" tag="li">{{item.name}}</router-link>
      </ul>
    </section>
    <!-- 所有城市 -->
    <section class="city_list">
      <div v-for="(cities,alpht) in cityGroup" class="hot_city" :key="cities.area_code">
        <h3 class="title">{{alpht}}</h3>
        <ul class="city_content">
          <router-link
            class="city_item"
            tag="li"
            v-for="item in cities"
            :key="item.area_code"
             :to="'/city/' + item.id"
          >{{item.name | sliceWord}}</router-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
import { getHotCity } from "../../server/getData";
export default {
  name: "Cities",
  data() {
    return {
      currentCity: {},
      hotCity: [],
      cityGroup: {}
    };
  },
  methods: {
    reload() {
      window.location.reload();
    }
  },
  mounted() {
    // 获取当前城市
    this.$axios.get("https://elm.cangdu.org/v1/cities?type=guess").then(res => {
      console.log(res.data)
      this.currentCity = res.data;
    });
    // 获取热门城市
    this.$axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(res => {
      this.hotCity = res.data;
    });
    // 获取所有城市
    this.$axios.get("https://elm.cangdu.org/v1/cities?type=group").then(res => {
      console.log(res);
      this.cityGroup = res.data;
    });
  },
  filters: {
    sliceWord(str) {
      if (str.length > 5) return str.slice(0, 4) + "...";
      return str;
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.cities {
  background-color: #f9f9f9;
}
/* 顶栏logo */
.header_logo {
  font-size: 14px;
  color: #fff;
  font-weight: 400;
}
.city_nav,
.hot_city {
  margin-bottom: 8px;
  background-color: #fff;
}
/* 城市导航栏 */
.city_nav {
  padding-top: 39px;
}
.city_nav .tip {
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  padding: 10px 10px 0;
}
.city_nav .tip .tip_title {
  font-size: 11px;
  color: #666;
}
.city_nav .tip .tip_content {
  font-size: 9.6px;
  font-weight: 900;
  color: #9f9f9f;
}
.city_nav .current_city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
  padding: 0 10px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.city_nav .current_city .city_name {
  font-size: 15px;
  color: #3190e8;
}
.city_nav .current_city .next_arrow {
  width: 12px;
  height: 12px;
  color: #9f9f9f;
}
/* 热门城市 */
.hot_city {
  border-top: 2px solid #e4e4e4;
}
.hot_city .title {
  font-size: 11px;
  color: #666;
  line-height: 32px;
  box-sizing: border-box;
  padding: 0 10px;
  border-bottom: 1px solid #e4e4e4;
}
.hot_city .city_content {
  display: flex;
  flex-wrap: wrap;
}
.hot_city .city_content .city_item {
  width: 25%;
  height: 35px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #3190e8;
  box-sizing: border-box;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.hot_city .city_content .city_item:nth-child(4) {
  border-right: none;
}
.hot_city .city_content .city_item:nth-child(8) {
  border-right: none;
}

.city_list .city_content .city_item {
  color: #666;
}
</style>