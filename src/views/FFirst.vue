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
        <ButtonNext btnTittle="Next" router="/FSecond" />
      </div>
    </template>
  </Forms>
</template>

<style scoped></style>
