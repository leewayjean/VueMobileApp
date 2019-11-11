<template>
  <section class="food">
    <!-- better-scrool 容器 -->
    <section class="categories_wrapper" ref="categories_wrapper">
      <ul class="food_categories">
        <li v-for="(item,index) in foodList" :key="index" class="categories_item">{{item.name}}</li>
      </ul>
    </section>
    <!-- better-scrool 容器 -->
    <section class="food_wrapper" ref="food_wrapper">
      <section>
        <div v-for="(foodItem,index) in foodList" :key="index" class="list_item">
          <h3 class="title">
            {{foodItem.name}}
            <span class="title_info">{{foodItem.description}}</span>
          </h3>
          <ul>
            <li v-for="(item,index) in foodItem.foods" :key="index" class="food_info">
              <img :src="`//elm.cangdu.org/img/${item.image_path}`" alt class="food_img" />
              <section>
                <h5 class="food_name">{{item.name}}</h5>
                <p class="food_des">{{item.description}}</p>
                <p class="food_tips">{{item.tips}}</p>
              </section>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "Food",
  data() {
    return {
      foodList: [],
      id: this.$route.query.id
    };
  },
  created() {
    this.$axios
      .get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.id}`)
      .then(res => {
        console.log(res.data);
        this.foodList = res.data;
      });
  },
  updated() {
    new BScroll(this.$refs.categories_wrapper, {
      // ...... 详见配置项
    });
    new BScroll(this.$refs.food_wrapper, {
      // ...... 详见配置项
    });
  }
};
</script>

<style scoped>
.food {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.food .categories_wrapper {
  width: 76px;
  height: 100%;
}
.food .food_wrapper {
  flex: 1;
}
.food .food_categories {
  width: 100%;
  overflow: hidden;
}
.food .food_categories .categories_item {
  box-sizing: border-box;
  width: 76px;
  padding: 14px 6px;
  font-size: 12px;
  color: #666;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  /* 单行省略显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.food .food_wrapper .list_item {
  background-color: #fff;
}
.food .food_wrapper .list_item .title {
  box-sizing: border-box;
  padding: 12px 8px;
  font-size: 14px;
  color: #666;
  font-weight: bold;
  background-color: #f5f5f5;
}
.food .food_wrapper .list_item .title .title_info {
  font-size: 10px;
  color: #999;
  margin-left: 8px;
}
.food .food_wrapper .list_item .food_info {
  display: flex;
  padding: 12px 8px;
  border-bottom: 1px solid #eee;
}
.food .food_wrapper .list_item .food_info .food_img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 3px;
}
.food .food_wrapper .list_item .food_info .food_name {
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.food .food_wrapper .list_item .food_info .food_des {
  font-size: 10px;
  color: #999;
  margin: 5px 0;
}
.food .food_wrapper .list_item .food_info .food_tips {
  font-size: 10px;
  color: #333;
  margin: 5px 0;
}
</style>