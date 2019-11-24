<template>
  <!-- 购物车详情 -->
  <section class="cart_detail">
    <header>
      <span class="title">购物车</span>
      <span class="clear_btn">清空</span>
    </header>
    <ul class="food_list">
      <li v-for="(item,index) in foodList" :key="index" class="food_item">
          <span class="name">{{item.name}}</span>
          <span class="price">￥{{item.price}}</span>
            <CartControl :foodItem="item"/>
      </li>
    </ul>
  </section>
</template>
<script>
import CartControl from "./CartControl"
export default {
    props:{
        foodList:{
            type:Array,
            required:true,
        }
    },
    components:{
        CartControl
    }
}
</script>
<style scoped>
.cart_detail {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 40px;
}
.cart_detail header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    box-sizing: border-box;
    background: #eceff1;
}
.cart_detail header .title {
    font-size: 14px;
    color: #666;
}
.cart_detail header .clear_btn {
    font-size: 12px;
    color: #666;
}
.cart_detail .food_list {
    background: #fff;
}
.cart_detail .food_list .food_item {
    display:flex;
    justify-content: space-between;
    padding: 12px 10px;
}
.cart_detail .food_list .food_item .name {
    font-size: 14px;
    color: #666;
}
.cart_detail .food_list .food_item .price {
    font-size: 14px;
    color: #f60;
}
</style>