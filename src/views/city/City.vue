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
        @click="goToHome(item)"
      >
        <h6 class="name">{{item.name}}</h6>
        <p class="address">{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapMutations } from "vuex";
import { searchAddress, getCurrentCityById } from "../../server/getData";
import {setLocalStorage} from "../../config/utils"
import HeaderTop from "../../components/header/header";
export default {
  name: "City",
  data() {
    return {
      cityId: "", // 当前城市id
      cityName: "", //当前城市的名称
      inputValue: "", // 搜索框的值
      searchResult: [] // 搜索的地址列表
    };
  },
  methods: {
    // 搜索地址
    searchCity() {
      // 如果输入框有值
      if (this.inputValue) {
        // 搜索历史存储到localStorage
      setLocalStorage("address",this.inputValue)
        searchAddress(this.cityId, this.inputValue).then(res => {
          this.searchResult = res.data;
        });
      } else {
        Toast({
          message: "请输入内容",
          duration: 1000
        });
      }
    },
    //跳转至首页，同时传递经纬度
    goToHome(address) {
      // 将geohash存储到vuex中
      this.$store.commit("SAVE_GEOHASH", address.geohash);
      const geo = {
        latitude: address.latitude,
        longitude: address.longitude
      };
      // 记录当前地址的经纬度
      this.$store.commit("RECORD_ADDRESS", geo);
      // 跳转到首页
      this.$router.push({
        path: "/home",
        query: {
          geohash: address.geohash
        }
      });
    }
  },
  mounted() {
    //根据路由获取当前城市id
    this.cityId = this.$route.params.id;
    // 根据id获取城市
    getCurrentCityById(this.cityId).then(res => {
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