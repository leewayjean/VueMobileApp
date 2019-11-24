<template>
  <div class="cart_control">
    <span class="circle first_circle" @click="decreaseFood" v-if="foodItem.count>0">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </span>
    <span class="count" v-if="foodItem.count>0">{{foodItem.count}}</span>
    <span class="circle" @click="increaseFood">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "CartControl",
  props: {
    foodItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    // 商品数量加
    increaseFood() {
      if (!this.foodItem.count) {
        // 由于商品的json数据中没有计数的属性，因此设置count属性
        this.$set(this.foodItem, "count", 1);
      } else {
        this.foodItem.count++;
      }
    },
    decreaseFood() {
      if (!this.foodItem.count) {
        // 由于商品的json数据中没有计数的属性，因此设置count属性
        this.$set(this.foodItem, "count", 1);
      } else {
        this.foodItem.count--;
      }
    }
  }
};
</script>
<style scoped>
.cart_control {
  display: flex;
  align-items: center;
}
.cart_control .circle .fa-minus {
  color: #0085ff;
}

.cart_control .circle {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: #0085ff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 2px;
  font-size: 12px;
}
.cart_control .count {
  margin: 0 6px;
  font-size: 12px;
  color: #666;
}
.cart_control .circle.first_circle {
  background-color: #fff;
  border: 1px solid #0085ff;
}
</style>