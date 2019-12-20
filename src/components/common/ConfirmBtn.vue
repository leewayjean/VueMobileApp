<template>
  <span class="confirm-btn" @click="$emit('btn-click')">{{btnText}}</span>
</template>

<script>
export default {
    name:"ConfirmBtn",
    props:{
        btnText:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
.confirm-btn {
  display: inline-block;
  width: 300px;
  margin: 0 10px 20px;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  border-radius: 4px;
  background: #38bb8b;
}
</style>