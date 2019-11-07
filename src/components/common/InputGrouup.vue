<template>
  <section class="input_group">
    <input :type="inputtype" :placeholder="placeholder" class="input" />
  </section>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    "inputtype": {
      type: String,
      required: true,
      default: "text"
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style scoped>
.input_group {
  box-sizing: border-box;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
}
.input_group .input {
  font-size: 14px;
  color: #444;
  border: none;
  outline: none;
}
</style>