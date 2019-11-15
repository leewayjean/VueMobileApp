<template>
  <section class="food">
    <!-- better-scrool 容器  && 左侧菜单栏 -->
    <section class="categories_wrapper" ref="categories_wrapper">
      <ul class="food_categories">
        <li
          v-for="(item,index) in foodList"
          :key="index"
          class="categories_item"
          :class="{activeClass:currentIndex == index}"
          @click="scrollToElement(index)"
        >{{item.name}}</li>
      </ul>
    </section>
    <!-- better-scrool 容器  && 右侧食品栏-->
    <section class="food_wrapper" ref="food_wrapper">
      <section>
        <div v-for="(foodItem,index) in foodList" :key="index" class="list_item">
          <!-- 分类标题 -->
          <h3 class="title"> 
            {{foodItem.name}}
            <!-- 标题描述 -->
            <span class="title_info">{{foodItem.description}}</span>
          </h3>
          <!-- 分类下的商品 -->
          <ul>
            <li v-for="(item,index) in foodItem.foods" :key="index" class="food_info">
              <img :src="`//elm.cangdu.org/img/${item.image_path}`" alt class="food_img" />
              <section>
                <!-- 商品名称 -->
                <h5 class="food_name">{{item.name}}</h5>
                <!-- 商品描述 -->
                <p class="food_des">{{item.description}}</p>
                <!-- 商品提示 -->
                <p class="food_tips">{{item.tips}}</p>
                <section>
                  <!-- 商品价格 -->
                  <span class="price">{{item.price}}</span>
                </section>
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
import { getFoods } from "../../../server/getData";
export default {
  name: "Food",
  data() {
    return {
      foodList: [], //食品列表
      id: this.$route.query.id, // 路由查询参数
      listHeight: [], //右边每个li所处高度
      foodScroll: {}, //右侧的BScroll对象
      menuScroll: {}, //左侧的BScroll对象
      scrollY: 0 // Y轴滚动距离
    };
  },
  computed: {
    // 滚动过程中实时计算所在区间索引
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // 触发滚动事件过程中进行判断，如果滚动过程中处于某个区间，则currentIndex为当前区间的索引
        if (this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    // 点击菜单滚动到某个元素
    scrollToElement(index) {
      let elementArray = this.$refs.food_wrapper.getElementsByClassName(
        "list_item"
      );
      this.foodScroll.scrollToElement(elementArray[index], 200);
    },
    // 初始化better-scroll
    initScroll() {
      this.menuScroll = new BScroll(this.$refs.categories_wrapper, {
        // ...... 详见配置项
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.food_wrapper, {
        click: true,
        // 派发滚动事件
        probeType: 3
      });
    },
    calculateHeight() {
      // 获取所有li
      let itemArray = this.$refs.food_wrapper.getElementsByClassName(
        "list_item"
      );
      let height = 0;
      let heightArray = [];
      heightArray.push(height);
      for (let i = 0; i < itemArray.length; i++) {
        height += itemArray[i].clientHeight;
        heightArray.push(height);
      }
      this.listHeight = heightArray;
    }
  },
  created() {
    getFoods(this.id).then(res => {
      // 获取数据
      console.log(res.data);
      this.foodList = res.data;
      // 获取数据完成后关闭骨架图
      this.$parent.successLoadData = true;
      this.$nextTick(() => {
        // 初始化better-scroll
        this.initScroll();
        // 记录每项高度
        this.calculateHeight();
        // 监听滚动事件
        this.foodScroll.on("scroll", pos => {
          // 记录Y轴滚动距离
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      });
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
  padding-bottom: 100px;
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
  border-left: 2px solid #fff;
  /* 单行省略显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.food .food_wrapper .list_item {
  background-color: #fff;
}

.food .food_wrapper .list_item:last-child{
  padding-bottom: 100vh;
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
.food .food_categories .categories_item.activeClass {
  border-left: 2px solid #0089dc;
  background-color: #fff;
  font-weight: bold;
}
</style>