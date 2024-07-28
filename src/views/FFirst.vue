<script setup>
import TittlePage from "../components/TittlePage.vue";
import Forms from "@/components/BodyForms.vue";
import ButtonNext from "@/components/ButtonNext.vue";
import { useInfoStore } from "@/stores/form";

const infoStore = useInfoStore();
</script>

<template>
  <TittlePage tittle="SignUp" />
  <Forms :array="infoStore.Info">
    <template #button>
      <div class="flex justify-end">
        <span v-if="infoStore.validated == false">You will only be able to proceed if all fields are correctly completed.</span>
        <ButtonNext btnTittle="Next" router="/FSecond" v-else />
      </div>
    </template>
  </Forms>
</template>

<style scoped></style>
