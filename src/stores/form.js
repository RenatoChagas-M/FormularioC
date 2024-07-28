import { ref, computed } from 'vue'
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

    const InfoSpecial = ref([
    {label: 'hobbies', type: 'checkbox', placeholder: 'Enter your hobbies', result: []},
    {label: 'languages', type: 'checkbox', placeholder: 'Enter the languages do you know', result: []},
    {label: 'state', type: 'select', placeholder: 'Enter your living state', result: ''},
    ])
    
    const validPassword = computed(() => {
      const indexPass = Info.value.findIndex((s) => s.label === 'Password')
      const indexConfirm = Info.value.findIndex((s) => s.label === 'Confirm Password' )
      return (Info.value[indexPass].result == Info.value[indexConfirm].result) ? true : false
    })
    
    const validEmail = computed(() => {
      const indexEmail = Info.value.findIndex((s) => s.label === 'email')
      const email = Info.value[indexEmail]
      return email && email.result.includes('@') && email.result.includes('.')
    })

    const validOthers = computed (() => {
      const indexName = Info.value.findIndex((s) => s.label === 'Name' )
      const indexBorn = Info.value.findIndex((s) => s.label === 'Born Date' )
      const indexAddress = Info.value.findIndex((s) => s.label === 'address' )
      const name = Info.value[indexName]
      const bornDate = Info.value[indexBorn]
      const address = Info.value[indexAddress]
      return name.result != '' && bornDate.result != '' && address.result != ''
    })

    const validated = computed(() => {
      return (validPassword.value && validEmail.value && validOthers.value) ? true : false 
    }) 

    const allInfo = ref([...Info.value, ...Info2.value, ...InfoSpecial.value])

  return { Info, Info2, InfoSpecial, allInfo, validated}
})
