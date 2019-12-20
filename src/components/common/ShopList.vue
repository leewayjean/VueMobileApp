<template>
  <section>
    <ul class="shop-list" v-if="restaurants.length">
      <router-link
        class="shop-list-item"
        v-for="(item,index) in restaurants"
        :key="index"
        :to="{path:'/shop',query:{id:item.id}}"
        tag="li"
      >
        <img class="shop-avatar" :src="`//elm.cangdu.org/img/${item.image_path}`" alt />
        <ul class="shop-info-container">
          <li class="shop-info-item">
            <h3 class="shop-name">
              <span class="shop-brand-icon">品牌</span>
              {{item.name}}
            </h3>
            <span class="shop-month-sell">评论34</span>
          </li>
          <li class="shop-info-item">
            <section>
              <span class="shop-rating-num">{{item.rating}}</span>
              <span class="shop-month-sell">月售{{item.recent_order_num}}单</span>
            </section>
            <p class="shop-month-sell">月售23</p>
          </li>
          <li class="shop-info-item">
            <span
              class="delivery-fee"
            >￥{{item.float_delivery_fee}}元起送 / 配送费约{{item.float_minimum_order_amount}}元</span>
            <span>
              <span class="delivery-distance">{{item.distance}}/</span>
              <span class="order-lead-time">{{item.order_lead_time}}</span>
            </span>
          </li>
        </ul>
      </router-link>
    </ul>
    <!-- 骨架屏 -->
    <ul v-else class="skeleton">
      <li v-for="item in 10" :key="item">
        <img src="../../../src/assets/images/shopback.svg" alt />
      </li>
    </ul>
  </section>
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
  mounted() {
    // 根据经纬度获取店铺
    getShopList().then(res => {
      this.restaurants = res.data;
    });
  }
};
</script>

<style scoped>
.shop-list-item {
  box-sizing: border-box;
  padding: 14px 8px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1.2px solid #f1f1f1;
}
.shop-info-container {
  flex: 1;
}
.shop-avatar {
  width: 54px;
  height: 54px;
  margin-right: 8px;
  border-radius: 3px;
}
.shop-info-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.shop-info-item:nth-child(2) {
  margin-top: 10px;
}
.shop-info-item:nth-child(3) {
  margin-top: 10px;
}
.shop-rating-num {
  font-size: 9.6px;
  color: #ff6000;
  margin: 0 4px;
}
.shop-month-sell {
  font-size: 9.6px;
  color: #666;
}

.delivery-fee {
  font-size: 10px;
  color: #666;
}
.delivery-distance {
  font-size: 10px;
  color: #999;
}
.order-lead-time {
  font-size: 10px;
  color: #38bb8b;
}

.shop-name {
  font-size: 13px;
  color: #333;
  font-weight: 800;
}
.shop-brand-icon {
  font-size: 10px;
  color: #333;
  background-color: #ffd930;
}
.shop-month-sell {
  font-size: 9.6px;
  color: #666;
}
</style>