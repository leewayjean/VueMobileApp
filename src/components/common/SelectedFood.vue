<template>
  <!-- 选规格 -->
  <section class="pop_mask" @click.stop="$parent.isShow = false">
    <section class="content">
      <!-- 头部 -->
      <header>
        <span>我问问</span>
        <span>&times;</span>
      </header>
      <!-- 主内容 -->
      <main>
        <h3>规格</h3>
        <div>
          <span
            v-for="(item,index) in foods"
            :key="index"
            @click="selected(index)"
            :class="{activeClass:currentIndex == index}"
          >{{item.name}}</span>
        </div>
      </main>
      <!-- 底部 -->
      <footer>
        <span class="price">
          <span>￥</span>20
        </span>
        <span class="add">加入购物车</span>
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
  methods: {
    selected(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
/*  弹出框遮罩层*/
section.pop_mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.pop_mask .content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 224px;
}
.pop_mask .content header {
  font-size: 14px;
  color: #222;
  padding: 10px;
  text-align: center;
}
.pop_mask .content header span:last-child {
  font-size: 22px;
  float: right;
}
.pop_mask .content main {
  padding: 10px;
}
.pop_mask .content main h3 {
  font-size: 12px;
  color: #666;
}
.pop_mask .content main div {
  padding: 8px 0;
}
.pop_mask .content main div span {
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
.pop_mask .content footer {
  padding: 10px;
}
.pop_mask .content footer .price {
  vertical-align: middle;
  color: #f60;
  font-size: 16px;
  font-weight: bold;
}
.pop_mask .content footer .price span {
  font-size: 10px;
}
.pop_mask .content footer .add {
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
.pop_mask .content main .activeClass {
  color: #0085ff;
  border-color: #0085ff;
}
</style>