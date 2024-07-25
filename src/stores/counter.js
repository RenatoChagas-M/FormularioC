import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInfoStore = defineStore('Info', () => {
  const Info = reactive({
      name: String, 
      password: String,
      confirm: String,
      birthday: Date,
      adress: String,
      city: String,
      state: String,
      hobbies: [],
      languanges: [],
      biography: String,
    })
  
  return { Info, }
})
