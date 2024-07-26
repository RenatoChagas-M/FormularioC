import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('Info', () => {
  const Info = ref([
    {label: "Name", type: "text", placeholder: "Enter your name", required: 'true', result: ''},
    {label: "Password", type: "password", placeholder: "Enter your name", required: 'true', result: ''},
    {label: "Confirm Password", type: "password", placeholder: "Enter your name", required: 'true', result: ''},
    {label: "email", type: "email", placeholder: "Enter your name", required: 'true', result: ''},
    ])

  const showInfo = ref(false)

  return { Info, showInfo }
})
