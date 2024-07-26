<script setup>
import TittlePage from '../components/TittlePage.vue'
import Forms from '@/components/BodyForms.vue'
import InfoPage from '@/components/InfoPage.vue'
import ButtonForms from '@/components/ButtonForms.vue'
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()
</script>

<template>
  <div v-if="infoStore.showInfo == false">
    <TittlePage tittle="SignUp 2" />
    <Forms/>
  </div>
</template>

<style scoped>
.inputs {
  width: 100%;
}
</style>
