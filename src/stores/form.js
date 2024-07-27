import { ref} from 'vue'
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
    {label: "biography", type: "textarea", placeholder: "Enter your biography", result: ''},
    ])
    
    const ck_S_Info = ref({
      hobbies:"",
      languages:[""],
      state:'',
    })

    const allInfo = ref([...Info.value, ...Info2.value])

  return { Info, Info2, allInfo, ck_S_Info }
})
