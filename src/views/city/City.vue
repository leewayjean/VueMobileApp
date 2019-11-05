<template>
  <div class="city">
    <header-top :goback="true">
        <span slot="changcity" class="change_city">切换城市</span>
    </header-top>
    <div class="select_city">
      <div class="search_city">
        <input type="text" class="search_input" placeholder="输入学校、商务楼、地址" />
        <div class="search_btn">搜索</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from "../../components/header/header";
export default {
  name: "City",
  components: {
    HeaderTop
  }
};
</script>

<style scoped>
.city .change_city {
    font-size: 12px;
    color: #fff;
}
.city .select_city {
  padding-top: 49px;
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
</style>