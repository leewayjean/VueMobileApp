<template>
  <div class="order">
    <header-top :goback="true" :headshow="true" headtitle="店铺详情"></header-top>

    <section>
      <h3 class="title">活动与属性</h3>
      <p v-for="(item,index) in shopInfo.activities" :key="index">{{item.description}}</p>
    </section>
    <section>
      <h3 class="title">食品监督安全公示</h3>
      <p>满30减4，满60减8(APP专享)</p>
      <p>已加入“外卖保”计划，食品安全有保障</p>
      <p>准时必达，超时必赔</p>
      <p>该商家支持开发票，请在下单时天浩发票抬头</p>
    </section>
    <section v-if="isEmpety">
      <h3 class="title">商家信息</h3>
      <TextBar :textBarTitle="shopInfo.name"/>
      <TextBar :textBarTitle="shopInfo.address"/>
      <TextBar textBarTitle="营业执照"/>
      <TextBar textBarTitle="餐饮服务许可证"/>
    </section>
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../../components/header/header";
import TextBar from "../../../components/common/TextBar";
import { getShopInfo } from "../../../server/getData";
export default {
  name: "Order",
  data() {
    return {
      shopInfo:{},//商店列表
      id: this.$route.query.id
    };
  },
  computed:{
    isEmpety(){
      return Object.keys(this.shopInfo).length > 0;
    }
  },
  created() {
    getShopInfo(this.id).then(res => {
      console.log(res.data);
      this.shopInfo = res.data;
    });
  },
  components: {
    HeaderTop,
    TextBar
  }
};
</script>

<style scoped>
.order {
  padding-top: 39px;
}
.order section .title {
  padding: 5px 12px;
  font-size: 15px;
  color: #333;
}
.order section {
  margin-top: 10px;
  background: #fff;
}
.order section p {
  font-size: 12px;
  color: #333;
  padding: 0 12px;
  line-height: 2.5em;
  margin-bottom: 3px;
  background-color: #fff;
}
</style>