<template>
  <div class="city">
    <!-- 顶栏 -->
    <header-top :goback="true" :headshow="true" :headtitle="cityName">
      <router-link slot="changcity" class="change-city" to="/cities" tag="span">切换城市</router-link>
    </header-top>
    <!-- 搜索框 -->
    <div class="select-city">
      <div class="search-city">
        <input type="text" class="search-input" placeholder="输入学校、商务楼、地址" v-model="inputValue" />
        <div class="search-btn" @click="searchCity">搜索</div>
      </div>
    </div>
    <!-- 搜索历史记录 -->
    <div class="search-history" v-if="searchResult.length === 0 && searchHistory.length != 0">
      <h3 class="search-title">搜索历史</h3>
      <ul class="search-result">
        <li class="search-result-item" v-for="(item,index) in searchHistory" :key="index" @click="goToHome(item)">
          <h6 class="name">{{item.name}}</h6>
          <p class="address">{{item.address}}</p>
        </li>
      </ul>
      <p class="clear-history" @click="clearHistory">清除搜索记录</p>
    </div>
    <!-- 搜索结果 -->
    <div class="container" v-if="searchResult.length !== 0">
      <h3 class="search-title">搜索结果</h3>
      <ul class="search-result">
        <li
          class="search-result-item"
          v-for="item in searchResult"
          :key="item.latitude"
          @click="goToHome(item)"
        >
          <h6 class="name">{{item.name}}</h6>
          <p class="address">{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { mapMutations } from "vuex";
import { searchAddress, getCurrentCityById } from "../../server/getData";
import { setLocalStorage } from "../../config/utils";
import HeaderTop from "../../components/header/header";
export default {
  name: "City",
  data() {
    return {
      cityId: "", // 当前城市id
      cityName: "", //当前城市的名称
      inputValue: "", // 搜索框的值
      searchResult: [], // 搜索的地址列表
      searchHistory: []
    };
  },
  methods: {
    // 清除搜索记录
    clearHistory(){
      this.searchHistory = [];
      window.localStorage.removeItem("searchAddressHistory");
    },
    // 搜索地址
    searchCity() {
      // 如果输入框有值
      if (this.inputValue) {
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
      // 保存搜索记录
      this.storeHistory(address);
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
    },
    // 储存搜索历史
    storeHistory(address) {
      //  判断是否已经有搜索历史
      if (this.searchHistory.length !== 0) {
        let sameAddress = this.searchHistory.filter(item => {
          return item.name == address.name;
        });
        // 只有搜索历史中没有相同的记录时才加入
        if (sameAddress.length === 0) {
          this.searchHistory.push(address);
        }
      } else {
        // 搜索记录为空直接添加
        this.searchHistory.push(address);
      }
      // JSON 化
      let addressList = JSON.stringify(this.searchHistory);
      // 存储搜索地址
      window.localStorage.setItem("searchAddressHistory", addressList);
    },
    // 获取搜索记录
    getStore() {
      // 查看localstorage中是否有存储搜索历史
      let addressArray = window.localStorage.getItem("searchAddressHistory");
      //  如果有历史记录
      if (addressArray && addressArray.length !== 0) {
        // 解析json
        let data = JSON.parse(addressArray);
        this.searchHistory = data;
      }
    }
  },

  created() {
    // 获取localStorage 中的搜索历史
    this.getStore();
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
.change-city {
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
}
.select-city {
  padding-top: 49px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.search-city {
  padding: 8px 0;
  background-color: #fff;
  width: 100%;
}
.search-input {
  display: block;
  box-sizing: border-box;
  width: 288px;
  height: 28px;
  padding: 0 6px;
  margin: 0 auto 8px;
  border: 1px solid #e4e4e4;
  outline: none;
}
 .search-btn {
  box-sizing: border-box;
  width: 288px;
  height: 28px;
  margin: 0 auto 8px;
  text-align: center;
  line-height: 28px;
  color: #fff;
  background-color: #38bb8b;
  border-radius: 3px;
  font-size: 12px;
}
/* 搜索历史 */
.search-title {
  font-size: 9.6px;
  color: #333;
  padding: 2px 0 2px 8px;
}
.clear-history {
  text-align: center;
  line-height: 26px;
  color: #333;
  font-size: 12px;
}

/* 搜索结果 */
.search-result-item {
  background-color: #fff;
  padding-top: 13px;
  border-bottom: 1px solid #e4e4e4;
}
.search-result-item .name {
  font-size: 13px;
  color: #333;
  margin: 0 16px 7px;
}
 .search-result-item .address {
  font-size: 9.6px;
  color: #999;
  margin: 0 16px 11px;
}
</style>