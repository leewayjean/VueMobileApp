<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App",
  created(){
    
  }

}
</script>
<style>
/* reset.css */
@import url("./assets/css/reset.css");
html {
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
}
/* app充满整屏 */
#app {
  width: 100%;
  height: 100vh;
}
</style>
