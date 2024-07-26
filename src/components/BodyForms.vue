<script setup>
import { ref, reactive } from "vue";

import ButtonForm from "./ButtonForms.vue";

const allDefinitons = [
    {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Name",
        required: true,
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Email",
        required: true,
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Password",
        required: true,
    },
    {
        label: "Repeat Password",
        name: "passwordConfirmation",
        type: "password",
        placeholder: "Repeat Password",
        required: true,
    },
    {
        label: "Born Date",
        name: "BornDate",
        type: "date",
        placeholder: "Born Date",
        required: true,
    },
    {
        label: "Address",
        name: "address",
        type: "text",
        placeholder: "Address",
        required: true,
    },
];

</script>

<template>
  <main>
    <form class="form">
      <div class="ipt">
        <div v-for="(item, index) in allDefinitons" :key="index" class="iptDiv">
          <label>{{ item.label }}</label>
          <input :type="item.type" :placeholder="item.placeholder" />
        </div>
      </div>

      <div class="btnDiv">
        <ButtonForm btnTittle="Next" />
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
  background-color: aquamarine;
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

.iptDiv {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.iptDiv > input {
  width: 90%;
  height: 30px;
}

.btnDiv {
  padding: 30px;
  display: flex;
  justify-content: end;
  width: 100%;
}
</style>
