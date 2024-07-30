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

const hobbies = ref([
  "caminhar",
  'correr',
  'cozinhar',
  'lutar',
  'ler',
  'ouvir música'
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
          <select class="state-ipt" v-model="infoStore.InfoSpecial[2].result">
            <option v-for="(item, index) in States" :key="index" :value="item.sigla">
              {{ item.name }}-{{ item.sigla }}
            </option>
          </select>
        </div>

        <div class="flex justify-center h-56 gap-12 items-center">
          <div class="flex flex-col overflow-y-scroll h-32 border-b-gray-500 border-2 border-t-gray-500">
            <label for="">Select your hobbies:</label>
            <label v-for="(item, index) of hobbies" :key="index" class="flex flex-row items-center">
              {{ item }}
              <input type="checkbox" v-model="infoStore.InfoSpecial[0].result" :value="item" />
            </label>

          </div>

          <div class="flex flex-col overflow-y-scroll h-32 border-b-gray-500 border-2 border-t-gray-500">
            <label for="">Select your Languages:</label>
            <label v-for="(item, index) of languages" :key="index" class="flex flex-row items-center">
              {{ item }}
              <input type="checkbox" v-model="infoStore.InfoSpecial[1].result" :value="item" />
            </label>
          </div>
        </div>

      </div>
    </template>
    <template #button>
      <div class="button-order">
        <div>
          <ButtonBack btn-tittle2="Back" router2="/" />
        </div>
        <div>
          <ButtonNext btn-tittle="Next" router="/FProfile" />
        </div>
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

.hobbies>input {
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

.iptDiv>input:focus {
  border: 0px;
}

.state-ipt {
  width: 100%;
  height: 30px;
  background: none;
}

.button-order {
  display: flex;
  justify-content: space-between;

}
</style>
