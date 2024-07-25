<script setup>
import { ref } from 'vue'

import TittlePage from '../components/TittlePage.vue';
import Forms from  '../components/BodyForms.vue';
import FormsBtn from '../components/ButtonForms.vue';
import InputForm from '../components/inputForm.vue';

const nameLBL = ref([
    {tittle: "Name",},
    {tittle: "Email",},
    {tittle: "Password",},
    {tittle: "Confirm Password",},
    {tittle: "Born Date",},
    {tittle: "Address",},
]);

</script>

<template>
    <TittlePage tittle="SignUp"/>

    <Forms class="">
        <div class="inputs" v-for="(tittleName, index) in nameLBL" :key="index">
            <InputForm :tittleLBL="tittleName.tittle"/>
        </div>
        <FormsBtn btnTittle="Next"/>
    </Forms>
</template>

<style scoped>
.inputs{
    width: 100%;
}

</style>
