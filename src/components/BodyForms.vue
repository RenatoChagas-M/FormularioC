<script setup>
import { useInfoStore } from '@/stores/form'
import { reactive } from 'vue'
import FormsBtn from '../components/ButtonForms.vue'

const newUser = reactive({
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
const infoStore = useInfoStore()

function save() {
  if (newUser.password == newUser.confirm) {
    infoStore.Info = newUser.value
    infoStore.showInfo = true
    console.log(infoStore.Info)
  } else {
    alert('as senhas devem ser iguais')
  }
}
</script>

<template>
  <body>
    <form class="formulario" @submit.prevent="save">
      <input type="text" name="" id="" :value="newUser.name" />
      <input type="password" name="" id="" :value="newUser.password" />
      <input type="password" name="" id="" :value="newUser.confirm" />
      <FormsBtn btnTittle="Next" />
    </form>
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
}

.formulario {
  max-width: 100%;
  display: flex;
  padding: 12px;
  width: 50%;
  height: 90%;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.185) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.048) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.021) 0px 0px 0px 1px inset;
}
</style>
