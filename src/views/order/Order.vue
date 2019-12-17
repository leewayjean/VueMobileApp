<template>
    <div class="order">
        <header-top :goHome="true" :headshow="true" headtitle="订单列表" >
        </header-top>
        <p>order</p>
        <Footer/>
    </div>
</template>
<script>
import HeaderTop from "../../components/header/header"
import Footer from "../../components/footer/Footer"
export default {
    name:"Order",
    components:{
        HeaderTop,
        Footer
    }
}
</script>

<style scoped>
.order {
    padding-top: 39px;
}
</style>