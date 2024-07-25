<script setup>
import InputForm from './inputForm.vue'


function save() {
  e.preventDefault()
  console.log('foi')
}
</script>

<template>
  <form :action="save">
    <InputForm type="number" max_length="4" required="required" />
    <input type="submit" />
  </form>
</template>

<style scoped></style>
