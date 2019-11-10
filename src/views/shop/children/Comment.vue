<template>
  <section class="comment">
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
  </section>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      shopInfo: {},
      id: this.$route.query.id
    };
  },
  mounted() {
    this.$axios
      .get(`https://elm.cangdu.org/shopping/restaurant/${this.id}`)
      .then(res => {
        this.shopInfo = res.data;
      });
  }
};
</script>

<style scoped>
.comment {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
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
</style>