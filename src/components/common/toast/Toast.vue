<template>
  <div class="toast" v-if="isShow">{{msg}}</div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  methods: {
    show(msg = "默认文字",duration = 2000) {
      this.msg = msg;
      this.isShow = true;
    //   两秒钟后关闭
      setTimeout(() => {
          this.isShow = false;
          this.msg = "";
      },duration)
    },
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 12px;
  font-size: 12px;
  color: #fff;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>