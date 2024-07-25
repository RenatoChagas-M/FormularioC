<script setup>
import InputForm from './inputForm.vue'
import { save } from '../utils/login'


</script>


<template>
  <form @submit.prevent="save">
    <InputForm max_length="55" required="required" />
    <input type="submit" />
  </form>
</template>

<style scoped></style>
