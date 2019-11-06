<template>
    <div class="home">
        <header-top>
            <i class="fa fa-search search_btn" aria-hidden="true" slot="search_btn"></i> 
        </header-top>
    </div>
</template>
<script>
import HeaderTop from "../../components/header/header"
export default {
    name:"Home",
    components:{
        HeaderTop
    }
}
</script>

<style scoped>
.home .search_btn {
    font-size: 20px;
    color: #fff;
}
</style>