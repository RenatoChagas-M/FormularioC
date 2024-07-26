<script setup>
import TittlePage from '../components/TittlePage.vue';
import Forms from  '../components/BodyForms.vue';

import TittlePage from '../components/TittlePage.vue'
import BodyForms from '@/components/BodyForms.vue'
import InfoPage from '@/components/InfoPage.vue'
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()
</script>

<template>
  <div v-if="infoStore.showInfo == false">
    <TittlePage tittle="SignUp" />
    <Forms/>    
  </div>
  <div v-else>
    <InfoPage />
  </div>
</template>

<style scoped>
.inputs {
  width: 100%;
}
</style>
