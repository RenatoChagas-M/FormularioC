<script setup>
defineProps({
  btnTittle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="btn" type="submit">{{ btnTittle }}</button>
</template>

<style scoped>
.btn {
  width: 100px;
  height: 50px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
