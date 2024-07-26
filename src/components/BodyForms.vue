<script setup>
import ButtonForm from "./ButtonForms.vue";
import InputsForm from "./InputsForm.vue";
import { ref, reactive } from "vue";
import { useInfoStore } from '@/stores/form'

const infoStore = useInfoStore()

function save() {
  if (infoStore.Info.password == infoStore.Info.confirm) {
    infoStore.showInfo = true
  } else {
    alert('as senhas devem ser iguais')
  }
}

</script>

<template>
  <main>
    <form class="form" @submit.prevent="save()">
      <div class="ipt">
        <InputsForm
          v-for="(item, index) in infoStore.Info"
          :key="index"
          :label="item.label"
          :type="item.type"
          :placeholder="item.placeholder"
          :required="item.required"
          :index="index"
        />
      </div>

      <div class="btnDiv">
        <ButtonForm btnTittle="Next" router="/" />
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
}

.form {
  display: flex;
  height: 60%;
  width: 40%;
  flex-direction: column;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.ipt {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  }
  

.btnDiv {
  padding: 30px;
  display: flex;
  justify-content: end;
  width: 100%;
}
</style>
