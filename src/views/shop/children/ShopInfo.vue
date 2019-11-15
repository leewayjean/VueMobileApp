<template>
  <div class="order">
    <header-top :goback="true" :headshow="true" headtitle="店铺详情"></header-top>
    <Cell>
      <h3 slot="title">
        活动与属性
      </h3>
    </Cell>
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../../components/header/header";
import { getShopInfo } from "../../../server/getData";
import { Cell } from 'mint-ui';
export default {
  name: "Order",
  data() {
    return {
      id: this.$route.query.id
    };
  },
  mounted() {
    getShopInfo(this.id).then(res => {
      console.log(res.data);
    });
  },
  components: {
    HeaderTop,
    Cell
  }
};
</script>

<style scoped>
.order {
  padding-top: 49px;
}
</style>