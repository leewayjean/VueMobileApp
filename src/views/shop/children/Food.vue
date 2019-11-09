<template>
  <section class="food">
      <!-- better-scrool 容器 -->
    <section class="wrapper" ref="wrapper">
      <ul class="food_categories">
        <li v-for="(item,index) in foodList" :key="index" class="categories_item">{{item.name}}</li>
      </ul>
    </section>
      <!-- better-scrool 容器 -->
    <section class="wrapper" ref="wrapper">
        <section class="food_container_right"></section>
    </section>
  </section>
</template>

<script>
  import Bscroll from "better-scroll"
export default {
  name: "Food",
  data() {
    return {
      foodList: []
    };
  },
  created() {
    this.$axios
      .get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1")
      .then(res => {
        console.log(res.data);
        this.foodList = res.data;
      });
      this.$nextTick(() => {
        // new Bscroll(this.$refs.wrapper, {})
      })
      console.log(Bscroll)
  }
};
</script>

<style scoped>
.food {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.food .wrapper {
    width: 100%;
    height: 100%;
}
.food .food_categories {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.food .food_categories .categories_item {
  width: 76px;
  padding: 14px 6px;
  background-color: #fff;
}
</style>