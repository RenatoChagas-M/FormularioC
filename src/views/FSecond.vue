<script setup>
import TittlePage from '../components/TittlePage.vue'
import Forms from '@/components/BodyForms.vue'
import ButtonNext from '@/components/ButtonNext.vue'
import ButtonBack from '@/components/ButtonBack.vue'

import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore();

console.log(infoStore.Info2);

</script>

<template>
  <TittlePage tittle="SignUp 2" />
  <Forms :array="infoStore.Info2"/>
  <div>
    <ButtonBack btnTittle="back" router="/"/>
    <ButtonNext btnTittle="Next" router="/FProfile"/>    
</div>
</template>

<style scoped>

</style>
