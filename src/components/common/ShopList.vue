<template>
  <ul class="shop_list">
    <li class="shop_item" v-for="(item,index) in restaurants" :key="index" @click="goToShop(item)">
      <section class="avatar">
        <img :src="`//elm.cangdu.org/img/${item.image_path}`" alt />
      </section>
      <section class="shop">
        <section class="shop_info">
          <h3 class="name">
            <span class="icon">品牌</span>
            {{item.name}}
          </h3>
          <span class="month_sell">月售8888</span>
        </section>
        <section class="shop_info">
          <section>
            <span class="rating_num">{{item.rating}}</span>
            <span class="month_sell">月售{{item.recent_order_num}}单</span>
          </section>
          <p class="month_sell">月售8888</p>
        </section>
        <section class="shop_info">
          <span
            class="delivery"
          >￥{{item.float_delivery_fee}}元起送 / 配送费约{{item.float_minimum_order_amount}}元</span>
          <span>
            <span class="distance">{{item.distance}}/</span>
            <span class="order_lead_time">{{item.order_lead_time}}</span>
          </span>
        </section>
      </section>
    </li>
  </ul>
</template>
<script>
import { getShopList } from "../../server/getData";
export default {
  name: "ShopList",
  data() {
    return {
      restaurants: []
    };
  },
  methods: {
    goToShop(item) {
      console.log(item);
      this.$router.push({
        path: "/shop",
        query: {
          id: item.id
        }
      });
    }
  },
  mounted() {
    // 根据经纬度获取店铺
    getShopList().then(res => {
      this.restaurants = res.data;
    });
  }
};
</script>

<style scoped>
.shop_list {
  padding-bottom: 49px;
}
.shop_list .shop_item {
  box-sizing: border-box;
  padding: 14px 8px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1.2px solid #f1f1f1;
}
.shop_list .shop_item .shop {
  flex: 1;
}
.shop_list .shop_item .avatar img {
  width: 54px;
  height: 54px;
  margin-right: 8px;
  border-radius: 3px;
}
.shop_list .shop_item .shop .shop_info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.shop_list .shop_item .shop .shop_info:nth-child(2) {
  margin-top: 10px;
}
.shop_list .shop_item .shop .shop_info:nth-child(3) {
  margin-top: 10px;
}
.shop_list .shop_item .shop .shop_info .rating_num {
  font-size: 9.6px;
  color: #ff6000;
  margin: 0 4px;
}
.shop_list .shop_item .shop .month_sell {
  font-size: 9.6px;
  color: #666;
}

.shop_list .shop_item .shop .shop_info .delivery {
  font-size: 10px;
  color: #666;
}
.shop_list .shop_item .shop .shop_info .distance {
  font-size: 10px;
  color: #999;
}
.shop_list .shop_item .shop .shop_info .order_lead_time {
  font-size: 10px;
  color: #0089dc;
}

.shop_list .shop_item .shop .name {
  font-size: 13px;
  color: #333;
  font-weight: 800;
}
.shop_list .shop_item .shop .name .icon {
  font-size: 10px;
  color: #333;
  background-color: #ffd930;
}
.shop_list .shop_item .shop .month_sell {
  font-size: 9.6px;
  color: #666;
}
</style>