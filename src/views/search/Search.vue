<template>
    <div class="search">
        <header-top :goback="true" :headshow="true" headtitle="搜索">
        </header-top>
        <p>search</p>
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
.search {
    padding-top: 39px;
}
.home .search_btn {
    font-size: 20px;
    color: #fff;
}
</style>