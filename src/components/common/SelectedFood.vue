<template>
  <!-- 选规格 -->
  <section class="select-food-container" @click.stop="$parent.isShow = false">
    <section class="select-food-main">
      <!-- 头部 -->
      <header>
        <span class="food-name">我问问</span>
        <em class="close-btn">&times;</em>
      </header>
      <!-- 主内容 -->
      <main class="food-options">
        <h3 class="food-options-title">规格</h3>
        <ul class="food-options-list">
          <li
            class="food-options-item"
            v-for="(item,index) in foods"
            :key="index"
            @click="currentIndex = index"
            :class="{activeClass:currentIndex == index}"
          >{{item.name}}</li>
        </ul>
      </main>
      <!-- 底部 -->
      <footer>
        <span class="food-price">￥20</span>
        <span class="add-btn">加入购物车</span>
      </footer>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    foods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
};
</script>
<style scoped>
/*  弹出框遮罩层*/
.select-food-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.select-food-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 224px;
}
.select-food-main header {
  font-size: 14px;
  color: #222;
  padding: 10px;
  text-align: center;
}
.close-btn {
  font-size: 22px;
  float: right;
}
.food-options {
  padding: 10px;
}
.food-options-title {
  font-size: 12px;
  color: #666;
}
.food-options-list {
  padding: 8px 0;
}
.food-options-item {
  display: inline-block;
  margin-right: 8px;
  text-align: center;
  font-size: 12px;
  color: #333;
  padding: 4px 8px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #fff;
  /* 溢出省略 */
  width: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
footer {
  padding: 10px;
  margin-bottom: 5px;
}
.food-price {
  vertical-align: middle;
  color: #f60;
  font-size: 16px;
  font-weight: bold;
}
.food-price{
  font-size: 10px;
}
.add-btn {
  float: right;
  display: inline-block;
  width: 80px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 12px;
  color: #fff;
  background-color: #0085ff;
  border-radius: 3px;
}
.food-options .activeClass {
  color: #0085ff;
  border-color: #0085ff;
}
</style>