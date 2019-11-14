<template>
  <div class="order">
    <header-top :goback="true" :headshow="true" headtitle="店铺详情"></header-top>
    <p>order</p>
    <Footer />
  </div>
</template>
<script>
import HeaderTop from "../../../components/header/header";
import { getShopInfo } from "../../../server/getData";
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
    HeaderTop
  }
};
</script>

<style scoped>
.order {
  padding-top: 49px;
}
</style>