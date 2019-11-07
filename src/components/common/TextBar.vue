<template>
  <section class="text_bar">
    <section class="text_bar_title">
      <slot class="title_icon"></slot>
      <span class="text">{{textBarTitle}}</span>
    </section>
    <span class="next_icon">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </span>
  </section>
</template>

<script>
export default {
    name:"TextBar",
    props:{
        textBarTitle:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
.text_bar {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 39px;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
}
.text_bar .text_bar_title .text {
  font-size: 14px;
  color: #666;
}
.text_bar .next_icon i {
  color: #666;
}
</style>