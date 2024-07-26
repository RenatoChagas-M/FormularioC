import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('Info', () => {
  const Info = ref({
    name: '',
    password: '',
    confirm: '',
    birthday: null,
    adress: '',
    city: '',
    state: '',
    hobbies: [],
    languanges: [],
    biography: ''
  })

  const showInfo = ref(false)

  return { Info, showInfo }
})
