<script setup>
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()
</script>

<template>
  <h1>tafunfando</h1>
  <p>{{ infoStore.Info }}</p>
  <button @click="infoStore.showInfo = false">voltar</button>
</template>
