<script setup>
import TittlePage from '../components/TittlePage.vue'
import Forms from '@/components/BodyForms.vue'
import ButtonForms from '@/components/ButtonForms.vue'
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()
</script>

<template>
    <TittlePage tittle="SignUp" />
    <Forms :array="infoStore.Info"/>    
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
