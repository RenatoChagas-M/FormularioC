<script setup>
import TittlePage from "../components/TittlePage.vue";
import Forms from "@/components/BodyForms.vue";
import ButtonNext from "@/components/ButtonNext.vue";
import ButtonBack from "@/components/ButtonBack.vue";

import { ref } from "vue";
import { useInfoStore } from "@/stores/form";

const States = ref([
  { name: "Acre", sigla: "AC" },
  { name: "Alagoas", sigla: "AL" },
  { name: "Amapá", sigla: "AP" },
  { name: "Amazonas", sigla: "AM" },
  { name: "Bahia", sigla: "BA" },
  { name: "Ceará", sigla: "CE" },
  { name: "Distrito Federal", sigla: "DF" },
  { name: "Espírito Santo", sigla: "ES" },
  { name: "Goiás", sigla: "GO" },
  { name: "Maranhão", sigla: "MA" },
  { name: "Mato Grosso", sigla: "MT" },
  { name: "Mato Grosso do Sul", sigla: "MS" },
  { name: "Minas Gerais", sigla: "MG" },
  { name: "Pará", sigla: "PA" },
  { name: "Paraíba", sigla: "PB" },
  { name: "Paraná", sigla: "PR" },
  { name: "Pernambuco", sigla: "PE" },
  { name: "Piauí", sigla: "PI" },
  { name: "Rio de Janeiro", sigla: "RJ" },
  { name: "Rio Grande do Norte", sigla: "RN" },
  { name: "Rio Grande do Sul", sigla: "RS" },
  { name: "Rondônia", sigla: "RO" },
  { name: "Roraima", sigla: "RR" },
  { name: "Santa Catarina", sigla: "SC" },
  { name: "São Paulo", sigla: "SP" },
  { name: "Sergipe", sigla: "SE" },
  { name: "Tocantins", sigla: "TO" },
  { name: "Estrangeiro", sigla: "EX" },
]);

const languages = ref([
  " C#",
  " Python",
  " C++",
  " JavaScript",
  " PHP",
  " Swift",
  " Java",
  " Go",
  " SQL",
  " Ruby",
]);

const infoStore = useInfoStore();
</script>

<template>
  <TittlePage tittle="SignUp 2" />
  <Forms :array="infoStore.Info2">
    <template #ckS>
      <div class="form">
        <div class="state">
          <div>
            <label for="">Select your State</label>
          </div>
          <select class="state-ipt">
            <option v-for="(item, index) in States" :key="index" :value="item.name">
              {{ item.name }}-{{ item.sigla }}
            </option>
          </select>
        </div>

        <div class="hobbies">
          <label for="">Select your Hobbie:</label>
          <input type="text" v-model="infoStore.hobbies" />
        </div>

        <div class="flex flex-col">
          <label for="">Select your Languages:</label>
          <label
            v-for="(item, index) of languages"
            :key="index"
            class="flex flex-row items-center">
            {{ item }}
            <input type="checkbox" v-model="infoStore.languages" :value="item" />
          </label>

        </div>
      </div>
    </template>
    <template #button>
      <div class="flex flex-col justify-between">
        <div>
          <ButtonBack btnTittle="back" router2="/" />
        </div>
      </div>
      <div>
        <ButtonNext btnTittle="Next" router="/FProfile" />
      </div>
    </template>
  </Forms>
</template>

<style scoped>
.form {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 30px;
}

.ipt {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}

.state {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

.hobbies
>  input {
  width: 100%;
  height: 30px; 
  background: none;
  border-bottom: 1px solid gray;
}

.hobbies {
  display: flex;
  flex-direction: column;
  padding: 10px 0px; 
}

.iptDiv > input:focus {
  border: 0px;
}

.state-ipt {
  width: 100%;
  height: 30px;
  background: none;
}

.languages {
  display: flexq;
}


</style>
