<template>
  <section ref="wrapper" class="wrapper">
    <section class="comment">
      <!-- 头部 -->
      <section class="comment_header">
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
          <li v-for="(tag,index) in tags" :key="index" class="tag">{{tag.name}}({{tag.count}})</li>
        </ul>
        <ul class="content_list">
          <li v-for="(item,index) in rates" :key="index" class="list_item">
            <img :src="`https://fuss10.elemecdn.com/1/5f/${item.avatar}.jpeg`" alt="头像" class="avatar" />
            <section class="rate_content">
              <p class="info">
                <span class="username">{{item.username}}</span>
                <span class="rated_at">{{item.rated_at}}</span>
              </p>
              <ul class="img_list">
               <li v-for="(img,index) in item.item_ratings" :key="index">
                 {{img.food_name}}
                 <img :src="`https://fuss10.elemecdn.com/0/74/${img.image_hash}.jpeg`" alt="">
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
export default {
  name: "Comment",
  data() {
    return {
      shopInfo: {},
      tags: [],
      rates: [],
      id: this.$route.query.id
    };
  },
  mounted() {
    //获取餐馆信息
    this.$axios
      .get(`https://elm.cangdu.org/shopping/restaurant/${this.id}`)
      .then(res => {
        this.shopInfo = res.data;
      });

    // 获取餐馆评价标签
    this.$axios
      .get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.id}/ratings/tags`)
      .then(res => {
        this.tags = res.data;
      });
    // 获取评价
    this.$axios
      .get(`https://elm.cangdu.org/ugc/v2/restaurants/${this.id}/ratings`)
      .then(res => {
        console.log(res.data);
        this.rates = res.data;
      });
  },
  updated() {
    new BScroll(this.$refs.wrapper, {
      // ...... 详见配置项
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
.comment .comment_header {
  padding: 16px 10px;
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
}
.comment .comment_header section {
  width: 100%;
  text-align: center;
}
.comment .comment_header .score {
  font-size: 24px;
  color: #f60;
}
.comment .comment_header .rating {
  font-size: 13px;
  color: #666;
}
.comment .comment_header .rate {
  font-size: 9.6px;
  color: #999;
}
/* 评价标签 */
.comment .content .tags {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.comment .content .tags .tag {
  font-size: 12px;
  color: #6d7885;
  padding: 6px;
  background-color: #ebf5ff;
  margin: 0px 8px 4px 0;
  border-radius: 5px;
}
/* 评价列表 */
.comment .content .content_list {
  padding: 0 10px;
  background-color: #fff;
}
.comment .content .content_list .list_item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.comment .content .content_list .list_item .avatar {
  width: 30px;
  height: 30px;
  margin-right: 16px;
}
.comment .content .content_list .list_item .rate_content {
  flex: 1;
}
.comment .content .content_list .list_item .rate_content .info {
  display: flex;
  justify-content: space-between;
}
.comment .content .content_list .list_item .rate_content .info .rated_at {
  font-size: 9.6px;
  color: #999;
}
</style>