<template>
  <section ref="wrapper" class="wrapper">
    <section class="comment">
      <!-- 头部 -->
      <section class="comment-header">
        <section>
          <h4 class="score">{{shopInfo.rating}}</h4>
          <p class="rating">综合评价</p>
          <p class="rate">高于周边</p>
        </section>
        <section>
          <p>服务态度</p>
          <p>菜品评价</p>
          <p>送达时间</p>
        </section>
      </section>
      <!-- 评论内容 -->
      <section class="content">
        <ul class="tags">
          <li
            v-for="(tag,index) in tags"
            :key="index"
            class="tag"
            :class="{activeClass:currentIndex == index}"
            @click="changeTag(index)"
          >{{tag.name}}({{tag.count}})</li>
        </ul>
        <ul class="content-list">
          <li v-for="(item,index) in rates" :key="index" class="list-item">
            <img
              :src="`https://fuss10.elemecdn.com/1/5f/${item.avatar}.jpeg`"
              alt="头像"
              class="avatar"
            />
            <section class="rate-content">
              <p class="info">
                <span class="username">{{item.username}}</span>
                <span class="rated_at">{{item.rated_at}}</span>
              </p>
              <ul class="img-list">
                <li v-for="(img,index) in item.item_ratings" :key="index">
                  {{img.food_name}}
                  <img
                    :src="`https://fuss10.elemecdn.com/0/74/${img.image_hash}.jpeg`"
                    alt
                  />
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
import BScroll from "@better-scroll/core";
import {
  getRatingsTags,
  getRatings,
  getShopInfo
} from "../../../server/getData";
export default {
  name: "Comment",
  data() {
    return {
      shopInfo: {},
      tags: [],
      rates: [],
      currentIndex: 0, // 当前点击的标签索引
      id: this.$route.query.id
    };
  },
  methods:{
    changeTag(index){
      this.currentIndex = index;
    }
  },
  mounted() {
    //获取餐馆信息
    getShopInfo(this.id).then(res => {
      this.shopInfo = res.data;
    });

    // 获取餐馆评价标签
    getRatingsTags(this.id).then(res => {
      this.tags = res.data;
    });
    // 获取评价
    getRatings(this.id).then(res => {
      this.rates = res.data;
    });
  },
  updated() {
    new BScroll(this.$refs.wrapper, {
      // ...... 详见配置项
      click:true
    });
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}
/* 评价头部 */
.comment-header {
  padding: 16px 10px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
}

.comment-header section:last-child {
  font-size: 13px;
  color: #666;
}
.comment-header section {
  width: 100%;
  text-align: center;
}
.comment-header .score {
  font-size: 24px;
  color: #f60;
}
.comment-header .rating {
  font-size: 13px;
  color: #666;
}
.comment-header .rate {
  font-size: 9.6px;
  color: #999;
}
/* 评价标签 */
 .content .tags {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
 .content .tags .tag {
  font-size: 12px;
  color: #6d7885;
  padding: 6px;
  background-color: #ebf5ff;
  margin: 0px 8px 4px 0;
  border-radius: 5px;
}
/* 评价列表 */
  .content-list {
  padding: 0 10px;
  background-color: #fff;
}
 .list-item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
 .list-item .avatar {
  width: 30px;
  height: 30px;
  margin-right: 16px;
}
 .rate-content {
  flex: 1;
}
 .rate-content .info {
  display: flex;
  justify-content: space-between;
}
 .rate-content .info .rated_at {
  font-size: 9.6px;
  color: #999;
}

 .tags .tag.activeClass {
  background-color: #3190e8;
  color: #fff;
}
</style>