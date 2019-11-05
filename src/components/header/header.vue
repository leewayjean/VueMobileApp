<template>
    <header>
        <slot name="logo"></slot>
        <!-- 返回按钮 -->
        <i class="fa fa-angle-left goback" aria-hidden="true" 
        v-if="goback"
        @click="goBack"
        ></i>
        <slot name="changcity"></slot>
    </header>
</template>
<script>
export default {
    name:"HeaderTop",
    props:{
        goback:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
header {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 39px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #3190e8;
}
header .goback {
    color: #fff;
    font-size: 22px;
}
</style>

