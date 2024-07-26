import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('Info', () => {
  const Info = ref([
    {label: "Name", type: "text", placeholder: "Enter your name", required: 'true', result: ''},
    {label: "Password", type: "password", placeholder: "Enter your Password", required: 'true', result: ''},
    {label: "Confirm Password", type: "password", placeholder: "Enter your Confirm Password", required: 'true', result: ''},
    {label: "email", type: "email", placeholder: "Enter your Email", required: 'true', result: ''},
    {label: "Born Date", type: "date", placeholder: "Enter your name", required: 'true', result: ''},
    {label: "address", type: "text", placeholder: "Enter your address", required: 'true', result: ''},
    ])

    const Info2 = ref([
    {label: "City", type: "text", placeholder: "Enter your City", required: 'true', result: ''},
    {label: "State", type: "select", placeholder: "Enter your State", required: 'true', result: ''},
    {label: "Hobbies", type: "checkbox", placeholder: "Enter your Hobbies", required: 'true', result: ''},
    {label: "Languages", type: "checkbox", placeholder: "Enter your Languages", required: 'true', result: ''},
    {label: "biography", type: "textarea", placeholder: "Enter your biography", required: 'true', result: ''},
    ])

  const showInfo = ref(false)

  return { Info, showInfo }
})
