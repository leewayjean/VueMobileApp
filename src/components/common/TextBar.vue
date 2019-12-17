<template>
  <section class="text-bar">
    <section class="text-bar-title">
      <slot class="title_icon"></slot>
      <span class="text-bar-name">{{textBarTitle}}</span>
    </section>
    <span class="next-icon">
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
.text-bar {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 39px;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
}
.text-bar-name {
  font-size: 14px;
  color: #666;
}
.next-icon i {
  color: #666;
  font-size: 16px;
}
</style>