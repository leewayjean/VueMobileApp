<template>
  <div class="cart-control">
    <span class="cart-circle-btn cart-minus-btn" @click="decreaseFood" v-if="foodItem.count>0">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </span>
    <span class="cart-count" v-if="foodItem.count>0">{{foodItem.count}}</span>
    <span class="cart-circle-btn" @click="increaseFood">
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
      !this.foodItem.count
        ? this.$set(this.foodItem, "count", 1)
        : this.foodItem.count++;
    },
    decreaseFood() {
      !this.foodItem.count
        ? this.$set(this.foodItem, "count", 1)
        : this.foodItem.count--;
    }
  }
};
</script>
<style scoped>
.cart-control {
  display: flex;
  align-items: center;
}
.cart-minus-btn i {
  color: #0085ff;
}

.cart-circle-btn {
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
.cart-count {
  margin: 0 6px;
  font-size: 12px;
  color: #666;
}
.cart-minus-btn {
  background-color: #fff;
  border: 1px solid #0085ff;
}
</style>