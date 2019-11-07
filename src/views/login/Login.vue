<template>
  <div class="login">
    <header-top :goback="true" :headshow="true" :headtitle="cityName">
    </header-top>
  </div>
</template>

<script>
import HeaderTop from "../../components/header/header";
export default {
  components: {
    HeaderTop
  }
};
</script>