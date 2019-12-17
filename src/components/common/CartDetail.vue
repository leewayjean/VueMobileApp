<template>
  <!-- 购物车详情 -->
  <section class="cart-details-container">
    <header>
      <span class="cart-title">购物车</span>
      <span class="clear-cart-btn">清空</span>
    </header>
    <ul class="cart-food-list">
      <li v-for="(item,index) in foodList" :key="index" class="food-list-item">
        <span class="food-name">{{item.name}}</span>
        <span class="food-price">￥{{item.price}}</span>
        <CartControl :foodItem="item" />
      </li>
    </ul>
  </section>
</template>
<script>
import CartControl from "./CartControl";
export default {
  props: {
    foodList: {
      type: Array,
      required: true
    }
  },
  components: {
    CartControl
  }
};
</script>
<style scoped>
.cart-details-container {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 40px;
}
.cart-details-container header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  box-sizing: border-box;
  background: #eceff1;
}
.cart-title {
  font-size: 14px;
  color: #666;
}
.clear-cart-btn {
  font-size: 12px;
  color: #666;
}
.cart-food-list {
  background: #fff;
}
.food-list-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
}
.food-name {
  font-size: 14px;
  color: #666;
}
.food-price {
  font-size: 14px;
  color: #f60;
}
</style>