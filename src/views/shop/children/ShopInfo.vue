<template>
    <div class="order">
        <header-top :goback="true" :headshow="true" headtitle="店铺详情" >
        </header-top>
        <p>order</p>
        <Footer/>
    </div>
</template>
<script>
import HeaderTop from "../../../components/header/header"
export default {
    name:"Order",
    data(){
        return {
            id:this.$route.query.id,
        }
    },
    mounted(){
        this.$axios.get(`https://elm.cangdu.org/shopping/restaurant/${this.id}`).then((res) => {
            console.log(res.data);
        })
    },
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