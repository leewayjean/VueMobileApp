<template>
  <div class="city">
    <!-- 顶栏 -->
    <header-top :goback="true" :headshow="true" :headtitle="cityName">
      <router-link slot="changcity" class="change_city" to="/cities" tag="span">切换城市</router-link>
    </header-top>
    <!-- 搜索地址 -->
    <div class="select_city">
      <div class="search_city">
        <input type="text" class="search_input" placeholder="输入学校、商务楼、地址" v-model="inputValue" />
        <div class="search_btn" @click="searchCity">搜索</div>
      </div>
    </div>
    <!-- 搜索结果 -->
    <ul class="search_result">
      <li
        class="search_result_item"
        v-for="item in searchResult"
        :key="item.latitude"
        @click="goToHome(item.geohash)"
      >
        <h6 class="name">{{item.name}}</h6>
        <p class="address">{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapMutations} from "vuex"
import HeaderTop from "../../components/header/header";
export default {
  name: "City",
  data() {
    return {
      cityId: "",
      cityName: "",
      inputValue: "",
      searchResult: []
    };
  },
  methods: {
    // 搜索地址
    searchCity() {
      if (this.inputValue) {
        this.$axios
          .get(
            `https://elm.cangdu.org/v1/pois?city_id=${this.cityId}&keyword=${this.inputValue}&type=search`
          )
          .then(res => {
            console.log(res);
            this.searchResult = res.data;
          });
      }
    },
    //跳转至首页，同时传递经纬度
    goToHome(geohash) {
      // 将geohash存储到vuex中
  
      this.$router.push({
        path: "/home",
        query: {
          geohash: geohash
        }
      });
    }
  },
  mounted() {
    //根据路由获取当前城市id
    this.cityId = this.$route.params.id;
    // 根据id获取城市
    this.$axios
      .get(`https://elm.cangdu.org/v1/cities/${this.cityId}`)
      .then(res => {
        console.log(this.cityName);
        this.cityName = res.data.name;
      });
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.city .change_city {
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
}
.city .select_city {
  padding-top: 49px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.city .select_city .search_city {
  padding: 8px 0;
  background-color: #fff;
  width: 100%;
}
.city .search_city .search_input {
  display: block;
  box-sizing: border-box;
  width: 288px;
  height: 28px;
  padding: 0 6px;
  margin: 0 auto 8px;
  border: 1px solid #e4e4e4;
  outline: none;
}
.city .search_city .search_btn {
  box-sizing: border-box;
  width: 288px;
  height: 28px;
  margin: 0 auto 8px;
  text-align: center;
  line-height: 28px;
  color: #fff;
  background-color: #3190e8;
  border-radius: 3px;
  font-size: 12px;
}

/* 搜索结果 */
.city .search_result .search_result_item {
  background-color: #fff;
  padding-top: 13px;
  border-bottom: 1px solid #e4e4e4;
}
.city .search_result .search_result_item .name {
  font-size: 13px;
  color: #333;
  margin: 0 16px 7px;
}
.city .search_result .search_result_item .address {
  font-size: 9.6px;
  color: #999;
  margin: 0 16px 11px;
}
</style>