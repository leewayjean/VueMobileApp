<template>
    <div class="me">
        <header-top :goback="true" headtitle="我的" :headshow="true">
        </header-top>
        <p>me</p>
        <Footer/>
    </div>
</template>
<script>
import HeaderTop from "../../components/header/header"
import Footer from "../../components/footer/Footer"
export default {
    name:"Home",
    components:{
        HeaderTop,
        Footer
    }
}
</script>

<style scoped>
.me{
    padding-top: 39px;
}
.home .search_btn {
    font-size: 20px;
    color: #fff;
}
</style>