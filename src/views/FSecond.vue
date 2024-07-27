<script setup>
import TittlePage from '../components/TittlePage.vue'
import Forms from '@/components/BodyForms.vue'
import ButtonForms from '@/components/ButtonForms.vue'
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore();

console.log(infoStore.Info2);

</script>

<template>
  <TittlePage tittle="SignUp 2" />
  <Forms :array="infoStore.Info2"/>
  <div>
    <ButtonForms btnTittle="back" router="/FProfile"/>
  <ButtonForms btnTittle="Next" router="/FFirst"/>    
</div>
</template>

<style scoped>

</style>
