<script setup>
import TittlePage from "../components/TittlePage.vue";
import Forms from "@/components/BodyForms.vue";
import ButtonForms from "@/components/ButtonForms.vue";
import { useInfoStore } from "@/stores/form";

const infoStore = useInfoStore();

console.log(infoStore.Info2);
</script>

<template>
  <TittlePage tittle="SignUp" />
  <Forms :array="infoStore.Info" />
  <ButtonForms btnTittle="Next" router="/FSecond" />
</template>

<style scoped>
.inputs {
  width: 100%;
}
</style>
