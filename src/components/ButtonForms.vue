<script setup>
defineProps({
  btnTittle: {
    type: String,
  },
  Router: {
    type: Object,
  },
});
</script>

<template>
  <div class="btnDiv">
    <router-link class="btn" :to="Router">
      {{ btnTittle }}
    </router-link>
  </div>
</template>

<style scoped>

.btnDiv {
  display: flex;
  justify-content: end;
  align-items: center;

}

.btn {
    padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}


</style>
