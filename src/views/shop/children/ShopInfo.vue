<template>
    <div class="order">
        <header-top :goback="true" :headshow="true" headtitle="店铺信息" >
        </header-top>
        <p>order</p>
        <Footer/>
    </div>
</template>
<script>
import HeaderTop from "../../../components/header/header"
export default {
    name:"Order",
    components:{
        HeaderTop,
    }
}
</script>

<style scoped>
.order {
    padding-top: 49px;
}
</style>