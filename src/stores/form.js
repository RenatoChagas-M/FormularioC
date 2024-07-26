import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('Info', () => {
  const Info = ref({})

  const showInfo = ref(false)

  return { Info, showInfo }
})
