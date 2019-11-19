<template>
  <div class="cart_control">
    <span class="circle">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </span>
    <span class="count">{{count}}</span>
    <span class="circle" @click="addToCart">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>
<script>
export default {
    name:"CartControl",
    props:{
      count:{
        type:Number,
        default:0
      }
    },
    methods:{
      addToCart(){
        this.$emit("add-food")
      }
    }
}
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
  margin: 0 2px;
  font-size: 12px;
  color: #666;
}
.cart_control .circle:first-child {
  background-color: #fff;
  border:1px solid #0085ff;
}
</style>